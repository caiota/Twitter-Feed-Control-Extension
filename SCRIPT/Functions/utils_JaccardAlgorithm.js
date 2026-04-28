async function COEFICIENTE_JACCARD(text1, text2){
			const words1 = text1.split(" ");
			const words2 = text2.split(" ");
			const wordCount1 = new Map();
			const wordCount2 = new Map();
			// Contar o número de ocorrências de cada palavra no texto 1
			words1.forEach(word => {
				const count = wordCount1.get(word) || 0;
				wordCount1.set(word, count + 1);
			});
			// Contar o número de ocorrências de cada palavra no texto 2
			words2.forEach(word => {
				const count = wordCount2.get(word) || 0;
				wordCount2.set(word, count + 1);
			});
			let intersection = 0;
			let union = 0;
			// Calcular a interseção e união dos conjuntos de palavras
			wordCount1.forEach((count, word) => {
				if (wordCount2.has(word)) {
					intersection += Math.min(count, wordCount2.get(word));
				}
			});
			union = words1.length + words2.length - intersection;
			// Calcular a similaridade de Jaccard
			const jaccardSimilarity = intersection / union;
			// Levar em consideração a diferença na quantidade total de palavras
			const wordCountDifference = Math.abs(words1.length - words2.length);
			const wordCountPenalty = 1 - (wordCountDifference / Math.max(words1.length, words2.length));
			// Combinação da similaridade de Jaccard e da penalidade pela diferença na quantidade de palavras
			const combinedScore = jaccardSimilarity * wordCountPenalty;
			return combinedScore;
		}


		async function CHECK_SIMILARITY_JACCARD(texts){
			try {
				for (let i = 0; i < texts.length; i++) {
					for (let j = i + 1; j < texts.length; j++) {
						// Verifica se os elementos são diferentes antes de calcular a similaridade
							var coeficiente = await COEFICIENTE_JACCARD(texts[i].texto.toLowerCase().trim(), texts[j].texto.toLowerCase().trim());
						if (texts[i].elemento !== texts[j].elemento) {
							if (coeficiente.toFixed(2) >= FUNCTION_SETTINGS.TWEET_SPAM.Parecidagem && texts[i] && texts[j]) {
								texts[i].elemento.setAttribute("MARKED", true);
								texts[j].elemento.setAttribute("MARKED", true);
								await Push_Tweet(ARTICLE_FIND(texts[i].elemento),"tweets parecidos detectados")
								await Push_Tweet(ARTICLE_FIND(texts[j].elemento),"tweets parecidos detectados")
								console.log(ARTICLE_FIND(texts[i].elemento),ARTICLE_FIND(texts[j].elemento))
							console.log(coeficiente.toFixed(2),FUNCTION_SETTINGS.TWEET_SPAM.Parecidagem)
							}
							//texts[i].elemento.setAttribute("MARKED", true);
								//texts[j].elemento.setAttribute("MARKED", true);
						}
					}
				}
			} catch (e) {
				throw e;
			}
		}