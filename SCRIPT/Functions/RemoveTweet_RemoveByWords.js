async function REMOVE_WORDS (){
			try {
				if (FUNCTION_SETTINGS.REMOVE_SPONSORED == true) {
					var TWEETS_SPOSNORED = document.querySelectorAll("article[ARTICLE_LOADED='true'] path[d='" + sponsor_path + "']:not([TWEET_SPONSORED])");
					if (TWEETS_SPOSNORED.length > 0) {
						for (var element of TWEETS_SPOSNORED) {
							let article_sponsor = ARTICLE_FIND(element);
							if (article_sponsor) {
								element.setAttribute("TWEET_SPONSORED", true);
								await Push_Tweet(article_sponsor,"Anúncio (Tweet Patrocinado)")
							}
						}
					}
				}
				if (FUNCTION_SETTINGS.Tweet_Scan_Palavras.Trendings == true) {
					var TRENDING_TWEETS = document.querySelectorAll("section div[data-testid='trend']:not([BANNED_WORD])")
				} else {
					var TRENDING_TWEETS = [];
				}
				if (FUNCTION_SETTINGS.Tweet_Scan_Palavras.todo_tweet == false) {
					
					 var TWEETS =Array.from(document.querySelectorAll("article[data-testid='tweet'][ARTICLE_LOADED='true']:not([BANNED_WORD])"));
					
				} else {
					tweetsTextArray = Array.from(document.querySelectorAll("article[data-testid='tweet'][ARTICLE_LOADED='true'] [data-testid='tweetText']:not([BANNED_WORD])"))
					tweetsUsernameArray = Array.from(document.querySelectorAll("article[data-testid='tweet'][ARTICLE_LOADED='true'] div[data-testid='User-Name']:not([BANNED_WORD])"))
				 var TWEETS = tweetsTextArray.concat(tweetsUsernameArray);
					TWEETS.reverse();
					
				}
				if (FUNCTION_SETTINGS.Tweet_Scan_Palavras.Scan_Cards == true) {
					let CardsArray = Array.from(document.querySelectorAll("article[ARTICLE_LOADED='true'] div[data-testid='card.layoutSmall.detail']:not([BANNED_WORD])"));
					TWEETS = TWEETS.concat([], CardsArray)
				}
				let TWEETS_LENGTH = TWEETS.length;
				if (TWEETS_LENGTH > 0) {
					for (var i = 0; i < TWEETS_LENGTH; i++) {
						var element = TWEETS[i];
						var article = ARTICLE_FIND(element);
						if(article.getAttribute("BANNED_WORD")==true||article.getAttribute("BANNED_WORD")=="true"){
							element.setAttribute("BANNED_WORD", true);
							continue;
						}
						const TempElement=element.querySelector("div[data-testid='tweetText']");
						if(!TempElement&&FUNCTION_SETTINGS.Tweet_Scan_Palavras.todo_tweet == false){
							element.setAttribute("BANNED_WORD", true);
							article.setAttribute("BANNED_WORD", true);
							return;
						}
						if(FUNCTION_SETTINGS.Tweet_Scan_Palavras.todo_tweet == false&&TempElement){
							element=TempElement;
						}
						if(MAIN_TWEET.arroba==""&&isOnPost()==true){
							break;
						}
						if (IS_SELF_TWEET(article)) {
							element.setAttribute("BANNED_WORD", true);
							article.setAttribute("BANNED_WORD", true);
							return;
						}
						let text = element.innerText
						//REMOVE ITENS DA VARIAVEL BANNED_LIST (PALAVRAS PREDEFINIDAS E ADICIONADAS PELO USUARIO, COMO "LINK IN BIO")
						if (FUNCTION_SETTINGS.Tweet_Scan_Palavras.PalavrasCustomizadas == true && BANNED_ITEMS.length > 0) {
							if (FUNCTION_SETTINGS.Tweet_Scan_Palavras.use_regex == false) {
								for (var i = 0; i < BANNED_ITEMS.length; i++) {
									if (text.includes(BANNED_ITEMS[i])) {
										if (article) {
											BLOCK = true;
											await Push_Tweet(article,"Encontrado na Lista BANNED_ITENS "+BANNED_ITEMS[i])
										}
										break
									}
								}
							} else {
								let match = text.match(regex);
								if (FUNCTION_SETTINGS.Tweet_Scan_Palavras.NaoRemover_Customizadas == false) {
									if (regex.test(text)) {
										if (article) {
											BLOCK = true;
											await Push_Tweet(article,"Encontrado na Lista BANNED_ITENS: '"+match[0]+"'")
										}
									}
								} else {
									await TWEET.TWEET_ACTION.REPLACE_WORD_ASTERISCS(element);
								}
							}
						}
						if (FUNCTION_SETTINGS.AUTOPLAY_YOUTUBE == true) {
							var videos = document.querySelectorAll("div[data-testid='card.wrapper'][VISIVEL]:not([VIDEO_TOCANTE])");
							if (videos.length > 0) {
								videos.forEach(function(video) {
									const videoEl = video;
									if (video.querySelector("path[d='" + is_video + "'")) {
										video = video.querySelector("div[data-testid='card.layoutSmall.detail']");
										if (video.querySelector("div").innerText.indexOf("youtu") != -1) {
											video.click();
											videoEl.setAttribute("VIDEO_TOCANTE", true);
										}
									}
								});
							}
						}
						if (FUNCTION_SETTINGS.Tweet_Scan_Palavras.TweetEmotes == true) {
							//var tweetClosest = ARTICLE_FIND(element)
							if (element.innerText.trim() === '' && !article.querySelector("div[data-testid='tweetPhoto']") && !article.querySelector("div[data-testid='videoComponent']") && !article.querySelector("div[role='link'][tabindex='0']")) {
								await Push_Tweet(article,"Tweet somente com Emote")
								element.setAttribute("BANNED_WORD", true);
							}
						}
						if(FUNCTION_SETTINGS.Tweet_Scan_Palavras.BanEmotes == true){
								//if(article.querySelector("div[data-testid='tweetText']")){ Hello There }
								let tweetTextElement = article.querySelector("div[data-testid='tweetText']");
								let tweetUserName = article.querySelector("div[data-testid='User-Name']");
								if(tweetTextElement){
								//SCAN TWEET TEXT
								let tweetHTML = tweetTextElement.innerHTML;
								
								// Cria um elemento temporário para manipular o HTML
								let tempDiv = document.createElement('div');
								tempDiv.innerHTML = tweetHTML;
								
								// Extrai os emotes (presumindo que são imagens)
								let emotes = tempDiv.querySelectorAll('img'); // Ajuste o seletor conforme necessário
								
								// Verifica o atributo "alt" dos emotes
								emotes.forEach( emote => {
									if (BannedEmotesXD.includes(emote.alt)) {
										BLOCK = true;
									 Push_Tweet(article,"Tweet com Emote Banido "+emote.alt)
									  article.setAttribute("BANNED_WORD",true);
									  element.setAttribute("BANNED_WORD", true);
									  
								  }
								});
							}
							if(FUNCTION_SETTINGS.Tweet_Scan_Palavras.todo_tweet == true){
								//SCAN USERNAME
									// Captura o innerHTML do elemento
									let UserNameHTML = tweetUserName.innerHTML;
								
									// Cria um elemento temporário para manipular o HTML
									let tempDiv2 = document.createElement('div');
									tempDiv2.innerHTML = UserNameHTML;
									
									// Extrai os emotes (presumindo que são imagens)
									let emotesUserName = tempDiv2.querySelectorAll('img'); // Ajuste o seletor conforme necessário
									
									// Verifica o atributo "alt" dos emotes
									emotesUserName.forEach( emote => {
										if (BannedEmotesXD.includes(emote.alt)) {
											BLOCK = true;
										 Push_Tweet(article,"Tweet com Emote Banido, Detectado no Nome de Usuário "+emote.alt)
										  article.setAttribute("BANNED_WORD",true);
										  element.setAttribute("BANNED_WORD", true);
										  
									  }
									});
							}
						}
						
						if (FUNCTION_SETTINGS.Tweet_Scan_Palavras.RemoveAutomated == true) {
							if (isOnPost() == true && article.querySelector("div[data-testid='User-Name'] span").innerText == MAIN_TWEET.nome) {
								article.setAttribute('BANNED_WORD', true);
								element.setAttribute('BANNED_WORD', true);
								return;
							}
							AUTOMATICOS = article.querySelector("path[d='" + automatico_path + "']");
							
							if(AUTOMATICOS){
								BLOCK = true;
								await Push_Tweet(article,"Tweet Automátizado")
								element.setAttribute("BANNED_WORD", true);
								article.setAttribute("BANNED_WORD", true);
							}
						}
						if(FUNCTION_SETTINGS.Tweet_Scan_Palavras.clearSearch == true){
							const url = new URL(window.location.href);
							if(url.search&&window.location.href.indexOf("/search?q=")!=-1){
							const params = new URLSearchParams(url.search);
							if(params){
							const q = params.get('q').toLowerCase();
							if(params.get('f')){
						var f = params.get('f').toLowerCase();
							}else{
								
							   var f="live";
							}
						
							if(q&&(f=="live"||f=="top")){
							if(article.querySelector("div[data-testid='tweetText']")){
								element=article.querySelector("div[data-testid='tweetText']");
							}else{	
								element.setAttribute("BANNED_WORD",true);
								article.setAttribute("BANNED_WORD",true);
								await Push_Tweet(article,"Tweet sem Texto da Pesquisa");
								return;
							}
							const spans = element.querySelectorAll('span');
						
						const filteredSpans = Array.from(spans).filter(span => {
							return getComputedStyle(span).fontWeight === '700';
						});
							if(filteredSpans.length==0){
								element.setAttribute("BANNED_WORD",true);
								article.setAttribute("BANNED_WORD",true);
								await Push_Tweet(article,"Tweet sem Conteúdo da Pesquisa");
							}
						}
							}
							}
						}
						if (FUNCTION_SETTINGS.Tweet_Scan_Palavras.LetrasGrandes == true) {
							if (regex_BigLetter.test(text)) {
								if (article) {
									BLOCK = true;
									await Push_Tweet(article,"Tweet com Letras Grandes")
								}
							}
						}
						if (FUNCTION_SETTINGS.Tweet_Scan_Palavras.remove_arabe == true) {
							if (regex_arabe.test(text)) {
								if (article) {
									await Push_Tweet(article,"Tweet com Idioma Banido: Arabe")
								}
							}
						}
						if (FUNCTION_SETTINGS.Tweet_Scan_Palavras.remove_amarico == true) {
							if (regex_amarico.test(text)) {
								if (article) {
									await Push_Tweet(article,"Tweet com Idioma Banido: Amárico")
								}
							}
						}
						if (FUNCTION_SETTINGS.Tweet_Scan_Palavras.remove_hindi == true) {
							if (regex_hindi.test(text)) {
								if (article) {
									await Push_Tweet(article,"Tweet com Idioma Banido: Hindí")
								}
							}
						}
						if (FUNCTION_SETTINGS.Tweet_Scan_Palavras.remove_asiatico == true) {
							if (regex_chines.test(text)) {
								if (article) {
									await Push_Tweet(article,"Tweet com Idioma Banido: Asiático ")
								}
							}
						}
						if (FUNCTION_SETTINGS.Tweet_Scan_Palavras.remove_russo == true) {
							if (regex_russo.test(text)) {
								if (article) {
									await Push_Tweet(article,"Tweet com Idioma Banido: Russo")
								}
							}
						}
						if (FUNCTION_SETTINGS.Tweet_Scan_Palavras.remove_hebraico == true) {
							if (regex_hebraico.test(text)) {
								if (article) {
									await Push_Tweet(article,"Tweet com Idioma Banido: Hebraico")
								}
							}
						}
						if (FUNCTION_SETTINGS.Tweet_Scan_Palavras.remove_vietnamita == true) {
							if (regex_vietnamita.test(text)) {
								if (article) {
									await Push_Tweet(article,"Tweet com Idioma Banido: Vietnamita")
								}
							}
						}
						if (FUNCTION_SETTINGS.Tweet_Scan_Palavras.remove_tailandes == true) {
							if (regex_tailandes.test(text)) {
								if (article) {
									await Push_Tweet(article,"Tweet com Idioma Banido: Tailândes")
								}
							}
						}
						if (FUNCTION_SETTINGS.Tweet_Scan_Palavras.remove_grego == true) {
							if (regex_grego.test(text)) {
								if (article) {
									await Push_Tweet(article,"Tweet com Idioma Banido: Grego")
								}
							}
						}
						if (FUNCTION_SETTINGS.Tweet_Scan_Palavras.remove_coreano == true) {
							if (regex_coreano.test(text)) {
								if (article) {
									await Push_Tweet(article,"Tweet com Idioma Banido: Coreano")
								}
							}
						}
						article.setAttribute('BANNED_WORD', true)
						element.setAttribute('BANNED_WORD', true)
						if (BLOCK == true && FUNCTION_SETTINGS.Tweet_Scan_Palavras.Block_User == true) {
							article.setAttribute("BLOCK_USER", true);
							await BLOCK_ARRAY();
						}
						if (BLOCK == true && FUNCTION_SETTINGS.Tweet_Scan_Palavras.Mute_User == true) {
							article.setAttribute("BLOCK_USER", true);
							await MUTE_ARRAY();
						}
					};
				}
				const TRENDINGS_LENGTH = TRENDING_TWEETS.length;
				if (TRENDINGS_LENGTH > 0) {
					for (var i = 0; i < TRENDINGS_LENGTH; i++) {
						let element = TRENDING_TWEETS[i];
						var text = element.innerText
						//REMOVE ITENS DA VARIAVEL BANNED_LIST (PALAVRAS PREDEFINIDAS E ADICIONADAS PELO USUARIO, COMO "LINK IN BIO")
						if (FUNCTION_SETTINGS.Tweet_Scan_Palavras.PalavrasCustomizadas == true && BANNED_ITEMS.length > 0) {
							if (FUNCTION_SETTINGS.Tweet_Scan_Palavras.use_regex == false) {
								for (var i = 0; i < BANNED_ITEMS.length; i++) {
									if (text.includes(BANNED_ITEMS[i])) {
										await Push_Tweet(article,"Trending contendo Palavra Banida: "+BANNED_ITEMS[i])
										break
									}
								}
							} else {
								let match = text.match(regex);
								if (regex.test(text)) {
									await Push_Tweet(article,"Trending contendo Palavra Banida: '"+match[0]+"'")
								}
							}
						}
						if (FUNCTION_SETTINGS.Tweet_Scan_Palavras.remove_arabe == true) {
							if (regex_arabe.test(text)) {
									await Push_Tweet(article,"Trending com Idioma Banido: Arabe")
								
							}
						}
						if (FUNCTION_SETTINGS.Tweet_Scan_Palavras.remove_amarico == true) {
							if (regex_amarico.test(text)) {
									await Push_Tweet(article,"Trending com Idioma Banido: Amárico")
								
							}
						}
						if (FUNCTION_SETTINGS.Tweet_Scan_Palavras.remove_hindi == true) {
							if (regex_hindi.test(text)) {
									await Push_Tweet(article,"Trending com Idioma Banido: Hindí")
								
							}
						}
						if (FUNCTION_SETTINGS.Tweet_Scan_Palavras.remove_asiatico == true) {
							if (regex_chines.test(text)) {
									await Push_Tweet(article,"Trending com Idioma Banido: Asiático")
								
							}
						}
						if (FUNCTION_SETTINGS.Tweet_Scan_Palavras.remove_russo == true) {
							if (regex_russo.test(text)) {
									await Push_Tweet(article,"Trending com Idioma Banido: Russo")
								
							}
						}
						if (FUNCTION_SETTINGS.Tweet_Scan_Palavras.remove_hebraico == true) {
							if (regex_hebraico.test(text)) {
									await Push_Tweet(article,"Trending com Idioma Banido: Hebraico")
								
							}
						}
						if (FUNCTION_SETTINGS.Tweet_Scan_Palavras.remove_vietnamita == true) {
							if (regex_vietnamita.test(text)) {
									await Push_Tweet(article,"Trending com Idioma Banido: Vietnamita")
								
							}
						}
						if (FUNCTION_SETTINGS.Tweet_Scan_Palavras.remove_tailandes == true) {
							if (regex_tailandes.test(text)) {
									await Push_Tweet(article,"Trending com Idioma Banido: Tailândes")
								
							}
						}
						if (FUNCTION_SETTINGS.Tweet_Scan_Palavras.remove_grego == true) {
							if (regex_grego.test(text)) {
									await Push_Tweet(article,"Trending com Idioma Banido: Grego")
								
							}
						}
						if (FUNCTION_SETTINGS.Tweet_Scan_Palavras.remove_coreano == true) {
							if (regex_coreano.test(text)) {
									await Push_Tweet(article,"Trending com Idioma Banido: Coreano")
								
							}
						}
						if (element) {
							element.setAttribute('BANNED_WORD', true)
						}
					}
				}
			} catch (error) {
				throw error;
			}
		}