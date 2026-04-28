async function REMOVER_SELF_TWEETS(){
			try {
				if (isOnPost() == true) {
					var TWEETS_SELF = Array.from(document.querySelectorAll("article:not([SELF_TWEET])"));
					let TWEETS_SELF_LENGTH = TWEETS_SELF.length;
					if (TWEETS_SELF_LENGTH > 1) {
						for (var i = 0; i < TWEETS_SELF_LENGTH; i++) {
							let element = TWEETS_SELF[i];
							if (IS_SELF_TWEET(element) == true) {
								element.setAttribute('SELF_TWEET', true);
								return;
							}
							if (element.querySelector("article[data-testid='tweet'] div[data-testid='User-Name'] span").innerText == MAIN_TWEET.nome) {
								element.setAttribute('SELF_TWEET', true);
								return;
							}
							if (element.querySelectorAll("div[data-testid='User-Name']").length == 2) {
								const arrF = Array.from(element.querySelectorAll("div[data-testid='User-Name'] span")).filter(span => {
									return span.textContent.startsWith('@');
								})
								if (!arrF[1]) {
									return;
								}
								const arr0InnerText = arrF[0].innerText;
								const arr1InnerText = arrF[1].innerText;
								if (arr0InnerText != MAIN_TWEET.arroba && arr0InnerText == arr1InnerText) {
									Push_Tweet(element,"Retweet Próprio Detectado")
								}
							}
							element.setAttribute('SELF_TWEET', true)
						};
					}
				}
			} catch (error) {
				throw error;
			}
		}