async function Spoiler_Tudo(){
		try {
			var TWEETS_ALL = Array.from(document.querySelectorAll("article[data-testid='tweet'][ARTICLE_LOADED] div[data-testid='tweetPhoto']:not([CENSURADO])"));
			TWEETS_ALL = TWEETS_ALL.concat(Array.from(document.querySelectorAll("article[data-testid='tweet'][ARTICLE_LOADED='true'] div[data-testid='card.wrapper'] div[data-testid='card.layoutSmall.media']:not([CENSURADO])")), Array.from(document.querySelectorAll("article[data-testid='tweet'][ARTICLE_LOADED='true'] div[data-testid='card.wrapper'] div[data-testid='card.layoutLarge.media']:not([CENSURADO])")))
			let TWEETS_ALL_LENGTH = TWEETS_ALL.length;
			if (TWEETS_ALL_LENGTH > 0) {
				for (var i = 0; i < TWEETS_ALL_LENGTH; i++) {
					let element = TWEETS_ALL[i];
					var article = ARTICLE_FIND(element);
					if (IS_SELF_TWEET(article)) {
						article.setAttribute('CENSURADO', true);
						element.setAttribute('CENSURADO', true);
						return;
					}
					if (!element.querySelector("path[d='M3.693 21.707l-1.414-1.414 2.429-2.429c-2.479-2.421-3.606-5.376-3.658-5.513l-.131-.352.131-.352c.133-.353 3.331-8.648 10.937-8.648 2.062 0 3.989.621 5.737 1.85l2.556-2.557 1.414 1.414L3.693 21.707zm-.622-9.706c.356.797 1.354 2.794 3.051 4.449l2.417-2.418c-.361-.609-.553-1.306-.553-2.032 0-2.206 1.794-4 4-4 .727 0 1.424.192 2.033.554l2.263-2.264C14.953 5.434 13.512 5 11.986 5c-5.416 0-8.258 5.535-8.915 7.001zM11.986 10c-1.103 0-2 .897-2 2 0 .178.023.352.067.519l2.451-2.451c-.167-.044-.341-.067-.519-.067zm10.951 1.647l.131.352-.131.352c-.133.353-3.331 8.648-10.937 8.648-.709 0-1.367-.092-2-.223v-2.047c.624.169 1.288.27 2 .27 5.415 0 8.257-5.533 8.915-7-.252-.562-.829-1.724-1.746-2.941l1.438-1.438c1.53 1.971 2.268 3.862 2.33 4.027z'")) {
						SPOILER_ARRAY.push(element);
						element.setAttribute('CENSURADO', true);
						element.addEventListener("mouseover", function(e) {
							ARTICLE_ACTION(element, "decensurar")
						});
						element.addEventListener("mouseout", function(e) {
							ARTICLE_ACTION(element, "censurar")
						});
					}
				}
			} else {
				//ANTI-SPOILER FOR MEDIA VIEW
				let MEDIAS = document.querySelectorAll("div li[role='listitem'] img:not([CENSURADO])")
				let MEDIAS_LENGTH = MEDIAS.length;
				if (MEDIAS_LENGTH > 0) {
					for (var i = 0; i < MEDIAS_LENGTH; i++) {
						let element = MEDIAS[i];
						if (!element.querySelector("div[role='button']")) {
							closestDiv = element.closest("div");
							SPOILER_ARRAY.push(closestDiv);
							element.setAttribute('CENSURADO', true)
							element.addEventListener("mouseover", function(e) {
								ARTICLE_ACTION(e.target.closest("div.Blur"), "decensurar")
							});
							element.addEventListener("mouseout", function(e) {
								ARTICLE_ACTION(e.target.closest("div"), "censurar")
							});
						}
					}
				}
			}
		} catch (error) {
			throw error;
		}
	}