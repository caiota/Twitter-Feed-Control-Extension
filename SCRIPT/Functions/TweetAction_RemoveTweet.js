async function RemoveTweet() {
    for (const item of REMOVE_ITENS) {
        let tweetID = item.elemente; // pega o elemento real

        if(!tweetID) continue;

        if(tweetID.closest("div[data-testid='cellInnerDiv']")) {
            tweetID = tweetID.closest("div[data-testid='cellInnerDiv']");
        }

        if (FUNCTION_SETTINGS.NO_REMOVE) {
            tweetID.style.opacity = "0.4";
            tweetID.classList.add("BANNED_TWEET");
            tweetID.style.backgroundColor = "orange";
            tweetID.setAttribute("BANNED_WORD", true);
        } else {
            tweetID.style.display = "none";
        }
    }
    REMOVE_ITENS = [];
}