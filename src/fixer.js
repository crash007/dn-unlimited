jQuery(document).ready(function () {

    $('.js-paywall').remove();
    $('.ad.ad').remove();
    $('.sponsored-teaser').remove();

    MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

    var observer = new MutationObserver(function (mutations, observer) {
        // fired when a mutation occurs
        $(mutations).each(function (i) {

            if (this.target.className == "pwOverlayContent") {
                console.log("Removing ad-blocker popup dialog.")
                $('#pwOverlay').remove();
            }

            if (this.target.className.includes("js-ad")) {
                console.log("removing ads.");
                $('.ad.ad').remove();
                $('.sponsored-teaser').remove();
            }
        });
    });

    observer.observe(document, {
        subtree: true,
        childList: true
    });

});
