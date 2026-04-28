async function REMOVE_RIGHT_CONTENT(){
		const sidesbar = document.querySelectorAll("div[data-testid='sidebarColumn'] aside[role='complementary']:not([BANNED_WORD])");
		sidesbar.forEach(async function(item) {
			item.setAttribute("BANNED_WORD",true);
			await Push_Tweet(item.parentElement,"Conteúdo Lateral")
		})
	}