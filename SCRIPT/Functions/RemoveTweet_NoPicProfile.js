async function NoPic_Profile(){
		try {
			const NO_PICS = document.querySelectorAll("article[ARTICLE_LOADED='true'] div[data-testid='Tweet-User-Avatar'] img:not([DEFAULT_PIC])");
			if (NO_PICS.length > 0) {
				for (var element of NO_PICS) {
					var article = ARTICLE_FIND(element);
					if (IS_SELF_TWEET(article)) {
						article.setAttribute('DEFAULT_PIC', true);
						element.setAttribute('DEFAULT_PIC', true);
						continue;
					}
					if (element.src == "https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png") {
						if (article) {
							await Push_Tweet(element,"Usuário sem Foto")
						}
					}
					element.setAttribute('DEFAULT_PIC', true);
				};
			}
		} catch (error) {
			throw error;
		}
	}