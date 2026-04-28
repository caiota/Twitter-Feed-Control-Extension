async function HORIZONTAL_PANEL() {
	try{
	var ALL_NAVS = Array.from(document.querySelectorAll("header nav a:not([HORIZONTAL])"));
	ALL_NAVS = ALL_NAVS.concat(Array.from(document.querySelectorAll("header nav button:not([HORIZONTAL])")));
	if (ALL_NAVS.length > 0) {
		var HEADER_NAV = document.querySelector("header nav");
		document.querySelector("header").style.width = "0";
		document.querySelector("header button[data-testid='SideNav_AccountSwitcher_Button']").parentElement.parentElement.parentElement.style.justifyContent = "flex-start"
		for (var link of ALL_NAVS) {
			link.querySelector("div span").remove();
			link.style.width = "auto";
			link.style.alignItems = "flex-end";
			link.querySelector('div').classList.add("flexItemView");
			link.setAttribute("HORIZONTAL", true);
		}
		HEADER_NAV.classList.add("NavHorizontal");
		HEADER_NAV.style.backgroundColor = document.body.style.backgroundColor;
		document.querySelector("main[role='main']").style.marginTop = "5%";
	}
	var FORM_DIVS = document.querySelector("div[data-testid='sidebarColumn'] div div div div div form");
	if (FORM_DIVS) {
		if (FORM_DIVS.parentElement.parentElement.parentElement.parentElement.style.position != "absolute") {
			FORM_DIVS.parentElement.parentElement.parentElement.parentElement.style.position = "absolute";
		}
	}
}catch(e){
	throw e;
}
}