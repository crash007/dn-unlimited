jQuery(document).ready(function(){
	
	$('.js-paywall').remove();
	$('.ad.ad').remove();
	$('.sponsored-teaser').remove();

	MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

	var observer = new MutationObserver(function(mutations, observer) {
		// fired when a mutation occurs
		var classname = mutations[0].target.className;

		if(classname.includes("js-ad")){
			console.log("removing ads.");
			$('.ad.ad').remove();
			$('.sponsored-teaser').remove();
		}
		
	});

	
	observer.observe(document, {
	  subtree: true,
	  childList: true  
	});

});
