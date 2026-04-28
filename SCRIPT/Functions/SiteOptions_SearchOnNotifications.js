
var config_path="M10.54 1.75h2.92l1.57 2.36c.11.17.32.25.53.21l2.53-.59 2.17 2.17-.58 2.54c-.05.2.04.41.21.53l2.36 1.57v2.92l-2.36 1.57c-.17.12-.26.33-.21.53l.58 2.54-2.17 2.17-2.53-.59c-.21-.04-.42.04-.53.21l-1.57 2.36h-2.92l-1.58-2.36c-.11-.17-.32-.25-.52-.21l-2.54.59-2.17-2.17.58-2.54c.05-.2-.03-.41-.21-.53l-2.35-1.57v-2.92L4.1 8.97c.18-.12.26-.33.21-.53L3.73 5.9 5.9 3.73l2.54.59c.2.04.41-.04.52-.21l1.58-2.36zm1.07 2l-.98 1.47C10.05 6.08 9 6.5 7.99 6.27l-1.46-.34-.6.6.33 1.46c.24 1.01-.18 2.07-1.05 2.64l-1.46.98v.78l1.46.98c.87.57 1.29 1.63 1.05 2.64l-.33 1.46.6.6 1.46-.34c1.01-.23 2.06.19 2.64 1.05l.98 1.47h.78l.97-1.47c.58-.86 1.63-1.28 2.65-1.05l1.45.34.61-.6-.34-1.46c-.23-1.01.18-2.07 1.05-2.64l1.47-.98v-.78l-1.47-.98c-.87-.57-1.28-1.63-1.05-2.64l.34-1.46-.61-.6-1.45.34c-1.02.23-2.07-.19-2.65-1.05l-.97-1.47h-.78zM12 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5c.82 0 1.5-.67 1.5-1.5s-.68-1.5-1.5-1.5zM8.5 12c0-1.93 1.56-3.5 3.5-3.5 1.93 0 3.5 1.57 3.5 3.5s-1.57 3.5-3.5 3.5c-1.94 0-3.5-1.57-3.5-3.5z";
var mainDiv=null;
async function NOTIFICATION_SEARCH(){
	try{
 if(document.querySelector("div[data-testid='primaryColumn'] div div")&&window.location.href.indexOf(".com/notifications")&&document.querySelector("path[d='M11.996 2c-4.062 0-7.49 3.021-7.999 7.051L2.866 18H7.1c.463 2.282 2.481 4 4.9 4s4.437-1.718 4.9-4h4.236l-1.143-8.958C19.48 5.017 16.054 2 11.996 2zM9.171 18h5.658c-.412 1.165-1.523 2-2.829 2s-2.417-.835-2.829-2z']")){
    if(!document.querySelector("div[data-testid='primaryColumn'] div div div#divSearch")){

		

		var options = [chrome.i18n.getMessage("searchOption_SELECT"),chrome.i18n.getMessage("searchOption_LIKES"),chrome.i18n.getMessage("searchOption_RETWEETS"),chrome.i18n.getMessage("searchOption_FOLLOW"),chrome.i18n.getMessage("searchOption_NOTAS"),chrome.i18n.getMessage("searchOption_RESPOSTAS")];
	

		var mainDiv = document.createElement("div");
mainDiv.id = "divSearch";

// Cria um elemento select
var search = document.createElement("select");
search.style.width = "-webkit-fill-available";
search.style.backgroundColor = "antiquewhite";
search.style.border = "0";
search.style.borderRadius = "20px";
search.style.color = "black";
search.style.paddingLeft = "10px";
search.style.fontSize="large";

for (var i = 0; i < options.length; i++) {
    var option = document.createElement("option");
    option.value = options[i];
    option.text = options[i];
    search.appendChild(option);
}

search.addEventListener("change",()=>{DinamicSearch(search.value);});
mainDiv.style.display = "inline-block";
mainDiv.style.marginLeft = "20px";

mainDiv.appendChild(search);

// Seleciona o elemento alvo
const targetElement = document.querySelector("div[data-testid='primaryColumn'] span");

// Insere o mainDiv depois do targetElement
if (targetElement && targetElement.parentNode) {
    if (targetElement.nextSibling) {
        targetElement.parentNode.insertBefore(mainDiv, targetElement.nextSibling);
    } else {
        targetElement.parentNode.appendChild(mainDiv);
    }
}

		
		
	}
 }
}catch(e){
		throw e;
	}
}
var NOTIFICATION_CONTENT="";
var NOTIFICATION_CONTENT_TWEETS="";
var arrayF2=null;
function DinamicSearch(nanoValue) {
	lastLoopComponent=nanoValue;
	
	
	
		 arrayF2 = Array.from(document.querySelectorAll("div[data-testid='primaryColumn'] article")).filter(
		element => !element.querySelector("div[role='progressbar']")
	);

arrayF2.forEach((tweet, index) => {
    setTimeout(() => {
        tweet.closest("div[data-testid='cellInnerDiv']").style.display = "flex";
    }, index * 280); 
});

			
			setTimeout(()=>{
				switchNanovalue(nanoValue)
		 
			}, 100);

	
}
function switchNanovalue(nanoValue){
	switch (nanoValue) {
        case chrome.i18n.getMessage("searchOption_LIKES"):
            console.log("Filtrando: " + nanoValue);
			 DinamicSearch_Component.SEARCH_LIKES();
            break;
        case chrome.i18n.getMessage("searchOption_RETWEETS"):
            console.log("Filtrando: " + nanoValue);
			DinamicSearch_Component.SEARCH_RETWEETS();
            break;
        case chrome.i18n.getMessage("searchOption_FOLLOW"):
            console.log("Filtrando: " + nanoValue);
			DinamicSearch_Component.SEARCH_FOLLOW();
            break;
        case chrome.i18n.getMessage("searchOption_NOTAS"):
            console.log("Filtrando: " + nanoValue);
			DinamicSearch_Component.SEARCH_NOTAS();
            break;
        case chrome.i18n.getMessage("searchOption_RESPOSTAS"):
			DinamicSearch_Component.SEARCH_RESPOSTAS();
            console.log("Filtrando: " + nanoValue);
            break;	
    }
}
var paths_Retweets="M4.75 3.79l4.603 4.3-1.706 1.82L6 8.38v7.37c0 .97.784 1.75 1.75 1.75H13V20H7.75c-2.347 0-4.25-1.9-4.25-4.25V8.38L1.853 9.91.147 8.09l4.603-4.3zm11.5 2.71H11V4h5.25c2.347 0 4.25 1.9 4.25 4.25v7.37l1.647-1.53 1.706 1.82-4.603 4.3-4.603-4.3 1.706-1.82L18 15.62V8.25c0-.97-.784-1.75-1.75-1.75z";
var paths_Likes="M20.884 13.19c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z";
var path_Follows="M17.863 13.44c1.477 1.58 2.366 3.8 2.632 6.46l.11 1.1H3.395l.11-1.1c.266-2.66 1.155-4.88 2.632-6.46C7.627 11.85 9.648 11 12 11s4.373.85 5.863 2.44zM12 2C9.791 2 8 3.79 8 6s1.791 4 4 4 4-1.79 4-4-1.791-4-4-4z";
var path_Notas="M5.5 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm18.25 13.91c-.18-2.01-.78-3.72-1.81-4.96C20.89 10.7 19.45 10 17.75 10c-.35 0-.68.03-1.01.09-.18.54-.45 1.05-.8 1.49.74.46 1.41 1.05 1.99 1.76 1.05 1.3 1.71 2.91 2.06 4.66h3.85l-.09-1.09zM18.5 9c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3zM6.07 13.34c.58-.71 1.25-1.3 1.99-1.76-.35-.44-.62-.95-.8-1.49-.33-.06-.66-.09-1.01-.09-1.7 0-3.14.7-4.19 1.95C1.032 13.19.433 14.9.254 16.91L.157 18H4.01c.35-1.75 1.01-3.36 2.06-4.66zM15 8.5c0-1.66-1.34-3-3-3s-3 1.34-3 3 1.34 3 3 3 3-1.34 3-3zm-7.37 6.1c-1.07 1.32-1.69 3.15-1.88 5.31L5.66 21h12.68l-.09-1.09c-.19-2.16-.81-3.99-1.88-5.31-1.08-1.35-2.59-2.1-4.37-2.1s-3.28.75-4.37 2.1z";
var lastLoopComponent=null;

