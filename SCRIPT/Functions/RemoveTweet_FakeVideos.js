async function Remover_FakeVideos () {
		try {
			var TWEET_FAKE_VIDEOS = Array.from(document.querySelectorAll("article[ARTICLE_LOADED='true'] div[data-testid='card.wrapper'] a img:not([FAKE_VIDEO])"));
			for (var element of TWEET_FAKE_VIDEOS) {
				var article = ARTICLE_FIND(element);
				if (IS_SELF_TWEET(article)) {
					article.setAttribute('FAKE_VIDEO', true);
					element.setAttribute('FAKE_VIDEO', true);
					continue;
				}
				if (article.querySelector("article[data-testid='tweet'] div[data-testid='User-Name'] span").innerText == MAIN_TWEET.nome) {
					element.setAttribute('FAKE_VIDEO', true);
					article.setAttribute('FAKE_VIDEO', true);
					continue;
				}
				const A = element.closest("A");
				const contain_preview_mini = element.closest("div[data-testid='card.layoutSmall.media']");
				if (A.target == "_blank" && A.rel == "noopener noreferrer nofollow" && A.childElementCount == 2 && !contain_preview_mini) {
					if (article) {
						element.setAttribute('FAKE_VIDEO', true)
						await Push_Tweet(article,"Tweet com Vídeo Falso")
					}
				}
			}
		} catch (error) {
			throw error;
		}
	}