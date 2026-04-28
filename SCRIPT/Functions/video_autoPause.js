async function VIDEO_AUTOPAUSE() {
			try {
				const tweets_videos = document.querySelectorAll("article[ARTICLE_LOADED='true'] video:not([PAUSED])");
				var tempArr = [];
				let atweets_videos_LENGTH = tweets_videos.length;
				if (atweets_videos_LENGTH > 0) {
					for (var i = 0; i < atweets_videos_LENGTH; i++) {
						let videoElement = tweets_videos[i];
						if (videoElement.readyState == 4) {
							var article = ARTICLE_FIND(videoElement);
							if (DOCUMENTO_PRONTO == true) {
								videoElement.play();
							}
							videoElement.removeAttribute("playsinline")
							if (!videoElement.getAttribute('PAUSED')) {
								videoElement.muted = false;
								videoElement.volume = 0.1;
								videoElement.pause();
								videoElement.addEventListener('play', async (el) => {
									if (ElementoEstaVisivel(videoElement) == false && isOnPost() == false) {
										videoElement.pause();
									}
								});
								if (article) {
									const elaT = article.querySelectorAll("div[data-testid='videoComponent']");
									for (var videoItem of elaT) {
										videoItem.addEventListener('mouseover', async (el) => {
											let elclosest = el.target.closest("div[data-testid='videoComponent']");
											elclosest = elclosest.querySelector("video")
											imgPai = elclosest;
											VIDEO.PLAY_VIDEO(elclosest);
										});
										videoItem.addEventListener('click', async (el) => {
											let elclosest = el.target.closest("div[data-testid='videoComponent']");
											elclosest = elclosest.querySelector("video")
											imgPai = null;
											VIDEO.PAUSE_VIDEO(elclosest);
										});
										videoItem.addEventListener('mouseout', async (el) => {
											let elclosest = el.target.closest("div[data-testid='videoComponent']");
											elclosest = elclosest.querySelector("video");
											imgPai = null;
											VIDEO.PAUSE_VIDEO(elclosest);
										});
									}
								}
								videoElement.setAttribute('PAUSED', true);
							}
						} else {
							if (DOCUMENTO_PRONTO == true) {
								videoElement.play();
								videoElement.removeAttribute('PAUSED');
							}
						}
					}
				}
			} catch (error) {
				throw error;
			}
		}