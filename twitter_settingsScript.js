var VERSAO="Ver. 1.18";
document.querySelector("#versao").innerText=VERSAO;
document.querySelector('textarea#CustomWord').addEventListener('change', function (item) {
 
    
    port.postMessage({ action: "save_customWords",
    message: item.target.value.split('\n')});
  
});
document.querySelector('input#ParecidagemRange').addEventListener('input', function (item) {
  var valueToFilter = item.target.value / 100;
  var valueToView = item.target.value
  FUNCTION_SETTINGS.TWEET_SPAM.Parecidagem = valueToFilter;
  document.querySelector("span#rangeValue").innerText = antiSpam_percentageFindmessage+": " + valueToView + "%";
  SAVE_FUNCTION_SETTINGS();
});


document.querySelector('textarea#CustomWord').addEventListener("click", function (item) {
  item.target.scrollTop = item.target.scrollHeight;
}, {
  once: true
});
var FUNCTION_SETTINGS = {
  ANTI_SPOILER: false,
  CENSURA_TUDO: false,
  VIDEO_AUTO_PAUSE: true,
  PREVIEW_IMAGES: true,
  SELF_TWEET: false,
  NO_REMOVE: true,
  AUTOPLAY_YOUTUBE: false,
  HORIZONTAL_MENU: true,
  REMOVE_RIGHT_CONTENT: false,
  REMOVE_NOPIC_USER: false,
  REMOVE_SPONSORED: true,
  FAKE_VIDEO_BAIT: false,
  NOTIFICATION_SEARCH:true,
  FILTER_ON_NOTIFICATION:false,
  Tweet_Scan_Palavras: {
    BanEmotes:true,
    RemoveAutomated: true,
    NaoRemover_Customizadas: false,
    Block_User: false,
    Mute_User:false,
    todo_tweet: false,
    Scan_Cards: true,
    FullWord: false,
    TweetEmotes: false,
    LetrasGrandes: true,
    use_regex: true,
    remove_arabe: true,
    remove_asiatico: true,
    remove_coreano: true,
    remove_hebraico: true,
    remove_amarico: true,
    remove_russo: true,
    remove_hindi: true,
    remove_vietnamita: true,
    remove_tailandes: true,
    remove_grego: true,
    PalavrasCustomizadas: true,
    Trendings: true,
    clearSearch:false
  },
  Remover_Enquetes: false,
  Remover_Links: {
    ativo: false,
    onlyLink: false
  },
  TWEET_SPAM: {
    ativo: false,
    removeLinks: true,
    Parecidagem: 0.8
  },
  SHORTCUTS: {
    fast_block: true,
    report_tweet: false,
    view_less: false,
    mute_user: true,
    view_quotes: true
  }
}

