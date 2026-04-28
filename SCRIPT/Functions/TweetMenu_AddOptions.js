async function ADD_REPORT_BUTTON ()  {
			try {
				var ALL_TWEETS = document.querySelectorAll("article[ARTICLE_LOADED='true']:not([BUTTON_ADDED])");
				if (ALL_TWEETS.length > 0) {
					for (var article of ALL_TWEETS) {
						
								var items_Div = document.createElement("div");
								items_Div.classList = "ITENS_BUTTONS_DIV";
								
						//ADICIONA OPÇÃO RÁPIDA DE BLOQUEAR SUJEITO 
						if (IS_SELF_TWEET(article)) {
							if(article.querySelector("button[aria-haspopup='menu'][role='button'][data-testid='caret']")&&FUNCTION_SETTINGS.SHORTCUTS.selfDeleteOption == true){
							nickNameDIV = article.querySelector("button[aria-haspopup='menu'][role='button'][data-testid='caret']").parentElement.parentElement.parentElement.parentElement.parentElement;
								if (nickNameDIV) {
										var i_Delete = document.createElement("i");
									i_Delete.classList = "delete";
									i_Delete.id = "ICON_DIV";
									i_Delete.title = chrome.i18n.getMessage("fastDelete_tip");
									i_Delete.setAttribute("aria-hidden", true);
									i_Delete.addEventListener("click", function(e) {
										ARTICLE_ACTION(e, 'selfDelete')
									});
									items_Div.appendChild(i_Delete);
									
										nickNameDIV.style.display="flex";
										nickNameDIV.style.flexDirection="row";

								nickNameDIV.prepend(items_Div);
							}
						}
							article.setAttribute('BUTTON_ADDED', true);
							return;
						}
						if (article.querySelector("div[data-testid='User-Name']") && article.querySelector("button[aria-haspopup='menu'][role='button'][data-testid='caret']")) {
							nickNameDIV = article.querySelector("button[aria-haspopup='menu'][role='button'][data-testid='caret']").parentElement.parentElement.parentElement.parentElement.parentElement;
							if (nickNameDIV) {
								nickNameDIV.style.display = "flex";
								nickNameDIV.style.flexDirection = "row-reverse";
								nickNameDIV.appendChild(items_Div);
								nickNameDIV.setAttribute('BUTTON_ADDED', true);
								if (FUNCTION_SETTINGS.SHORTCUTS.report_tweet == true) {
									var i_Report = document.createElement("i");
									i_Report.classList = "report";
									i_Report.id = "ICON_DIV";
									i_Report.title = chrome.i18n.getMessage("fastReport_tip");
									i_Report.setAttribute("aria-hidden", true);
									i_Report.addEventListener("click", function(e) {
										ARTICLE_ACTION(e, 'remove')
									});
									items_Div.appendChild(i_Report)
								}
								if (FUNCTION_SETTINGS.SHORTCUTS.fast_block == true) {
									var i_block = document.createElement("i");
									i_block.classList = "lock";
									i_block.id = "ICON_DIV";
									i_block.title = chrome.i18n.getMessage("fastBlock_tip");
									i_block.setAttribute("aria-hidden", true);
									i_block.addEventListener("click", function(e) {
										ARTICLE_ACTION(e, 'block')
									});
									items_Div.appendChild(i_block)
								}
								if (FUNCTION_SETTINGS.SHORTCUTS.view_quotes == true) {
									var i_quotes = document.createElement("i");
									i_quotes.classList = "chat";
									i_quotes.id = "ICON_DIV";
									i_quotes.title = chrome.i18n.getMessage("fastQuotes_tip");
									i_quotes.setAttribute("aria-hidden", true);
									i_quotes.addEventListener("click", function(e) {
										ARTICLE_ACTION(e, 'check_quotes')
									});
									items_Div.appendChild(i_quotes)
								}
								if (FUNCTION_SETTINGS.SHORTCUTS.view_less == true) {
									var i_view_less = document.createElement("i");
									i_view_less.classList = "viewLess";
									i_view_less.id = "ICON_DIV";
									i_view_less.title = chrome.i18n.getMessage("fastseeLess_tip");
									i_view_less.setAttribute("aria-hidden", true);
									i_view_less.addEventListener("click", function(e) {
										ARTICLE_ACTION(e, 'view_less')
									});
									items_Div.appendChild(i_view_less)
								}
								if (FUNCTION_SETTINGS.SHORTCUTS.mute_user == true) {
									var i_mute = document.createElement("i");
									i_mute.classList = "mute";
									i_mute.id = "ICON_DIV";
									i_mute.title = chrome.i18n.getMessage("fastMute_tip");
									i_mute.setAttribute("aria-hidden", true);
									i_mute.addEventListener("click", function(e) {
										ARTICLE_ACTION(e, 'mute_tweet')
									});
									items_Div.appendChild(i_mute)
								}
								article.setAttribute('BUTTON_ADDED', true);
							}
						}
					}
				}
			} catch (e) {
				throw e;
			}
		}

		
function LOCK_USER() {
	try {
		if (document.querySelector("div[data-testid='confirmationSheetDialog']")) {
			blockConfirm = document.querySelector("div[data-testid='confirmationSheetDialog'] button").click();
		} else {
			setTimeout(LOCK_USER, 500);
		}
	} catch (e) {
		setTimeout(LOCK_USER, 500);
	}
}

function VIEW_LESS_THIS() {
	try {
		viewLessBtn = document.querySelector("div[data-testid='Dropdown'] path[d='" + ver_menos_path + "']").closest("div");
		viewLessBtn.click();
	} catch (e) {
		setTimeout(VIEW_LESS_THIS, 500);
	}
}

function MUTE_TWEET() {
	try {
		MuteBtn = document.querySelector("div[data-testid='Dropdown'] path[d='" + mute_path + "']").closest("div");
		MuteBtn.click();
	} catch (e) {
		setTimeout(MUTE_TWEET, 500);
	}
}