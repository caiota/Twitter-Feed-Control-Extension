async function IMAGE_PREVIEW() {
			try {
				if (fimg == null) {
					previewDiv = document.createElement("div");
					previewDiv.id = "previewDiv";
					previewLoading = document.createElement("div");
					previewLoading.classList.add("loader");
					previewDiv.appendChild(previewLoading);
					fimg = document.createElement("img");
					fimg.id = "ImgPreview";
					fimg.addEventListener("load", () => {
						previewLoading.style.display = "none";
					})
					previewDiv.addEventListener("mouseout", function(event) {
						
						if (canMoveImage) {
							previewDiv.style.display = "none";
							zoomLevel = 1.0;
							previewDiv.style.transform = "scale(" + zoomLevel + ")";
							canMoveImage = false;
							previewLoading.style.display = "block";
						}
					});
					previewDiv.addEventListener("mousedown", function(event) {
						event.preventDefault();
						previewDiv.style.display = "none";
						zoomLevel = 1.0;
						previewDiv.style.transform = "scale(" + zoomLevel + ")";
						canMoveImage = false;
						previewLoading.style.display = "block";
					});
					previewDiv.appendChild(fimg);
					
					document.body.appendChild(previewDiv);
				}
				var ALL_IMAGES = Array.from(document.querySelectorAll("article[ARTICLE_LOADED='true'] div[data-testid='tweetPhoto'] img:not([PREVIEW_SET])"));
ALL_IMAGES = ALL_IMAGES.concat(Array.from(document.querySelectorAll("li[role='listitem'] img:not([PREVIEW_SET])")));
ALL_IMAGES = ALL_IMAGES.concat(Array.from(document.querySelectorAll("article div[data-testid='card.layoutLarge.media'] img")));
ALL_IMAGES = ALL_IMAGES.concat(Array.from(document.querySelectorAll("article div[data-testid='card.wrapper'] img")));
ALL_IMAGES = ALL_IMAGES.filter(img => !img.querySelector("div[data-testid='videoComponent']"));

				let ALL_IMAGES_LENGTH = ALL_IMAGES.length;
				if (ALL_IMAGES_LENGTH > 0) {
					for (var i = 0; i < ALL_IMAGES_LENGTH; i++) {
						let image = ALL_IMAGES[i];
						if (!image.closest("div[data-testid='videoComponent']")) {
						
							image.addEventListener("mouseover", (i) => {
								if (FUNCTION_SETTINGS.PREVIEW_IMAGES == true) {
									if (!previewDiv.style.display || previewDiv.style.display === "none") {
										previewDiv.style.left = mouseX + "px";
										previewDiv.style.top = mouseY + "px";
										canMoveImage = true;
										imgPai = i.target;
									fimg.src = imgPai.src.replace(/name=\w+/g, "name=medium");
										previewLoading.style.display = "block";
										previewDiv.style.display = "block";
									}
								} else {
									ALL_IMAGES = [];
								}
							});
							image.addEventListener("mouseout", (event) => {
								// Verificar se o evento de mouseout foi acionado a partir de fora da imagem
								if (event.relatedTarget !== fimg && previewDiv.style.display === "block" && canMoveImage) {
									previewDiv.style.display = "none";
									zoomLevel = 1.0;
									previewDiv.style.transform = "scale(" + zoomLevel + ")";
									canMoveImage = false;
									imgPai = null;
								}
							});
						}
						image.setAttribute("PREVIEW_SET", true);
					}
				}
				
			} catch (e) {
				throw e;
			}
		}