document
  .querySelectorAll("input[type='checkbox']")
  .forEach(function (inputElement) {
    inputElement.addEventListener('change', function (item) {
      document.querySelector("div#reloadTip").style.display = "block";
      valor = item.target.checked;
      
      console.log(item.target.getAttribute('valor'),valor)
      switch (item.target.getAttribute('valor')) {
        case 'ANTI_SPOILER':
          FUNCTION_SETTINGS.ANTI_SPOILER = valor;
          break;
        case 'VIDEO_AUTO_PAUSE':
          FUNCTION_SETTINGS.VIDEO_AUTO_PAUSE = valor;
          break;
        case 'todo_tweet':
          FUNCTION_SETTINGS.Tweet_Scan_Palavras.todo_tweet = valor;
          break;
        case 'use_regex':
          FUNCTION_SETTINGS.Tweet_Scan_Palavras.use_regex = valor;
          break;
        case 'remove_asiatico':
          FUNCTION_SETTINGS.Tweet_Scan_Palavras.remove_asiatico = valor;
          break;
        case 'remove_russo':
          FUNCTION_SETTINGS.Tweet_Scan_Palavras.remove_russo = valor;
          break;
        case 'remove_arabe':
          FUNCTION_SETTINGS.Tweet_Scan_Palavras.remove_arabe = valor;
          break;
        case 'remove_hebraico':
          FUNCTION_SETTINGS.Tweet_Scan_Palavras.remove_hebraico = valor;
          break;
        case 'remove_hindi':
          FUNCTION_SETTINGS.Tweet_Scan_Palavras.remove_hindi = valor;
          break;
        case 'remove_vietnamita':
          FUNCTION_SETTINGS.Tweet_Scan_Palavras.remove_vietnamita = valor;
          break;
        case 'remove_tailandes':
          FUNCTION_SETTINGS.Tweet_Scan_Palavras.remove_tailandes = valor;
          break;
        case 'remove_grego':
          FUNCTION_SETTINGS.Tweet_Scan_Palavras.remove_grego = valor;
          break;
        case 'remove_coreano':
          FUNCTION_SETTINGS.Tweet_Scan_Palavras.remove_coreano = valor;
          break;
        case 'remove_amarico':
          FUNCTION_SETTINGS.Tweet_Scan_Palavras.remove_amarico = valor;
          break;
        case 'Remover_Links':
          FUNCTION_SETTINGS.Remover_Links.ativo = valor;
          break;
        case 'onlyLink':
          FUNCTION_SETTINGS.Remover_Links.onlyLink = valor;
          break;
        case 'PalavrasCustomizadas':
          FUNCTION_SETTINGS.Tweet_Scan_Palavras.PalavrasCustomizadas = valor;
          break;
        case 'Remover_Enquetes':
          FUNCTION_SETTINGS.Remover_Enquetes = valor;
          break;
        case 'ANTI_SELF':
          FUNCTION_SETTINGS.SELF_TWEET = valor;
          break;
        case 'scan_trends':
          FUNCTION_SETTINGS.Tweet_Scan_Palavras.Trendings = valor;
          break;
        case 'Header_Menu':
          FUNCTION_SETTINGS.HORIZONTAL_MENU = valor;
          break;
        case 'NoPics':
          FUNCTION_SETTINGS.REMOVE_NOPIC_USER = valor;
          break;
        case 'full_word':
          FUNCTION_SETTINGS.Tweet_Scan_Palavras.FullWord = valor;
          break;
        case 'tweet_urlCards':
          FUNCTION_SETTINGS.Tweet_Scan_Palavras.Scan_Cards = valor;
          break;
        case 'CopyTweets':
          FUNCTION_SETTINGS.TWEET_SPAM.ativo = valor;
          break;
        case 'CopyTweets_RemoveLinks':
          FUNCTION_SETTINGS.TWEET_SPAM.removeLinks = valor;
          break;
        case 'FakeVideos':
          FUNCTION_SETTINGS.FAKE_VIDEO_BAIT = valor;
          break;
        case 'CENSURAR_TUDO':
          FUNCTION_SETTINGS.CENSURA_TUDO = valor;
          break;
        case 'remove_BigLetter':
          FUNCTION_SETTINGS.Tweet_Scan_Palavras.LetrasGrandes = valor;
          break;
        case 'FadeOut_Tweet':
          FUNCTION_SETTINGS.NO_REMOVE = valor;
          break;
        case 'reportExtension':
          FUNCTION_SETTINGS.SHORTCUTS.report_tweet = valor;
          break;
        case 'selfDeleteOption':
          FUNCTION_SETTINGS.SHORTCUTS.selfDeleteOption = valor;
          break;
        case 'fastBlock':
          FUNCTION_SETTINGS.SHORTCUTS.fast_block = valor;
          break;
        case 'verMenos':
          FUNCTION_SETTINGS.SHORTCUTS.view_less = valor;
          break;
          case 'fastMute':
            FUNCTION_SETTINGS.SHORTCUTS.mute_user = valor;
            break;
            case 'viewQuotes':
              FUNCTION_SETTINGS.SHORTCUTS.view_quotes = valor;
        break;
        case 'SearchFix':
         FUNCTION_SETTINGS.Tweet_Scan_Palavras.clearSearch = valor;
         break;
         case 'NotificationSearch':
          FUNCTION_SETTINGS.NOTIFICATION_SEARCH = valor;
           break;
        
           case 'ZoomImages':
            FUNCTION_SETTINGS.PREVIEW_IMAGES = valor;
            break;
            case 'NsfwEmotes':
              FUNCTION_SETTINGS.Tweet_Scan_Palavras.BanEmotes = valor;
              break;

        case 'RemoveSponsored':
          FUNCTION_SETTINGS.REMOVE_SPONSORED = valor;
          break;
        case 'CensuraPalavra':
          FUNCTION_SETTINGS.Tweet_Scan_Palavras.NaoRemover_Customizadas = valor;
          break;
        case 'Remover_Emotes':
          FUNCTION_SETTINGS.Tweet_Scan_Palavras.TweetEmotes = valor;
          break;
          case 'BloquearOnFind':
            FUNCTION_SETTINGS.Tweet_Scan_Palavras.Block_User = valor;
            FUNCTION_SETTINGS.Tweet_Scan_Palavras.Mute_User = false;
            break;
            case 'MuteOnFind':
              FUNCTION_SETTINGS.Tweet_Scan_Palavras.Mute_User = valor;
              FUNCTION_SETTINGS.Tweet_Scan_Palavras.Block_User = false;
              break;
        case 'RemoveAutomated':
          FUNCTION_SETTINGS.Tweet_Scan_Palavras.RemoveAutomated = valor;
          break;
        case 'AutoYoutube':
          FUNCTION_SETTINGS.AUTOPLAY_YOUTUBE = valor;
          break;
          case 'RemoveComplementary':
            FUNCTION_SETTINGS.REMOVE_RIGHT_CONTENT = valor;
            break;


      }

      setTimeout(SAVE_FUNCTION_SETTINGS,100);
    })
  })
 
  function loadMessages(locale, callback) {
    fetch(`/_locales/${locale}/messages.json`)
      .then(response => response.json())
      .then(messages => {
        callback(messages);
      })
      .catch(error => console.error('Error loading locale messages:', error));
  }
  
  // Função para salvar a preferência de idioma no armazenamento do Chrome
  function saveLanguagePreference(locale) {
    chrome.storage.sync.set({ locale: locale }, function() {
      console.log('Language preference saved:', locale);
    });
  }
  
  // Função para obter a preferência de idioma do armazenamento do Chrome
  function getLanguagePreference(callback) {
    chrome.storage.sync.get('locale', function(data) {
      const locale = data.locale || 'pt_BR'; // Padrão para Português - Brasil se não estiver definido
      callback(locale);
    });
  }
  
  // Função para atualizar o conteúdo da extensão com base no idioma selecionado
  function updateContent(locale) {
    loadMessages(locale, messages => { 
      
      
      document.querySelector("#LeaveNotesPls").innerText=messages.nota.message;
      document.title = messages.extensionName.message;
      document.getElementById("title").innerText=messages.extensionName.message;
      document.getElementById("reloadTip").innerText=messages.reload_tip.message;
     //FILTER TITLES
     document.getElementById("filterConfig").innerText=messages.legends_filter_config.message;
     document.getElementById("tweets_languages").innerText=messages.legends_tweet_languages.message;
     document.getElementById("banned_words").innerText=messages.legends_banned_words.message;
     document.getElementById("visual_filters").innerText=messages.legends_visual_filters.message;
     document.getElementById("extra_tools").innerText=messages.legends_extra_tools.message;
     document.getElementById("spam_filter").innerText=messages.legends_spam_filter.message;
     document.getElementById("media_control").innerText=messages.legends_media_control.message;
     document.getElementById("tweet_links").innerText=messages.legends_tweet_links.message;
     document.getElementById("fast_actions").innerText=messages.legends_fast_actions.message;

     //FILTERS OPTIONS
     document.querySelector("label[for='box_ScanAllTweet']").innerText=messages.filter_names.message;
     document.querySelector("div.box_ScanAllTweet").innerText=messages.filter_names.description;
     document.querySelector("label[for='box_ScanUrlCards']").innerText=messages.filter_urlPreview.message;
     document.querySelector("label[for='box_ScanTrends']").innerText=messages.filter_Trends.message;
     document.querySelector("label[for='box_FadeOutTweet']").innerText=messages.orange_tweet.message;
     document.querySelector("label[for='box_RemoveAsian']").innerText=messages.oriental_tweets.message;
     document.querySelector("label[for='box_RemoveKorean']").innerText=messages.corean_tweets.message;
     document.querySelector("label[for='box_RemoveRussian']").innerText=messages.russian_tweets.message;
     document.querySelector("label[for='box_RemoveArabian']").innerText=messages.arabian_tweets.message;
     document.querySelector("label[for='box_RemoveHebraico']").innerText=messages.hebraic_tweets.message;
     document.querySelector("label[for='box_RemoveHindi']").innerText=messages.ariana_tweets.message;
     document.querySelector("label[for='box_RemoveVietnamita']").innerText=messages.vietnamita_tweets.message;
     document.querySelector("label[for='box_RemoveTailandes']").innerText=messages.thailand_tweets.message;
     document.querySelector("label[for='box_RemoveGrego']").innerText=messages.greek_tweets.message;
     document.querySelector("label[for='box_RemoveAmarico']").innerText=messages.amaric_tweets.message;
     document.querySelector("label[for='box_ScanFullWord']").innerText=messages.full_word.message;
     document.querySelector("label[for='box_UseRegEx']").innerText=messages.use_regex.message;
     document.querySelector("label[for='box_CustomWord']").innerText=messages.enable_Wordfilter.message;
     document.querySelector("label[for='box_CensuraPalavra']").innerText=messages.obfusc_word.message;
     document.querySelector("label[for='box_RemoveOptionsBox']").innerText=messages.horizontal_menu.message;
     document.querySelector("label[for='box_RemoveComplementary']").innerText=messages.remove_lateralContent.message;
     document.querySelector("label[for='box_RemoveBigLetters']").innerText=messages.remove_BigLetters.message;
     document.querySelector("label[for='box_NoEmotes']").innerText=messages.remove_EmptyTweets.message;
     document.querySelector("label[for='box_NoPools']").innerText=messages.remove_Polls.message;
     document.querySelector("label[for='box_RemoveSelfRetweet']").innerText=messages.remove_SelfRetweet.message;
     document.querySelector("label[for='box_RemoveFakeVideos']").innerText=messages.remove_FakeVideos.message;
     document.querySelector("label[for='box_RemoveAutomated']").innerText=messages.remove_Automated.message;
     document.querySelector("label[for='box_RemoveSponsored']").innerText=messages.remove_sponsored.message;
     document.querySelector("label[for='box_RemoveNoPics']").innerText=messages.remove_noPic.message;
     document.querySelector("label[for='box_SearchFix']").innerText=messages.remove_fakeContent.message;
     document.querySelector("label[for='box_NotificationSearch']").innerText=messages.enable_searchNotifications.message;
     document.querySelector("label[for='box_ZoomImages']").innerText=messages.enable_imgPreview.message;
     document.querySelector("label[for='box_BlockPeople']").innerText=messages.block_onFind.message;
     document.querySelector("label[for='box_MutePeople']").innerText=messages.mute_onFind.message;
     document.querySelector("label[for='box_RemoveCopyTweets']").innerText=messages.enable_antiSpam.message;
     document.querySelector("label[for='box_RemoveCopyTweets_Links']").innerText=messages.antiSpam_ignoreLinks.message;
     document.querySelector("span#rangeValue").innerText=messages.antiSpam_percentageFind.message;
     document.querySelector("label[for='box_PauseVideos']").innerText=messages.pauseVideos.message;
     document.querySelector("label[for='box_AutoYoutube']").innerText=messages.enable_autoYoutube.message;
     document.querySelector("label[for='box_Uncensure']").innerText=messages.remove_spoilers.message;
     document.querySelector("label[for='box_CensureAll']").innerText=messages.censuraAll.message;
     document.querySelector("label[for='box_RemoveLink']").innerText=messages.removeLinks.message;
     document.querySelector("label[for='box_RemoveLinkOnly']").innerText=messages.remove_OnlyLinks.message;
     document.querySelector("label[for='box_reportExtension']").innerText=messages.fastReport.message;
     
     document.querySelector("label[for='box_selfDeleteOption']").innerText=messages.box_selfDeleteOption.message;
     document.querySelector("label[for='box_fastBlock']").innerText=messages.fastBlock.message;
     document.querySelector("label[for='box_verMenos']").innerText=messages.fastSeeless.message;
     document.querySelector("label[for='box_fastMute']").innerText=messages.fastMute.message;
     document.querySelector("label[for='box_fastQuotes']").innerText=messages.fastQuotes.message;
     antiSpam_percentageFindmessage = messages.antiSpam_percentageFind.message;
     
     document.querySelector("label[for='box_NsfwEmotes']").innerText=messages.remove_DefaultEmotes.message;
     //DESCRIPTIONS
     
     document.querySelector("div.box_ScanUrlCards").innerText=messages.filter_urlPreview.description;
     document.querySelector("div.box_ScanTrends").innerText=messages.filter_Trends.description;
     document.querySelector("div.box_FadeOutTweet").innerText=messages.orange_tweet.description;
     document.querySelector("div.box_ScanFullWord").innerText=messages.full_word.description;
     document.querySelector("div.box_UseRegEx").innerText=messages.use_regex.description;
     document.querySelector("div.box_CustomWord").innerText=messages.enable_Wordfilter.description;
     document.querySelector("div.box_CensuraPalavra").innerText=messages.obfusc_word.description;
     document.querySelector("div.box_RemoveOptionsBox").innerText=messages.horizontal_menu.description;
     document.querySelector("div.box_RemoveComplementary").innerText=messages.remove_lateralContent.description;
     document.querySelector("div.box_RemoveBigLetters").innerText=messages.remove_BigLetters.description;
     document.querySelector("div.box_NoEmotes").innerText=messages.remove_EmptyTweets.description;
     document.querySelector("div.box_NoPools").innerText=messages.remove_Polls.description;
     document.querySelector("div.box_RemoveSelfRetweet").innerText=messages.remove_SelfRetweet.description;
     document.querySelector("div.box_RemoveFakeVideos").innerText=messages.remove_FakeVideos.description;
     document.querySelector("div.box_RemoveAutomated").innerText=messages.remove_Automated.description;
     document.querySelector("div.box_RemoveSponsored").innerText=messages.remove_sponsored.description;
     document.querySelector("div.box_RemoveNoPics").innerText=messages.remove_noPic.description;
     document.querySelector("div.box_SearchFix").innerText=messages.remove_fakeContent.description;
     document.querySelector("div.box_NotificationSearch").innerText=messages.enable_searchNotifications.description;
     document.querySelector("div.box_ZoomImages").innerText=messages.enable_imgPreview.description;
     document.querySelector("div.box_BlockPeople").innerText=messages.block_onFind.description;
     document.querySelector("div.box_MutePeople").innerText=messages.mute_onFind.description;
     document.querySelector("div.ParecidagemRange").innerText=messages.antiSpam_percentageFind.description;
     document.querySelector("div.box_RemoveCopyTweets_Links").innerText=messages.antiSpam_ignoreLinks.description;
     document.querySelector("div.box_PauseVideos").innerText=messages.pauseVideos.description;
     document.querySelector("div.box_AutoYoutube").innerText=messages.enable_autoYoutube.description;
     document.querySelector("div.box_Uncensure").innerText=messages.remove_spoilers.description;
     document.querySelector("div.box_CensureAll").innerText=messages.censuraAll.description;
     document.querySelector("div.box_RemoveLink").innerText=messages.removeLinks.description;
     document.querySelector("div.box_RemoveLinkOnly").innerText=messages.remove_OnlyLinks.description;
     document.querySelector("div.box_reportExtension").innerText=messages.fastReport.description;
     document.querySelector("div.box_selfDeleteOption").innerText=messages.box_selfDeleteOption.description;
     document.querySelector("div.box_fastBlock").innerText=messages.fastBlock.description;
     document.querySelector("div.box_verMenos").innerText=messages.fastSeeless.description;
     document.querySelector("div.box_fastMute").innerText=messages.fastMute.description;
     document.querySelector("div.box_fastQuotes").innerText=messages.fastQuotes.description;
     document.querySelector("div.box_NsfwEmotes").innerText=messages.remove_DefaultEmotes.description;
    });
  }
  var antiSpam_percentageFindmessage="";
  

  document.addEventListener('DOMContentLoaded', () => {
    

    getLanguagePreference(locale => {
      document.getElementById('language-selector').value = locale;
      updateContent(locale);
    });
  
    // Adiciona um ouvinte de evento para o seletor de idioma
    document.getElementById('language-selector').addEventListener('change', event => {
      const newLocale = event.target.value;
      saveLanguagePreference(newLocale);
      updateContent(newLocale);
    });
  });
    var port = chrome.runtime.connect({name: "ttextensionframeworkofaverybigwordohmygodman"});

    port.postMessage({ action: "SCRIPT_POPUP_READY"});
    port.onMessage.addListener(function(message) {
      if (message.action === 'SCRIPT_POPUP_READY') {

        port.postMessage({ action: "async_enabledFunctions",tipo: "popup" });
        port.postMessage({ action: "async_bannedWords",tipo: "popup" });
      }
      
      if (message.action === 'NAVIGATOR_BYINFO') {
switch(message.message){
  case 'Brave':
  document.querySelector("#notesUrl").href="https://chromewebstore.google.com/detail/controle-de-feed-para-twi/phdbbkmhjfmcnjifocjpncghgmffngna";
  break;
  case 'Chrome':
  document.querySelector("#notesUrl").href="https://chromewebstore.google.com/detail/controle-de-feed-para-twi/phdbbkmhjfmcnjifocjpncghgmffngna";
  break;
  case 'Opera':
  document.querySelector("#notesUrl").href="https://addons.opera.com/extensions/details/controle-de-feed-para-twitter/";
  break;
  case 'Edge':
  document.querySelector("#notesUrl").href="https://microsoftedge.microsoft.com/addons/detail/feed-control-for-twitter/bmnopclkhmjkdkncliakmhohafebjjij";
  break;
  case 'Firefox':
  document.querySelector("#notesUrl").href="https://addons.mozilla.org/firefox/addon/controle-de-feed-para-twitter/";
  break;
}
      }
    if (message.action === 'async_enabledFunctions') {
      itens = message.data.funcoesConfigs
      FUNCTION_SETTINGS.NOTIFICATION_SEARCH = itens.NOTIFICATION_SEARCH;
      FUNCTION_SETTINGS.ANTI_SPOILER = itens.ANTI_SPOILER;
      FUNCTION_SETTINGS.CENSURA_TUDO = itens.CENSURA_TUDO;
      FUNCTION_SETTINGS.VIDEO_AUTO_PAUSE = itens.VIDEO_AUTO_PAUSE;
      FUNCTION_SETTINGS.NO_REMOVE = itens.NO_REMOVE;
      FUNCTION_SETTINGS.SHORTCUTS.fast_block = itens.SHORTCUTS.fast_block;
      FUNCTION_SETTINGS.SHORTCUTS.report_tweet = itens.SHORTCUTS.report_tweet;
      FUNCTION_SETTINGS.SHORTCUTS.selfDeleteOption = itens.SHORTCUTS.selfDeleteOption;
      FUNCTION_SETTINGS.SHORTCUTS.view_less = itens.SHORTCUTS.view_less;
      FUNCTION_SETTINGS.SHORTCUTS.mute_user = itens.SHORTCUTS.mute_user;
      FUNCTION_SETTINGS.SHORTCUTS.view_quotes = itens.SHORTCUTS.view_quotes;
      FUNCTION_SETTINGS.PREVIEW_IMAGES = itens.PREVIEW_IMAGES;
      FUNCTION_SETTINGS.REMOVE_SPONSORED = itens.REMOVE_SPONSORED;
      FUNCTION_SETTINGS.AUTOPLAY_YOUTUBE = itens.AUTOPLAY_YOUTUBE;
      FUNCTION_SETTINGS.REMOVE_RIGHT_CONTENT = itens.REMOVE_RIGHT_CONTENT;
      // Configurações de Palavras-Chave para Verificação de Tweets
      var Tweet_Scan_Palavras = FUNCTION_SETTINGS.Tweet_Scan_Palavras;
      var itensTweetScanPalavras = itens.Tweet_Scan_Palavras;

      Tweet_Scan_Palavras.todo_tweet = itensTweetScanPalavras.todo_tweet;
      Tweet_Scan_Palavras.clearSearch = itensTweetScanPalavras.clearSearch;
      Tweet_Scan_Palavras.BanEmotes = itensTweetScanPalavras.BanEmotes;
      Tweet_Scan_Palavras.use_regex = itensTweetScanPalavras.use_regex;
      Tweet_Scan_Palavras.remove_arabe = itensTweetScanPalavras.remove_arabe;
      Tweet_Scan_Palavras.remove_asiatico = itensTweetScanPalavras.remove_asiatico;
      Tweet_Scan_Palavras.remove_hebraico = itensTweetScanPalavras.remove_hebraico;
      Tweet_Scan_Palavras.remove_russo = itensTweetScanPalavras.remove_russo;
      Tweet_Scan_Palavras.remove_hindi = itensTweetScanPalavras.remove_hindi;
      Tweet_Scan_Palavras.remove_vietnamita = itensTweetScanPalavras.remove_vietnamita;
      Tweet_Scan_Palavras.remove_tailandes = itensTweetScanPalavras.remove_tailandes;
      Tweet_Scan_Palavras.remove_grego = itensTweetScanPalavras.remove_grego;
      Tweet_Scan_Palavras.remove_amarico = itensTweetScanPalavras.remove_amarico;
      Tweet_Scan_Palavras.remove_coreano = itensTweetScanPalavras.remove_coreano;
      Tweet_Scan_Palavras.PalavrasCustomizadas = itensTweetScanPalavras.PalavrasCustomizadas;
      Tweet_Scan_Palavras.Trendings = itensTweetScanPalavras.Trendings;
      Tweet_Scan_Palavras.FullWord = itensTweetScanPalavras.FullWord;
      Tweet_Scan_Palavras.Scan_Cards = itensTweetScanPalavras.Scan_Cards;
      Tweet_Scan_Palavras.LetrasGrandes = itensTweetScanPalavras.LetrasGrandes;
      Tweet_Scan_Palavras.NaoRemover_Customizadas = itensTweetScanPalavras.NaoRemover_Customizadas;
      Tweet_Scan_Palavras.TweetEmotes = itensTweetScanPalavras.TweetEmotes;
      Tweet_Scan_Palavras.Block_User = itensTweetScanPalavras.Block_User;
      Tweet_Scan_Palavras.Mute_User = itensTweetScanPalavras.Mute_User;
      Tweet_Scan_Palavras.RemoveAutomated = itensTweetScanPalavras.RemoveAutomated;
      // Outras Configurações
      FUNCTION_SETTINGS.Remover_Enquetes = itens.Remover_Enquetes;
      FUNCTION_SETTINGS.Remover_Links.ativo = itens.Remover_Links.ativo;
      FUNCTION_SETTINGS.Remover_Links.onlyLink = itens.Remover_Links.onlyLink;
      FUNCTION_SETTINGS.SELF_TWEET = itens.SELF_TWEET;
      FUNCTION_SETTINGS.HORIZONTAL_MENU = itens.HORIZONTAL_MENU;
      FUNCTION_SETTINGS.REMOVE_NOPIC_USER = itens.REMOVE_NOPIC_USER;
      FUNCTION_SETTINGS.TWEET_SPAM.ativo = itens.TWEET_SPAM.ativo;
      FUNCTION_SETTINGS.TWEET_SPAM.removeLinks = itens.TWEET_SPAM.removeLinks;
      FUNCTION_SETTINGS.TWEET_SPAM.Parecidagem = itens.TWEET_SPAM.Parecidagem;
      FUNCTION_SETTINGS.FAKE_VIDEO_BAIT = itens.FAKE_VIDEO_BAIT;

      document.querySelector('input#box_PauseVideos').checked = FUNCTION_SETTINGS.VIDEO_AUTO_PAUSE;
      document.querySelector('input#box_Uncensure').checked = FUNCTION_SETTINGS.ANTI_SPOILER;
      document.querySelector('input#box_NoPools').checked = FUNCTION_SETTINGS.Remover_Enquetes;
      document.querySelector('input#box_CustomWord').checked = FUNCTION_SETTINGS.Tweet_Scan_Palavras.PalavrasCustomizadas;
      document.querySelector('input#box_RemoveLinkOnly').checked = FUNCTION_SETTINGS.Remover_Links.onlyLink;
      document.querySelector('input#box_RemoveLink').checked = FUNCTION_SETTINGS.Remover_Links.ativo;
      document.querySelector('input#box_RemoveAsian').checked = FUNCTION_SETTINGS.Tweet_Scan_Palavras.remove_asiatico;
      document.querySelector('input#box_RemoveRussian').checked = FUNCTION_SETTINGS.Tweet_Scan_Palavras.remove_russo;
      document.querySelector('input#box_RemoveArabian').checked = FUNCTION_SETTINGS.Tweet_Scan_Palavras.remove_arabe;
      document.querySelector('input#box_RemoveHebraico').checked = FUNCTION_SETTINGS.Tweet_Scan_Palavras.remove_hebraico;
      document.querySelector('input#box_RemoveTailandes').checked = FUNCTION_SETTINGS.Tweet_Scan_Palavras.remove_tailandes;
      document.querySelector('input#box_RemoveHindi').checked = FUNCTION_SETTINGS.Tweet_Scan_Palavras.remove_hindi;
      document.querySelector('input#box_RemoveVietnamita').checked = FUNCTION_SETTINGS.Tweet_Scan_Palavras.remove_vietnamita;
      document.querySelector('input#box_RemoveGrego').checked = FUNCTION_SETTINGS.Tweet_Scan_Palavras.remove_grego;
      document.querySelector('input#box_RemoveKorean').checked = FUNCTION_SETTINGS.Tweet_Scan_Palavras.remove_coreano;
      document.querySelector('input#box_UseRegEx').checked = FUNCTION_SETTINGS.Tweet_Scan_Palavras.use_regex;
      document.querySelector('input#box_ScanAllTweet').checked = FUNCTION_SETTINGS.Tweet_Scan_Palavras.todo_tweet;
      document.querySelector('input#box_RemoveSelfRetweet').checked = FUNCTION_SETTINGS.SELF_TWEET;
      document.querySelector('input#box_ScanTrends').checked = FUNCTION_SETTINGS.Tweet_Scan_Palavras.Trendings;
      document.querySelector('input#box_RemoveOptionsBox').checked = FUNCTION_SETTINGS.HORIZONTAL_MENU;
      document.querySelector('input#box_RemoveAmarico').checked = FUNCTION_SETTINGS.Tweet_Scan_Palavras.remove_amarico;
      document.querySelector('input#box_RemoveNoPics').checked = FUNCTION_SETTINGS.REMOVE_NOPIC_USER;
      document.querySelector('input#box_ScanFullWord').checked = FUNCTION_SETTINGS.Tweet_Scan_Palavras.FullWord;
      document.querySelector('input#box_ScanUrlCards').checked = FUNCTION_SETTINGS.Tweet_Scan_Palavras.Scan_Cards;
      document.querySelector('input#box_RemoveCopyTweets').checked = FUNCTION_SETTINGS.TWEET_SPAM.ativo;
      document.querySelector('input#box_RemoveCopyTweets_Links').checked = FUNCTION_SETTINGS.TWEET_SPAM.removeLinks;
      document.querySelector('input#box_RemoveFakeVideos').checked = FUNCTION_SETTINGS.FAKE_VIDEO_BAIT;
      document.querySelector("span#rangeValue").innerText = antiSpam_percentageFindmessage +": "+ (FUNCTION_SETTINGS.TWEET_SPAM.Parecidagem * 100) + "%";
      document.querySelector('input#ParecidagemRange').value = FUNCTION_SETTINGS.TWEET_SPAM.Parecidagem * 100;
      document.querySelector('input#box_CensureAll').checked = FUNCTION_SETTINGS.CENSURA_TUDO;
      document.querySelector('input#box_RemoveBigLetters').checked = FUNCTION_SETTINGS.Tweet_Scan_Palavras.LetrasGrandes;
      document.querySelector('input#box_FadeOutTweet').checked = FUNCTION_SETTINGS.NO_REMOVE;
      document.querySelector('input#box_reportExtension').checked = FUNCTION_SETTINGS.SHORTCUTS.report_tweet;
      document.querySelector('input#box_selfDeleteOption').checked = FUNCTION_SETTINGS.SHORTCUTS.selfDeleteOption;
      document.querySelector('input#box_fastBlock').checked = FUNCTION_SETTINGS.SHORTCUTS.fast_block;
      document.querySelector('input#box_verMenos').checked = FUNCTION_SETTINGS.SHORTCUTS.view_less;
      document.querySelector('input#box_fastMute').checked = FUNCTION_SETTINGS.SHORTCUTS.mute_user;
      document.querySelector('input#box_fastQuotes').checked = FUNCTION_SETTINGS.SHORTCUTS.view_quotes;
      document.querySelector('input#box_ZoomImages').checked = FUNCTION_SETTINGS.PREVIEW_IMAGES;
      document.querySelector('input#box_RemoveSponsored').checked = FUNCTION_SETTINGS.REMOVE_SPONSORED;
      document.querySelector('input#box_CensuraPalavra').checked = FUNCTION_SETTINGS.Tweet_Scan_Palavras.NaoRemover_Customizadas;
      document.querySelector('input#box_NoEmotes').checked = FUNCTION_SETTINGS.Tweet_Scan_Palavras.TweetEmotes;
      document.querySelector('input#box_BlockPeople').checked = FUNCTION_SETTINGS.Tweet_Scan_Palavras.Block_User;
      document.querySelector('input#box_MutePeople').checked = FUNCTION_SETTINGS.Tweet_Scan_Palavras.Mute_User;
      document.querySelector('input#box_RemoveAutomated').checked = FUNCTION_SETTINGS.Tweet_Scan_Palavras.RemoveAutomated;
      document.querySelector('input#box_AutoYoutube').checked = FUNCTION_SETTINGS.AUTOPLAY_YOUTUBE;
      document.querySelector('input#box_RemoveComplementary').checked = FUNCTION_SETTINGS.REMOVE_RIGHT_CONTENT;
      document.querySelector('input#box_SearchFix').checked = FUNCTION_SETTINGS.Tweet_Scan_Palavras.clearSearch;
      document.querySelector('input#box_NotificationSearch').checked = FUNCTION_SETTINGS.NOTIFICATION_SEARCH;
      document.querySelector('input#box_SearchFix').checked = FUNCTION_SETTINGS.Tweet_Scan_Palavras.clearSearch;
      document.querySelector('input#box_NsfwEmotes').checked = FUNCTION_SETTINGS.Tweet_Scan_Palavras.BanEmotes;

    }

    if (message.action == 'Reload_BannedWords') {
      document.querySelector('textarea#CustomWord').value =
        message.data.palavrasPredefinidas.toString().replaceAll(',', '\n')
    }
    
  })

function SAVE_FUNCTION_SETTINGS() {
  try {

    port.postMessage({ action: "save_functions", message: FUNCTION_SETTINGS });
  } catch (e) {
    console.error("erro " + e)
  }
}

