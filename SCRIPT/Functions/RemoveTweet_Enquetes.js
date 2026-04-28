async function Remover_Enquetes(){
		try {
			var POLLS = document.querySelectorAll("article[ARTICLE_LOADED='true'] div[data-testid='cardPoll']:not([POLL])");
			if (POLLS.length > 0) {
				for (var element of POLLS) {
					var article = ARTICLE_FIND(element);
					if ( isOnPost() == true && article.querySelector("div[data-testid='User-Name'] span").innerText == MAIN_TWEET.nome) {
						article.setAttribute('LINK_TWEET', true);
						element.setAttribute('LINK_TWEET', true);
						continue;
					}
					if (IS_SELF_TWEET(article)) {
						article.setAttribute('LINK_TWEET', true);
						element.setAttribute('LINK_TWEET', true);
						continue;
					}
					if (article) {
						await Push_Tweet(article,"Tweet com Enquete")
					}
					element.setAttribute('POLL', true);
				};
			}
		} catch (error) {
			throw error;
		}
	}