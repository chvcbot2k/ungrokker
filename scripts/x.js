const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    hideGrokker();
  });
});

// Start observing the document body
observer.observe(document.body, { childList: true, subtree: true });

// NOTE: this is probably inefficient to re-hide every tweet
// TODO: see if that matters
function hideGrokker() {
    // Fetch all replies by their parent div of tweetText
    const tweets = document.querySelectorAll('div[data-testid="cellInnerDiv"]');
    // Filter by the grokkers
    Array.from(tweets).filter(tweet => {
        return tweet.querySelector('a[href="/grok"]') !== null
        || tweet.querySelector('a[href="/gork"]') !== null;
    }).forEach(grokker => {
        console.log("found grokker, hiding");
        grokker.hidden = true;
    });
}
