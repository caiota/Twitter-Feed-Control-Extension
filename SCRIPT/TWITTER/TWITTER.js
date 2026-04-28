var BANNED_ITEMS = ['link in bio', 'onlyfans.com/', 'privacy.com/', 'crypto', 'onlyfans/privacy', 'privacy/onlyfans', '░B░I░O', 'ＬＩＮＫ ＩＮ ＢＩＯ', 't.me']
var TEXTS = [];
var arabe = '\\u0600-\\u06FF'
var hebraico = '\\u0590-\\u05FF'
var russo = '\\u0400-\\u04FF'
var chines = '\\u4E00-\\u9FFF\\u3040-\\u30FF';
var hindi = '\\u0900-\\u097F\\u0B80-\\u0BFF';
var vietnamita = '\\u0102-\\u01B0\\u1EA0-\\u1EF9'
var tailandes = '\\u0E00-\\u0E7F'
var grego = '\\u0370-\\u03FF'
var coreano = '\\uAC00-\\uD7AF\\u1100-\\u11FF\\u3130-\\u318F'
var amarico = '\\u1200-\\u137F';
var LetrasGrandes = '\\uFF00-\\uFFEF';
var regex_arabe = new RegExp('[' + arabe + ']', 'i')
var regex_hebraico = new RegExp('[' + hebraico + ']', 'i')
var regex_russo = new RegExp('[' + russo + ']', 'i')
var regex_chines = new RegExp('[' + chines + ']', 'i')
var regex_hindi = new RegExp('[' + hindi + ']', 'i')
var regex_vietnamita = new RegExp('[' + vietnamita + ']', 'i')
var regex_tailandes = new RegExp('[' + tailandes + ']', 'i')
var regex_grego = new RegExp('[' + grego + ']', 'i')
var regex_coreano = new RegExp('[' + coreano + ']', 'i')
var regex_amarico = new RegExp('[' + amarico + ']', 'i')
var regex_BigLetter = new RegExp('[' + LetrasGrandes + ']', 'i')
var NO_DOLLAR_BS = /\$[a-zA-Z]+/g
var FUNCTION_SETTINGS = null;
var regex = new RegExp(BANNED_ITEMS.join('|'), 'i')
var SIDEMENU_ADDED = false;
var POST_LINK = "";
var delete_path = "M16 6V4.5C16 3.12 14.88 2 13.5 2h-3C9.11 2 8 3.12 8 4.5V6H3v2h1.06l.81 11.21C4.98 20.78 6.28 22 7.86 22h8.27c1.58 0 2.88-1.22 3-2.79L19.93 8H21V6h-5zm-6-1.5c0-.28.22-.5.5-.5h3c.27 0 .5.22.5.5V6h-4V4.5zm7.13 14.57c-.04.52-.47.93-1 .93H7.86c-.53 0-.96-.41-1-.93L6.07 8h11.85l-.79 11.07zM9 17v-6h2v6H9zm4 0v-6h2v6h-2z";
var block_path = "M12 3.75c-4.55 0-8.25 3.69-8.25 8.25 0 1.92.66 3.68 1.75 5.08L17.09 5.5C15.68 4.4 13.92 3.75 12 3.75zm6.5 3.17L6.92 18.5c1.4 1.1 3.16 1.75 5.08 1.75 4.56 0 8.25-3.69 8.25-8.25 0-1.92-.65-3.68-1.75-5.08zM1.75 12C1.75 6.34 6.34 1.75 12 1.75S22.25 6.34 22.25 12 17.66 22.25 12 22.25 1.75 17.66 1.75 12z";
var ver_menos_path = "M9.5 7c.828 0 1.5 1.119 1.5 2.5S10.328 12 9.5 12 8 10.881 8 9.5 8.672 7 9.5 7zm5 0c.828 0 1.5 1.119 1.5 2.5s-.672 2.5-1.5 2.5S13 10.881 13 9.5 13.672 7 14.5 7zM12 22.25C6.348 22.25 1.75 17.652 1.75 12S6.348 1.75 12 1.75 22.25 6.348 22.25 12 17.652 22.25 12 22.25zm0-18.5c-4.549 0-8.25 3.701-8.25 8.25s3.701 8.25 8.25 8.25 8.25-3.701 8.25-8.25S16.549 3.75 12 3.75zM8.947 17.322l-1.896-.638C7.101 16.534 8.322 13 12 13s4.898 3.533 4.949 3.684l-1.897.633c-.031-.09-.828-2.316-3.051-2.316s-3.021 2.227-3.053 2.322z";
var mute_path = "M18 6.59V1.2L8.71 7H5.5C4.12 7 3 8.12 3 9.5v5C3 15.88 4.12 17 5.5 17h2.09l-2.3 2.29 1.42 1.42 15.5-15.5-1.42-1.42L18 6.59zm-8 8V8.55l6-3.75v3.79l-6 6zM5 9.5c0-.28.22-.5.5-.5H8v6H5.5c-.28 0-.5-.22-.5-.5v-5zm6.5 9.24l1.45-1.45L16 19.2V14l2 .02v8.78l-6.5-4.06z";
var sponsor_path = "M19.498 3h-15c-1.381 0-2.5 1.12-2.5 2.5v13c0 1.38 1.119 2.5 2.5 2.5h15c1.381 0 2.5-1.12 2.5-2.5v-13c0-1.38-1.119-2.5-2.5-2.5zm-3.502 12h-2v-3.59l-5.293 5.3-1.414-1.42L12.581 10H8.996V8h7v7z";
var automatico_path = "M.998 15V9h2v6h-2zm22 0V9h-2v6h2zM12 2c-4.418 0-8 3.58-8 8v7c0 2.76 2.239 5 5 5h6c2.761 0 5-2.24 5-5v-7c0-4.42-3.582-8-8-8zM8.998 14c-1.105 0-2-.9-2-2s.895-2 2-2 2 .9 2 2-.895 2-2 2zm6 0c-1.104 0-2-.9-2-2s.895-2 2-2 2 .9 2 2-.896 2-2 2z";
var is_video = "M22.2275 17.1971V43.6465L43.0304 30.4218L22.2275 17.1971Z";
var retweet_path = "M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z";
var BannedEmotesXD = ['🌶', '🔞', '😈', '🍆', '💦', '☀️']

