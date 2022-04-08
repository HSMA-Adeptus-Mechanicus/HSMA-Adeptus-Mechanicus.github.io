
let theme = localStorage.getItem("theme") ?? "light";

window.addEventListener("load", main);
function main()
{
	update();
	initToggle();
}


function initToggle()
{
	let elem = document.querySelector(".theme-toggle");
	elem.style.removeProperty("display");

	elem.addEventListener("click", () =>
	{
		theme = theme === "light" ? "dark" : "light";
		localStorage.setItem("theme", theme);
		update();
	});
}

function update()
{
	document.documentElement.classList.add(theme);
	document.documentElement.classList.remove(theme === "dark" ? "light" : "dark");

	document.querySelector(".theme-toggle > img").src = theme === "dark"
		? "/icons/nightlight_round_white_24dp.svg"
		: "/icons/light_mode_black_24dp.svg";
}