import { mulberry32 } from "./mulberry.js";

window.addEventListener("load", () =>
{
	for (let elem of document.querySelectorAll(".team > div")) {

		elem.onmouseover = function () {
			elem.style.removeProperty("background-color");
			let color = getComputedStyle(elem).backgroundColor;
			let values = color.match(/(\d+).*?(\d+).*?(\d+)/).slice(1);
			let brighten = 1.2;
			values = values.map(v => Math.round(v * brighten));
			elem.style.backgroundColor = `rgb(${values.join(", ")})`;
		}
		elem.onmouseout = function () {
			elem.style.removeProperty("background-color");
			let color = getComputedStyle(elem).backgroundColor;
			let values = color.match(/(\d+).*?(\d+).*?(\d+)/).slice(1);
			let brighten = 1.0;
			values = values.map(v => Math.round(v * brighten));
			elem.style.backgroundColor = `rgb(${values.join(", ")})`;
		}
	}

	shiftColors();
	let observer = new MutationObserver(() =>
	{
		shiftColors();
	});
	observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
});

function shiftColors()
{
	let rand = mulberry32(87342697);
	for (let elem of document.querySelectorAll(".team > div"))
	{
		elem.style.removeProperty("background-color");
		let color = getComputedStyle(elem).backgroundColor;
		let values = color.match(/(\d+).*?(\d+).*?(\d+)/).slice(1);
		let brighten = 1.0;
		values = values.map(v => Math.round(v * brighten));
		elem.style.backgroundColor = `rgb(${values.join(", ")})`;
	}
}