function ARTICLE_ACTION(element, action) {
    if (action === "remove") {
        const tweetUrlElement = ARTICLE_FIND(element.target).querySelector("div[data-testid='User-Name'] a[href*='/status/']");
        if (tweetUrlElement) {
            const idDoStatus = tweetUrlElement.href.split("/")[5];
            if (/^\d+$/.test(idDoStatus)) {
                console.log(tweetUrlElement.href.split("/")[3] + "/" + idDoStatus);
            }
        }
        element.target.remove();
    } else if (action === "selfDelete") {
        element.preventDefault();
        const tweetUrlElement = element.target.closest("article").querySelector("button[aria-haspopup='menu'][role='button']");
        tweetUrlElement.click();
        setTimeout(() => {
            if (document.querySelector("div[data-testid='Dropdown']")) {
                deleteBtn = document.querySelector("div[data-testid='Dropdown'] path[d='" + delete_path + "']").closest("div");
                deleteBtn.click();
            } else {
                setTimeout(() => {
                    ARTICLE_ACTION(element, 'selfDelete');
                }, 200);
                return
            }
        }, 100);
        setTimeout(LOCK_USER, 150);
    } else if (action === "block") {
        element.preventDefault();
        const tweetUrlElement = element.target.closest("article").querySelector("button[aria-haspopup='menu'][role='button']");
        tweetUrlElement.click();
        setTimeout(() => {
            if (document.querySelector("div[data-testid='Dropdown']")) {
                blockBtn = document.querySelector("div[data-testid='Dropdown'] path[d='" + block_path + "']").closest("div");
                blockBtn.click();
            } else {
                setTimeout(() => {
                    ARTICLE_ACTION(element, 'block');
                }, 200);
                return
            }
        }, 100);
        setTimeout(LOCK_USER, 150);
    } else if (action === "decensurar") {
        if (element) {
            element.classList.remove("Blur");
        }
    } else if (action === "censurar") {
        const closestVideo = element.closest("div[data-testid='videoComponent']") || element;
        closestVideo.classList.add("Blur");
    } else if (action === "view_less" || action === "mute_tweet") {
        element.preventDefault();
        const tweetUrlElement = element.target.closest("article").querySelector("button[aria-haspopup='menu'][role='button']");
        tweetUrlElement.click();
        setTimeout(() => {
            const selector = action === "view_less" ? "div[data-testid='Dropdown'] path[d='" + ver_menos_path + "']" : "div[data-testid='Dropdown'] path[d='" + mute_path + "']";
            if (document.querySelector(selector)) {
                setTimeout(action === "view_less" ? VIEW_LESS_THIS : MUTE_TWEET, 50);
            } else {
                tweetUrlElement.click();
                element.target.remove();
            }
        }, 100);
    } else if (action === "check_quotes") {
        element.preventDefault();
        const article = element.target.closest("article");
        const postURL = article.querySelector("a[href*='/status']:not([href*='/photo']):not([href*='/video'])").href;
        if (isOnPost() == true) {
            rtPath = article.querySelector("path[d='" + retweet_path + "']");
            rtPath.closest("button").click();
            setTimeout(() => {
                container_quote = document.querySelector("div[data-testid='Dropdown'] a[href*='/quotes']");
                if (container_quote) {
                    container_quote.click();
                } else {
                    window.location.href = postURL + "/quotes";
                }
            }, 100);
        } else {
            window.location.href = postURL + "/quotes";
        }
    }
}

