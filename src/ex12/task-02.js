topMenu.addEventListener("click", showHide);

function showHide () {
	var click = document.getElementById("drop-content");
	if (click.style.display === "none") {
		click.style.display = "block";
	} else {
		click.style.display = "none";
	}
}