let DinamicSearch_Component = {
	
    SEARCH_FOLLOW: async () => {
		try{
			if(window.location.href.indexOf(".com/notifications")==-1){
				arrayF2.forEach((tweet, index) => {
					setTimeout(() => {
						tweet.closest("div[data-testid='cellInnerDiv']").style.display = "flex";
					}, index * 280); 
				});
				return;
			}
			NOTIFICATION_CONTENT = Array.from(document.querySelectorAll("div[data-testid='primaryColumn'] article")).filter(
				element => !element.querySelector("button[aria-haspopup='menu'][role='button'][data-testid='caret']") && 
						   !element.querySelector("div[role='progressbar']")
			);
			NOTIFICATION_CONTENT_TWEETS = Array.from(document.querySelectorAll("div[data-testid='primaryColumn'] article")).filter(
				element => element.querySelector("button[aria-haspopup='menu'][role='button'][data-testid='caret']") && 
						   !element.querySelector("div[role='progressbar']")
			);
        console.log("Filtrando notificações apenas de Novos Seguidores")
		
		
		NOTIFICATION_CONTENT_TWEETS.forEach(function(tweet){
			tweet.closest("div[data-testid='cellInnerDiv']").style.display="none";
		})
		NOTIFICATION_CONTENT.forEach(function(art){
         if(!art.querySelector("button[aria-haspopup='menu'][role='button'][data-testid='caret']")){
         if(!art.querySelector("path[d='"+path_Follows+"']")){
art.closest("div[data-testid='cellInnerDiv']").style.display="none";
		 }
		 }
		})
		if(lastLoopComponent==chrome.i18n.getMessage("searchOption_FOLLOW")){
			requestAnimationFrame(DinamicSearch_Component.SEARCH_FOLLOW);
		}
		}catch(e){
			throw e;
		}
    },
    SEARCH_LIKES: async () => {
		try{
			if(window.location.href.indexOf(".com/notifications")==-1){
				arrayF2.forEach((tweet, index) => {
					setTimeout(() => {
						tweet.closest("div[data-testid='cellInnerDiv']").style.display = "flex";
					}, index * 280); 
				});
				return;
			}
        console.log("Filtrando notificações apenas de Curtidas")
		NOTIFICATION_CONTENT = Array.from(document.querySelectorAll("div[data-testid='primaryColumn'] article")).filter(
			element => !element.querySelector("button[aria-haspopup='menu'][role='button'][data-testid='caret']") && 
					   !element.querySelector("div[role='progressbar']")
		);
		NOTIFICATION_CONTENT_TWEETS = Array.from(document.querySelectorAll("div[data-testid='primaryColumn'] article")).filter(
			element => element.querySelector("button[aria-haspopup='menu'][role='button'][data-testid='caret']") && 
					   !element.querySelector("div[role='progressbar']")
		);
	
	
	NOTIFICATION_CONTENT_TWEETS.forEach(function(tweet){
		tweet.closest("div[data-testid='cellInnerDiv']").style.display="none";
	})
	NOTIFICATION_CONTENT.forEach(function(art){
	 if(!art.querySelector("button[aria-haspopup='menu'][role='button'][data-testid='caret']")){
	 if(!art.querySelector("path[d='"+paths_Likes+"']")){
		art.closest("div[data-testid='cellInnerDiv']").style.display="none";
	 }
	 }
	})
	if(lastLoopComponent==chrome.i18n.getMessage("searchOption_LIKES")){
		requestAnimationFrame(DinamicSearch_Component.SEARCH_LIKES);
		}
	
	}catch(e){
		throw e;
	}
    },
    SEARCH_RETWEETS: async () => {
		try{
			if(window.location.href.indexOf(".com/notifications")==-1){
				arrayF2.forEach((tweet, index) => {
					setTimeout(() => {
						tweet.closest("div[data-testid='cellInnerDiv']").style.display = "flex";
					}, index * 280); 
				});
				return;
			}
        console.log("Filtrando notificações apenas de Retweets")
		NOTIFICATION_CONTENT = Array.from(document.querySelectorAll("div[data-testid='primaryColumn'] article")).filter(
			element => !element.querySelector("button[aria-haspopup='menu'][role='button'][data-testid='caret']") && 
					   !element.querySelector("div[role='progressbar']")
		);
		NOTIFICATION_CONTENT_TWEETS = Array.from(document.querySelectorAll("div[data-testid='primaryColumn'] article")).filter(
			element => element.querySelector("button[aria-haspopup='menu'][role='button'][data-testid='caret']") && 
					   !element.querySelector("div[role='progressbar']")
		);
	
	
	NOTIFICATION_CONTENT_TWEETS.forEach(function(tweet){
		tweet.closest("div[data-testid='cellInnerDiv']").style.display="none";
	})
	NOTIFICATION_CONTENT.forEach(function(art){
	 if(!art.querySelector("button[aria-haspopup='menu'][role='button'][data-testid='caret']")){
	 if(!art.querySelector("path[d='"+paths_Retweets+"']")){

		art.closest("div[data-testid='cellInnerDiv']").style.display="none";
	 }
	 }
	})
	
	if(lastLoopComponent==chrome.i18n.getMessage("searchOption_RETWEETS")){
		requestAnimationFrame(DinamicSearch_Component.SEARCH_RETWEETS);
		}
	
	}catch(e){
		throw e;
	}
    },
    SEARCH_NOTAS: async () => {
		try{
			if(window.location.href.indexOf(".com/notifications")==-1){
				arrayF2.forEach((tweet, index) => {
					setTimeout(() => {
						tweet.closest("div[data-testid='cellInnerDiv']").style.display = "flex";
					}, index * 280); 
				});
				return;
			}
        console.log("Filtrando notificações apenas de Notas da Comunidade")

		
		NOTIFICATION_CONTENT_TWEETS = Array.from(document.querySelectorAll("div[data-testid='primaryColumn'] article")).filter(
			element => !element.querySelector("div[role='progressbar']")
		);

		//NOTIFICATION_CONTENT_TWEETS = Array.from(document.querySelectorAll("div[data-testid='primaryColumn'] article"));
	
	
	NOTIFICATION_CONTENT_TWEETS.forEach(function(art){
	 if(!art.querySelector("path[d='"+path_Notas+"']")){

		art.closest("div[data-testid='cellInnerDiv']").style.display="none";
	 }
	})
	
		if(lastLoopComponent==chrome.i18n.getMessage("searchOption_NOTAS")){
			requestAnimationFrame(DinamicSearch_Component.SEARCH_NOTAS);
			}
	}catch(e){
		throw e;
	}
    },
    SEARCH_RESPOSTAS: async () => {
		try{
			if(window.location.href.indexOf(".com/notifications")==-1){
				arrayF2.forEach((tweet, index) => {
					setTimeout(() => {
						tweet.closest("div[data-testid='cellInnerDiv']").style.display = "flex";
					}, index * 280); 
				});
				return;
			}
        console.log("Filtrando notificações apenas de Respostas")


	

		 NOTIFICATION_CONTENT_TWEETS = Array.from(document.querySelectorAll("div[data-testid='primaryColumn'] article")).filter(
			element => 
				!element.querySelector("button[aria-haspopup='menu'][role='button'][data-testid='caret']") &&
				!element.querySelector("div[data-testid='Tweet-User-Avatar']") &&
				 !element.querySelector("div[role='progressbar']")
		);
		
		NOTIFICATION_CONTENT_TWEETS.forEach(function(art){
	
			art.closest("div[data-testid='cellInnerDiv']").style.display="none";
		 
		})
		


		if(lastLoopComponent==chrome.i18n.getMessage("searchOption_RESPOSTAS")){
			requestAnimationFrame(DinamicSearch_Component.SEARCH_RESPOSTAS);
			}
	}catch(e){
		throw e;
	}
    },



};