var VIDEO_PLAYING = null;
var ARTICLE_MARCADO = null;
var DOCUMENTO_PRONTO = false;



function START_PAGE_EVENTS() {
    document.body.addEventListener('click', function(event) {
        if (FUNCTION_SETTINGS) {
            DOCUMENTO_PRONTO = true;
            
        }
    });

    document.body.addEventListener('keydown', function(event) {
        try {
            if (FUNCTION_SETTINGS) {
                if (VIDEO_PLAYING != null) {
                    switch (event.key) {
                        case 'ArrowUp':
                            event.preventDefault();
                            VIDEO.VOLUME_UP();
                            break;
                        case 'ArrowDown':
                            event.preventDefault();
                            VIDEO.VOLUME_DOWN();
                            break;
                        case 'ArrowLeft':
                            event.preventDefault();
                            VIDEO.SEEK_LEFT();
                            break;
                        case 'ArrowRight':
                            event.preventDefault();
                            VIDEO.SEEK_RIGHT();
                            break;
                        case ' ':
                            event.preventDefault();
                            VIDEO.PLAY_PAUSE(VIDEO_PLAYING.paused);
                            break;
                        default:
                            return;
                    }
                }
                if (event.ctrlKey == true && event.key == "s" && fimg.src.indexOf("/media/") != -1) {
                    event.preventDefault();
                    window.open(fimg.src);
                }

                
            }
        } catch (err) {
            throw err;
        }
    });
}
var PRE_START = false;
var MIDDLE_ARTICLE = "";
const scrollToArticle = (direction) => {
    const ARTICLES = Array.from(document.querySelectorAll("div[data-testid='cellInnerDiv'][SCROLL_MARKED='true']"))
        .filter(article => article.style.display !== "none");

    const focusedElement = document.activeElement;
    const focusedIndex = ARTICLES.indexOf(focusedElement);
    let targetIndex;

    if (direction === 'next') {
        PRE_START = true;
        targetIndex = (focusedIndex + 1) < ARTICLES.length ? focusedIndex + 1 : 0;
    } else if (direction === 'previous') {
        if (focusedIndex === 0 || PRE_START == false) {
            return;
        }
        targetIndex = (focusedIndex - 1) >= 0 ? focusedIndex - 1 : ARTICLES.length - 1;
    }

    const targetArticle = ARTICLES[targetIndex];
    if (targetArticle) {
        ARTICLE_MARCADO = targetArticle;
        smoothScrollTo(ARTICLE_MARCADO);
        ARTICLE_MARCADO.focus();

    }
};


