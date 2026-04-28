async function UPDATE_TWEET_MAIN () {
			try {
				if (!isOnPost() == true) {
					MAIN_TWEET.arroba = "";
					MAIN_TWEET.nome = "";
					MAIN_TWEET.id = "";
					return;
				}
				const spans = Array.from(document.querySelectorAll("article[data-testid='tweet'][ARTICLE_LOADED='true'] div[data-testid='User-Name'] span:not([NAME_CATCH])"));
				if (spans.length > 0) {
					const spansComArroba = spans.filter(span => {
						span.setAttribute("NAME_CATCH", true);
						return span.textContent.startsWith('@');
					});
					if (window.location.href.indexOf(spansComArroba[0].innerText.replace("@", "")) != -1) {
						MAIN_TWEET.arroba = spansComArroba[0].innerText;
						spansComArroba[0].setAttribute("NAME_CATCH", true);
						MAIN_TWEET.nome = document.querySelector("article[data-testid='tweet'][ARTICLE_LOADED='true'] div[data-testid='User-Name'] span").innerText;
						const closest_ahref = document.querySelector("article[data-testid='tweet'][ARTICLE_LOADED='true'] a time").closest("a").href.split("/")[5];
						MAIN_TWEET.id = closest_ahref;
					}
				}
			} catch (e) {
				throw e;
			}
		}