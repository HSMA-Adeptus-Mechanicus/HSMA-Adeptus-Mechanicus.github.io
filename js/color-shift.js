import { mulberry32 } from "./mulberry.js";

window.addEventListener("load", () =>
{
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
	for (let elem of document.querySelectorAll(".team .front"))
	{
		elem.style.removeProperty("background-color");
		let color = getComputedStyle(elem).backgroundColor;
		let values = color.match(/(\d+).*?(\d+).*?(\d+)/).slice(1).map(v => +v);
		let brighten = rand.randRange(-10, 10);
		let diff = values.map(v => (v + brighten) / v).reduce((a, c) => a + c) / 3;

		values = values.map(v => Math.round(v * diff));
		elem.style.backgroundColor = `rgb(${values.join(", ")})`;
	}
}