const smoothScrollTo = (element) => {
    const startY = window.scrollY;
    const targetY = element.getBoundingClientRect().top + startY - (window.innerHeight / 2 - element.clientHeight / 2);
    const duration = 350;
    let startTime = null;

    const animateScroll = (currentTime) => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startY, targetY - startY, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animateScroll);
    };

    const ease = (t, b, c, d) => {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    };

    requestAnimationFrame(animateScroll);
};
var imgPai = null;
var mouseX_Event = 0;
var mouseY_Event = 0;
var mouseX = 0;
var mouseY = 0;
document.addEventListener("mousemove", function(event) {
    try {
        if (FUNCTION_SETTINGS != null) {
            mouseX = event.clientX;
            mouseY = event.clientY;
            if (FUNCTION_SETTINGS.PREVIEW_IMAGES == true) {
                if (canMoveImage) {
                    if (document.body.contains(imgPai)) {
                        var windowWidth = window.innerWidth;
                        var windowHeight = window.innerHeight;
                        var imgWidth = fimg.width;
                        var imgHeight = fimg.height;
                        // Verificar se a imagem deve ser exibida no lado direito ou esquerdo
                        var imgLeft = mouseX + 20; // Adicionando um offset para evitar que a imagem fique exatamente abaixo do cursor
                        if (mouseX + imgWidth + 5 > windowWidth) {
                            imgLeft = windowWidth - imgWidth - 5; // Posição ajustada para a direita
                            mouseX_Event = imgLeft;
                        }
                        // Verificar se a imagem deve ser exibida acima ou abaixo
                        var imgTop = mouseY + 20;
                        if (mouseY + imgHeight + 5 > windowHeight) {
                            imgTop = windowHeight - imgHeight - 5; // Posição ajustada para cima
                            mouseY_Event = imgTop;
                        }
                        // Atualizar a posição da imagem
                        previewDiv.style.left = imgLeft + "px";
                        previewDiv.style.top = imgTop + "px";
                    } else {
                        previewDiv.style.display = "none";
                        zoomLevel = 1.0;
                        previewDiv.style.transform = "scale(" + zoomLevel + ")";
                        canMoveImage = false;
                        imgPai = null;
                    }
                }
            }
        }
    } catch (e) {
        throw e;
    }
});
document.addEventListener("wheel", function(event) {
    if (!canMoveImage) {
        return;
    } else {
        if (!ElementoEstaVisivel(imgPai)) {
            previewDiv.style.display = "none";
            zoomLevel = 1.0;
            previewDiv.style.transform = "scale(" + zoomLevel + ")";
            canMoveImage = false;
            imgPai = null;
            fimg.src = "";
        }
        if (event.ctrlKey) {
            // Detectar a direção do scroll (para zoom in e zoom out)
            var delta = Math.max(-1, Math.min(1, (event.deltaY || -event.detail)));
            // Definir a quantidade de zoom
            var zoomAmount = 0.1; // Valor arbitrário de zoom
            // Inverter a direção do scroll
            delta = -delta;
            // Atualizar o nível de zoom
            zoomLevel += delta * zoomAmount;
            // Limitar o nível de zoom mínimo e máximo
            zoomLevel = Math.max(0.1, Math.min(3.0, zoomLevel)); // Zoom mínimo de 10% e máximo de 300%
            // Aplicar o zoom na imagem
            previewDiv.style.transform = "scale(" + zoomLevel + ")";
            mouseX = event.clientX;
            mouseY = event.clientY;
            // Definir as propriedades left e top do estilo do previewDiv
            previewDiv.style.left = mouseX + "px";
            previewDiv.style.top = mouseY + "px";
            // Impedir o comportamento padrão da rolagem da página
            event.preventDefault();
        }
    }
}, {
    passive: false
});

function isOnPost() {
    let PAGE = window.location.href;
    if (PAGE.indexOf("/quotes") != -1) {
        return false;
    }

    if (PAGE.indexOf("/video/") == -1 && PAGE.indexOf("/photo/") == -1 && PAGE.indexOf("/status/") == -1) {
        return false;
    } else {
        return true;
    }
}
var LURL = window.location.href;

function URLCHANGE() {
    if (window.location.href != LURL) {
        PRE_START = false
        LURL = window.location.href;
    }
}

function getPostElements(article) {
    try {
        const linkPreview = article.querySelector("div[data-testid='card.wrapper']");
        const poll = article.querySelector("div[data-testid='cardPoll']")
        const photo = article.querySelector("div[data-testid='tweetPhoto']")
        const video = article.querySelector("div[data-testid='videoComponent']") //elemento photo também aparece quando há vídeos (nas thumbnails) então considerar apenas articles carregados
        if (video || photo || poll || linkPreview) {
            return true;
        }
        return false;
    } catch (e) {
        throw e;
    }
}

