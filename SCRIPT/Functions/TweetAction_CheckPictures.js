
	async function CheckPictures(){
		try {
			var TWEET_PICTURES = Array.from(document.querySelectorAll("article[ARTICLE_LOADED='true'] div[data-testid='tweetPhoto'] img:not([PIC_CHECKED])"));
			
			for (var element of TWEET_PICTURES) {
				var article = ARTICLE_FIND(element);
				if (IS_SELF_TWEET(article)) {
					article.setAttribute('PIC_CHECKED', true);
					element.setAttribute('PIC_CHECKED', true);
					return;
				}
				
					article.setAttribute('PIC_CHECKED', true);
					element.setAttribute('PIC_CHECKED', true);
			}
		} catch (error) {
			throw error;
		}
	}