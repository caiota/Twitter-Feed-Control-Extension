async function ARTICLE_ELEMENT_PROCESSOR() {
			var articles = Array.from(document.querySelectorAll("article[data-testid='tweet'][ARTICLE_LOADED='true'] div[data-testid='tweetText']:not([MARKED])"));
			TEXTS = [];
			let articles_LENGTH = articles.length;
			if (articles_LENGTH > 0) {
				for (var i = 0; i < articles_LENGTH; i++) {
					let item = articles[i];
					var article = ARTICLE_FIND(item);
					if (IS_SELF_TWEET(article)) {
						article.setAttribute('MARKED', true);
						item.setAttribute('MARKED', true);
						continue;
					}
					if (!item.id) {
						//EVITA FILHOS DOS ELEMENTOS DE SEREM COMPARADOS COM OS PAIS 
						item.setAttribute("MARKED", true);
						return;
					}
					if (item.innerText.trim() !== "") {
						if (FUNCTION_SETTINGS.TWEET_SPAM.removeLinks == true) {
							var textoSemURLs = item.innerText.replace(/(?:https?|ftp):\/\/[\n\S]+/g, '').replace(/@[^ ]+/g, '').replace(/\s+/g, ' ').replace(/[!?$]/gi, '');
						} else {
							var textoSemURLs = item.innerText;
						}
						const textoSemQuebrasDeLinha = textoSemURLs.replace(/\n/g, " ");
						// Verifica se o texto contém apenas uma palavra
						const palavras = textoSemQuebrasDeLinha.split(/\s+/);
						if (palavras.length <= 2) {
							return;
						}
						TEXTS.push({
							"elemento": item,
							"texto": textoSemQuebrasDeLinha
						});
					}
				};
				await CHECK_SIMILARITY_JACCARD(TEXTS);
			}
		}