function ElementoEstaVisivel(element) {
    if (element != null) {
        var elementRect = element.getBoundingClientRect();
        var windowHeight = window.innerHeight;
        // Verifica se o elemento está totalmente visível na tela
        if (elementRect.top >= 0 && elementRect.bottom <= windowHeight) {
            return true;
        }
        // Verifica se pelo menos parte do elemento está visível na tela
        if (elementRect.top < windowHeight && elementRect.bottom >= 0) {
            return true;
        }
    }
    return false;
}

function ElementoEstaElegivel(element) {
    if (element != null) {
        if (ElementoEstaVisivel(element) == true) {
            return true;
        }
        var elementRect = element.getBoundingClientRect();
        var windowHeight = window.innerHeight;
        // Adiciona uma margem extra de 100 pixels fora da tela
        var extraMargin = 100;
        // Verifica se o elemento está totalmente visível na tela ou se está quase visível
        if ((elementRect.top + extraMargin) >= 0 && (elementRect.bottom - extraMargin) <= windowHeight) {
            return true;
        }
        // Verifica se pelo menos parte do elemento está visível na tela
        if (elementRect.top < (windowHeight + extraMargin) && elementRect.bottom > -extraMargin) {
            return true;
        }
    }
    return false;
}
var CAN_FORCE_PLAY = false;

function CheckIfPlaying() {
    if (VIDEO_PLAYING != null && ElementoEstaVisivel(VIDEO_PLAYING) == true && CAN_FORCE_PLAY == true) {
        if (VIDEO_PLAYING.paused && DOCUMENTO_PRONTO) {
            VIDEO_PLAYING.play();
            CAN_FORCE_PLAY = false;
        }
    } else {
        CAN_FORCE_PLAY = false;
        VIDEO_PLAYING = null;
        clearInterval(playLoop);
        playLoop = null;
    }
}

var fimg = null;
var previewDiv = null;
var previewLoading = null;
var BLOCK = false;
let TWEET = {
    VIDEO_ACTION: {

    },

    TWEET_ACTION: {

        REPLACE_WORD_ASTERISCS: async (elemento) => {
            try {
                if (elemento.nodeType === Node.TEXT_NODE) {
                    var texto = elemento.textContent;
                    // Cria um contêiner de fragmento de documento para substituir o texto
                    var fragment = document.createDocumentFragment();
                    // Função auxiliar para criar um nó de texto ou um nó de span blurWord
                    const createNode = (text, isBlurred) => {
                        if (isBlurred) {
                            var span = document.createElement('span');
                            span.textContent = text;
                            span.classList.add('blurWord');
                            span.setAttribute('BLURED_WORD', true);
                            span.addEventListener('mouseover', (e) => {
                                span.classList.remove('blurWord');
                            });
                            span.addEventListener('mouseout', (e) => {
                                span.classList.add('blurWord');
                            });
                            return span;
                        } else {
                            return document.createTextNode(text);
                        }
                    };
                    // Dividir o texto em partes e criar nós de acordo
                    let lastIndex = 0;
                    BANNED_ITEMS.forEach(function(palavra) {
                        var regex = new RegExp("\\b" + palavra + "\\b", "gi");
                        let match;
                        while ((match = regex.exec(texto)) !== null) {
                            if (match.index > lastIndex) {
                                fragment.appendChild(createNode(texto.slice(lastIndex, match.index), false));
                            }
                            fragment.appendChild(createNode(match[0], true));
                            lastIndex = regex.lastIndex;
                        }
                    });
                    if (lastIndex < texto.length) {
                        fragment.appendChild(createNode(texto.slice(lastIndex), false));
                    }
                    elemento.parentNode.replaceChild(fragment, elemento);
                } else if (elemento.nodeType === Node.ELEMENT_NODE) {
                    for (var i = 0; i < elemento.childNodes.length; i++) {
                        await TWEET.TWEET_ACTION.REPLACE_WORD_ASTERISCS(elemento.childNodes[i]);
                    }
                }
            } catch (e) {
                throw e;
            }
        }
    },

    CHECK_TWEET_TEXT: {

    }
}

