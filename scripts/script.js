function disappearAllPages() {
	var x = document.getElementById("news");
	x.style.display = "none";
	x = document.getElementById("about-me");
	x.style.display = "none";
	x = document.getElementById("research-interest");
	x.style.display = "none";
	x = document.getElementById("publication-list");
	x.style.display = "none";
}

function showAboutMe() {
	disappearAllPages();
	var x = document.getElementById("about-me");
	if (x.style.display === "none") {
		x.style.display = "block";
	}
	x = document.getElementById("research-interest");
	if (x.style.display === "none") {
		x.style.display = "block";
	}
}

function showPublicationList() {
	disappearAllPages();
	var x = document.getElementById("publication-list");
	if (x.style.display === "none") {
		x.style.display = "block";
	}
}

function showNews() {
	disappearAllPages();
	var x = document.getElementById("news");
	if (x.style.display === "none") {
		x.style.display = "block";
	}
}