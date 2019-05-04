function showHide () {
	var click = document.getElementById("drop-content");
	if (click.style.display === "none") {
		click.style.display = "block";
	} else {
		click.style.display = "none";
	}
}


/*linter said "no"*/
/*var showHide = () => 
{let click = document.getElementById("drop-content");
click.style.display === "none" ? click.style.display = "block" : click.style.display = "none"};
*/