function IS_SELF_TWEET(tweetElement) {
    if (tweetElement.nodeName === "ARTICLE") {
        var userNameElement = tweetElement.querySelector("div[data-testid='User-Name']");
        var selfTweetNick = selecionarElementosComTexto(userNameElement, SELF_USER.nome);
        var selfTweetArroba = selecionarElementosComTexto(userNameElement, SELF_USER.arroba);
        return (selfTweetArroba.length !== 0 || selfTweetNick.length !== 0);
    }
    return false;
}

function ARTICLE_FIND(element) {
    try {
        if (element.nodeName !== "ARTICLE") {
            return element.closest('article');
        } else {
            return element;
        }
    } catch (e) {
        throw e;
    }
}
var BLOCK_POT = [];
async function BLOCK_ARRAY() {
    try {
        BLOCK = false;
        BLOCK_POT = document.querySelectorAll("article[BLOCK_USER]");
        let blockLeng = BLOCK_POT.length;
        if (blockLeng > 0) {
            for (let i = 0; i < blockLeng; i++) {
                const tweet = BLOCK_POT[i];
                if (document.body.contains(tweet)) {
                    let tempArticleMenu = tweet.querySelector("button[aria-haspopup='menu'][role='button']");
                    tempArticleMenu.click();
                    await new Promise(resolve => setTimeout(resolve, 100));

                    if (document.querySelector("div[data-testid='Dropdown']")) {
                        blockBtn = document.querySelector("div[data-testid='Dropdown'] path[d='" + block_path + "']").closest("div");
                        blockBtn.click();

                        requestAnimationFrame(LOCK_USER);
                    }

                    await new Promise(resolve => setTimeout(resolve, 500));
                    if (tweet.nodeName === "ARTICLE") {
                        setTimeout(BLOCK_ARRAY, 500);
                    }
                }
            }
            BLOCK_POT = [];
        }
    } catch (e) {
        throw e;
    }
}
async function MUTE_ARRAY() {
    try {
        BLOCK = false;
        BLOCK_POT = document.querySelectorAll("article[BLOCK_USER]");
        let blockLeng = BLOCK_POT.length;
        if (blockLeng > 0) {
            for (let i = 0; i < blockLeng; i++) {
                const tweet = BLOCK_POT[i];
                if (document.body.contains(tweet)) {
                    let tempArticleMenu = tweet.querySelector("button[aria-haspopup='menu'][role='button']");
                    tempArticleMenu.click();
                    await new Promise(resolve => setTimeout(resolve, 100));

                    if (document.querySelector("div[data-testid='Dropdown']")) {
                        blockBtn = document.querySelector("div[data-testid='Dropdown'] path[d='" + mute_path + "']").closest("div");
                        blockBtn.click();

                        //requestAnimationFrame(LOCK_USER);
                    }

                    await new Promise(resolve => setTimeout(resolve, 500));
                    if (tweet.nodeName === "ARTICLE") {
                        setTimeout(MUTE_ARRAY, 500);
                    }
                }
            }
            BLOCK_POT = [];
        }
    } catch (e) {
        throw e;
    }
}


function Get_Self_User() {
    try {
        if (document.body.querySelector("header") && SELF_USER.arroba == "" && SELF_USER.nome == "") {
            var container = document.querySelectorAll("header div button")[1];
            if (container && document.querySelector("header img")) {
                var spansComArroba = container.querySelector("div[data-testid*='UserAvatar-Container-']").getAttribute("data-testid").split("-")[2];
                var spanNickName = document.querySelector("header img").alt
                if (spansComArroba.length === 1 && spanNickName.innerText !== "") {
                    SELF_USER.arroba = spansComArroba[0].innerText;
                    SELF_USER.nome = spanNickName.innerText;

                } else if (spansComArroba.length == 0) {
                    spansComArroba = document.querySelector("header img").alt
                    SELF_USER.arroba = spansComArroba;
                    SELF_USER.nome = spanNickName.innerText;
                } else {
                    var profileLink = document.querySelector("nav[role='navigation'] a[data-testid='AppTabBar_Profile_Link']");
                    var profileImage = document.querySelector("header div img[alt]");
                    if (profileLink && profileImage) {
                        SELF_USER.arroba = "@" + profileLink.href.replace("https://twitter.com/", "").replace("https://x.com/", "").replace("/", "");
                        SELF_USER.nome = profileImage.closest("div").getAttribute("aria-label");
                    }
                }
                if (document.querySelectorAll("div[data-testid='ScrollSnap-List'] a").length >= 2) {
                    document.querySelectorAll("div[data-testid='ScrollSnap-List'] a")[0].addEventListener("click", (e) => {
                        setTimeout(() => {
                            window.scrollTo(0, 0)
                        }, 1500)
                    });
                    document.querySelectorAll("div[data-testid='ScrollSnap-List'] a")[1].addEventListener("click", (e) => {
                        setTimeout(() => {
                            window.scrollTo(0, 0)
                        }, 1500)
                    });
                }
                console.log(SELF_USER);
                setTimeout(CLEAR_TWEETS, 200);
            } else {
                setTimeout(Get_Self_User, 200);
            }
        } else {
            setTimeout(Get_Self_User, 50);
        }
    } catch (e) {
        setTimeout(Get_Self_User, 50);
        throw e
    }
}


