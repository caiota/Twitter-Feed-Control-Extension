async function Remover_Links() {
		try {
			if (FUNCTION_SETTINGS.Remover_Links.onlyLink == false) {
				var TWEETS_LINKS = Array.from(document.querySelectorAll("article[ARTICLE_LOADED='true'] div[data-testid='tweetText'] a[target='_blank']:not([LINK_TWEET])"))
			} else {
				var TWEETS_LINKS_DEF = Array.from(document.querySelectorAll("article[ARTICLE_LOADED='true'] div[data-testid='tweetText']:not([LINK_TWEET])"))
				var TWEETS_LINKS = []
				let TWEETS_LINKS_DEF_LENGTH = TWEETS_LINKS_DEF.length;
				for (var i = 0; i < TWEETS_LINKS_DEF_LENGTH; i++) {
					let tweet = TWEETS_LINKS_DEF[i];
					const article = tweet.closest("article")
					if (tweet.children.length == 1 && tweet.children[0].nodeName == 'A' && getPostElements(article) == false) {
						TWEETS_LINKS.push(tweet)
					} else {
						article.setAttribute('LINK_TWEET', true);
						tweet.setAttribute('LINK_TWEET', true);
					}
				}
			}
			let TWEETS_LINKS_LENGTH = TWEETS_LINKS.length;
			if (TWEETS_LINKS_LENGTH > 0) {
				for (var i = 0; i < TWEETS_LINKS_LENGTH; i++) {
					let element = TWEETS_LINKS[i];
					var article = ARTICLE_FIND(element);
					if (isOnPost() == true && article.querySelector("div[data-testid='User-Name'] span").innerText == MAIN_TWEET.nome) {
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
						await Push_Tweet(element,"Tweet com Link")
					}
					element.setAttribute('LINK_TWEET', true)
					article.setAttribute('LINK_TWEET', true)
				}
			}
		} catch (error) {
			throw error;
		}
	}