function getElementHash(elementz) {
    let str = elementz.innerText || "";
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash = ((hash << 5) - hash) + str.charCodeAt(i);
        hash |= 0;
    }
    return hash;
}

async function Push_Tweet(elemente, motivo) {
    const hash = getElementHash(elemente);

    // checa se já existe
    if (!REMOVE_ITENS.some(item => item.hash === hash)) {
        REMOVE_ITENS.push({
            hash,
            elemente
        });
        console.log(motivo + "\n\n");
        console.log(REMOVE_ITENS)
    }
}



function selecionarElementosComTexto(container, texto) {
    if (container) {
        // Seleciona todos os spans dentro do container especificado
        var spans = container.querySelectorAll("span");
        var elementos = [];
        for (var span of spans) {
            // Verifica se o texto do span contém o texto desejado
            if (span.textContent.includes(texto)) {
                elementos.push(span);
            }
        };
        return elementos;
    } else {
        return false;
    }
}
var canMoveImage = false;
var zoomLevel = 1.0;
var VIDEO_PAUSE;
var SELF_USER = {
    nome: "",
    arroba: "",
    colorScheme: "Dark",
}
var MAIN_TWEET = {
    nome: "",
    arroba: "",
    id: 0
}

function START() {
    try {
        if (FUNCTION_SETTINGS != null) {
            SELF_USER.colorScheme = getBackground();
            Get_Self_User();
            console.log("START")

            START_PAGE_EVENTS();
            setInterval(URLCHANGE, 1000);
        } else {
            setTimeout(START, 200);
        }
    } catch (e) {
        setTimeout(START, 200);
        throw e;
    }
}

function getBackground() {
    switch (document.body.style.backgroundColor) {
        case 'rgb(255, 255, 255)':
            return "Light";
        case 'rgb(21, 32, 43)':
            return "SemiDark";
        case 'rgb(0, 0, 0)':
            return "Dark";

    }
}


let REMOVE_ITENS = [];
let SPOILER_ARRAY = [];

async function CLEAR_TWEETS() {
    try {
        if (FUNCTION_SETTINGS != null) {
            await UPDATE_TWEET_MAIN();
            const articles_offs = document.querySelectorAll('article:not([ARTICLE_LOADED])');
            let artLen = articles_offs.length;
            for (var i = 0; i < artLen; i++) {
                const item = articles_offs[i];
                if (ElementoEstaElegivel(item) == true) {
                    item.setAttribute("ARTICLE_LOADED", true);
                }
            }

            await REMOVE_WORDS();



            if (FUNCTION_SETTINGS.VIDEO_AUTO_PAUSE) {
                if (DOCUMENTO_PRONTO) {
                    await VIDEO_AUTOPAUSE();
                }
                const videos = Array.from(document.querySelectorAll("video")).filter(video => {
                    const parentElement = video.closest("li");
                    if (!parentElement) {
                        return video;
                    }
                });
                if (window.location.href.indexOf("/video") != -1) {
                    videos.shift();
                }
                const videoLen = videos.length;
                for (var i = 0; i < videoLen; i++) {
                    const video = videos[i];

                    if (video.currentTime > 0 && !video.paused && !video.ended) {
                        if (video != VIDEO_PLAYING) {
                            video.pause();
                        }
                    }
                };
            }
          
            if (FUNCTION_SETTINGS.CENSURA_TUDO) {
                await Spoiler_Tudo();
            }
            if (FUNCTION_SETTINGS.PREVIEW_IMAGES) {
                await IMAGE_PREVIEW()
            }
            if (FUNCTION_SETTINGS.HORIZONTAL_MENU) {
                HORIZONTAL_PANEL()
            }
            if (FUNCTION_SETTINGS.NOTIFICATION_SEARCH) {
                NOTIFICATION_SEARCH();
            }
            if (FUNCTION_SETTINGS.ANTI_SPOILER) {
                Remove_Spoilers()
            }
            if (FUNCTION_SETTINGS.Remover_Enquetes) {
                Remover_Enquetes()
            }

            if (FUNCTION_SETTINGS.Remover_Links.ativo) {
                Remover_Links()
            }
            if (FUNCTION_SETTINGS.SELF_TWEET) {
                await REMOVER_SELF_TWEETS()
            }
            if (FUNCTION_SETTINGS.REMOVE_NOPIC_USER) {
                await NoPic_Profile();
            }
            if (FUNCTION_SETTINGS.FAKE_VIDEO_BAIT) {
                Remover_FakeVideos()
            }
            if (FUNCTION_SETTINGS.TWEET_SPAM.ativo) {
                await ARTICLE_ELEMENT_PROCESSOR()
            }
            if (FUNCTION_SETTINGS.REMOVE_RIGHT_CONTENT == true) {
                await REMOVE_RIGHT_CONTENT();
            }
            await ADD_REPORT_BUTTON()
            await Do_Censura();
            await RemoveTweet();
            await CheckPictures();
            if (FUNCTION_SETTINGS.AUTOPLAY_YOUTUBE == true) {
                const youtubes = document.querySelectorAll("div[data-testid='card.wrapper']:not([VISIVEL])");
                youtubes.forEach(function(ytvideo) {
                    if (ElementoEstaVisivel(ytvideo) == true) {
                        ytvideo.setAttribute("VISIVEL", true)
                    }
                });
            }
            requestAnimationFrame(CLEAR_TWEETS);
        } else {
            setTimeout(CLEAR_TWEETS, 500);
        }
    } catch (e) {
        setTimeout(CLEAR_TWEETS, 500);
        throw e;
    }
}

function START_SCRIPTOVERVIEW() {
    chrome.runtime.sendMessage({
        action: 'SCRIPT_READY'
    }, function(response) {
        if (response.success == true) {
            requestAnimationFrame(START);
        } else {
            setTimeout(START_SCRIPTOVERVIEW, 50);
        }
    })
}
document.addEventListener("DOMContentLoaded", START_SCRIPTOVERVIEW)


chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {

    if (message.action === 'async_enabledFunctions') {
        FUNCTION_SETTINGS = message.data.funcoesConfigs
        if (FUNCTION_SETTINGS.Tweet_Scan_Palavras.FullWord == true) {
            regex = new RegExp(BANNED_ITEMS.map(word => `\\b${word}\\b`).join('|'), 'i')
        } else {
            regex = new RegExp(BANNED_ITEMS.join('|'), 'i')
        }
        Reset_Tweets()
    }
    if (message.action == 'Reload_BannedWords') {
        BANNED_ITEMS = message.data.palavrasPredefinidas
        if (FUNCTION_SETTINGS) {
            if (FUNCTION_SETTINGS.Tweet_Scan_Palavras.FullWord == true) {
                regex = new RegExp(BANNED_ITEMS.map(word => `\\b${word}\\b`).join('|'), 'i')
            } else {
                regex = new RegExp(BANNED_ITEMS.join('|'), 'i')
            }
        }
        Reset_Tweets()
    }
})

function Reset_Tweets() {
    const attrs = [
        'MARKED', 'BANNED_WORD', 'FAKE_VIDEO', 'LINK_TWEET',
        'POLL', 'DEFAULT_PIC', 'SELF_TWEET', 'BANNED_TWEET', 'COMUM_SCAM_SCANNED'
    ];
    attrs.forEach(attr => {
        document.querySelectorAll(`*[${attr}]`).forEach(el => el.removeAttribute(attr));
    });
}