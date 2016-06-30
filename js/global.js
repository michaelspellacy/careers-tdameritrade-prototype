/* Normalized hide address bar for iOS & Android (c) Scott Jehl, scottjehl.com MIT License */
(function(a){var b=a.document;if(!location.hash&&a.addEventListener){window.scrollTo(0,1);var c=1,d=function(){return a.pageYOffset||b.compatMode==="CSS1Compat"&&b.documentElement.scrollTop||b.body.scrollTop||0},e=setInterval(function(){if(b.body){clearInterval(e);c=d();a.scrollTo(0,c===1?0:1)}},15);a.addEventListener("load",function(){setTimeout(function(){if(d()<20){a.scrollTo(0,c===1?0:1)}},0)})}})(this);

(function(w){

	var sw = document.body.clientWidth, sh = document.body.clientHeight, breakpoint = 625, speed = 800, mobile = true;

	$(document).ready(function() {

		checkMobile();
		setNav();

	});

	$(w).resize(function(){ //Update dimensions on resize

		sw = document.body.clientWidth ;
		sh = document.body.clientHeight;

		checkMobile();

	});

	//Check if Mobile

	function checkMobile() {

		mobile = (sw > breakpoint)? false : true;

		if (!mobile) { //If Not Mobile

			$("#nav-primary ul").append($("#nav-utility ul .primary")); // Append each #nav-utility ul list item with class of "primary" to "#nav-primary ul"
			$("#nav-job-search a").addClass("button"); // Add "button" class
			$("#nav-utility ul").show(); // Make sure primary nav is always shown if not mobile
			$("#nav-utility h2").removeClass("active").addClass("wai");

			// NOTE: Navigation is not placed in same position across the site
			// TODO: Probably not good for usability - talk to IxD team

			$("body").removeClass("profiler-active"); // Remove "profiler-active" class from "body"

			addWindows(); // Add target to links with "external"

		} else { //Hide 

			$("#nav-utility ul").prepend($("#nav-primary .primary")); // Prepend each #nav-primary ul list item with class of "primary" class to "#nav-utility ul"
			$("#nav-job-search a").removeClass("button"); // Remove "button" class
			$("#nav-utility h2").removeClass("wai"); // Remove "wai" class

			if(!$("#nav-utility h2").hasClass("active")) { //TODO: Interfering with slideUp on mobile because resize fires too soon

				$("#nav-utility ul").hide(); // Make sure primary nav is always hidden in "mobile" (Making a big assumption here)

			}

		}

	}

	// New Window

	function addWindows(){

		$("a.external, #bookmark a").click(function(){

			this.target = "_blank";

		});

	}

	//Toggle navigation for small screens - Thanks Brad Frost! 

	function setNav(){

		var $menuButton = $("#nav-utility h2");
		var $menu = $("#nav-utility ul");

		$menuButton.click(function(){

			var $this = $(this);

			if($this.hasClass("active")) {

				//$menu.slideUp(800);
				$menu.hide();
				$this.removeClass("active");

			} else {

				$this.addClass("active");
				$menu.show();
				//$menu.slideDown(500);

			}

		});

	}

	// Nav Highlight

	$("#nav-" + $("body").attr("class")).addClass("selected"); 

	$("input#submit").click(function() { // Temporary Hijack of Profile Button

		location.href="user-generated-content.html";

	});

	$("#user-generated-content input#submit").attr('value', 'Refresh');

		// User Generated Content

	if ( $("#carousel").length){

		// Need to add overlay to image...

		$("li.video a img").after("<img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAACkUlEQVR42u3cQZLCMAxFwYji/lf+XICFiwSC5O79DDjlFzkwNZXkAN57uAQgEBAICAQEAgIBgYBAQCAgEEAgIBAQCAgEBAICAYGAQEAgIBBAICAQEAgIBAQCAgGBgEBAIIBAQCAgEBAICAQEAgIBgYBAQCCAQEAgIBAQCAgEBAICAYGAQACBgEBAICAQEAgIBAQCAgGBgEAAgYBAQCAgEBAI/KunS/BzOfGz5fIJRBDrv0swAtk+itXXEYtAhLHw2kIRiDCEIhBhCOV2PuadGUfH9ykQcXi/jljCcOQyQcRhHQJh7qYSiUBsJpEIxCayPoHYPNYpEJvGegUCAnE3tW6B2CTWLxCuUIdvrwXi7jkmFFNEILdPFARiejSeJqaIQDyfIJAud8tyXQSCaSIQhCIQx6tdQolA6DBREAiOXQJxvOoXSgSCUBCI5xMEYpogEIQiEBy7BIJpIhCEIhCEMo//7r4Hf7ouEIQhEIThGQRxmCAIQyAIwxELcZggCMME2Us1DSOukwmCiWGCIA6BOGZ1Ok45XjlimRgIRBg4Yg06RsR1MUEwNUwQU6TNA7jpIRBTA4F0uWumSRymh2cQEwMTxN3T+gVik1i3QEAg7qbWKxCbxjoFYvNYn0BEYl0CYehmEodAbCpxnOeb9M82V4RhgjBns4lDIDadOByxHLmEIRChCEMgQhGGQDyffDkWUQhk3MN8BCEQbPIRfMwLAgGBgEBAICAQEAgIBAQCAgEEAgIBgYBAQCAgEBAICAQEAgIBBAICAYGAQEAgIBAQCAgEBAIIBAQCAgGBgEBAICAQEAgIBAQCCAQEAgIBgYBAQCAgEBAICAQQCAgEBAICAYGAQEAgIBAQCAgEEAgIBK7yAk4YTcvf6XH7AAAAAElFTkSuQmCC\" alt=\"\"/>");

		if ($(window).width() > 650) {

			var scrollItems = 4;

		} else {

			var scrollItems = 2;

		}

		$("#carousel").elastislide({speed :  450, imageW: 200,  minItems: scrollItems,  margin: 3, onClick: null});

	}

	/* Locations */

	$("#location-fallback").before('<iframe id="map" src="//maps.google.com/maps?hl=en&amp;q=Ameritrade+Corporate+Office+%26+Headquarters&amp;ie=UTF8&amp;hq=Ameritrade+Corporate+Office+%26+Headquarters&amp;hnear=&amp;radius=15000&amp;ll=41.241702,-96.096124&amp;spn=0.047134,0.049023&amp;t=m&amp;output=embed"></iframe>');

	/* Video */

	$("#video-fallback").before('<iframe src="//www.youtube.com/embed/3eZBevXohCI?wmode=transparent" allowfullscreen="true"></iframe>');

	// FAQ Accordion

	if ( $("body#faq").length){

		$( "#faq-links" ).addClass("wai");
		$( "#faq-questions" ).accordion({autoHeight: false, navigation: true});
		$( "#faq-questions p.back-to-top" ).addClass("wai");

	}

	if ( !$("body#default").length && $("#profiler").length) {

		$("header").after("<p id=\"btn-update-profile\"><a>Update Profile</a>");

		$("#profiler input#submit").before("<a href=\"#\" id=\"close-profile\" class=\"btn-close\" role=\"button\">Close</a>");

		$("#btn-update-profile a").click(function(){

			$("body").addClass("profiler-active");

			return false;

		});

		$("#close-profile").click(function(){

			$("body").removeClass("profiler-active");

		});

	}

	// All Labels

	$("#profiler label").click(function(){}); // Null onclick to get focus working on iPhone

	// Smooth Anchor Scrolling

	$(document).ready(function() {

	function filterPath(string) {

		return string
		.replace(/^\//,'').replace(/(index|default).[a-zA-Z]{3,4}$/,'').replace(/\/$/,'');

	}

	var locationPath = filterPath(location.pathname);
	var scrollElem = scrollableElement('html', 'body');

	$("a[href*=#]").each(function() {

		var thisPath = filterPath(this.pathname) || locationPath;

		if (  locationPath == thisPath && (location.hostname == this.hostname || !this.hostname)&& this.hash.replace(/#/,'') ) {

			var $target = $(this.hash), target = this.hash;

			if (target) {

				var targetOffset = $target.offset().top;

				$(this).click(function(event) {

					event.preventDefault();
					$(scrollElem).animate({scrollTop: targetOffset}, 400, function() {

						location.hash = target;

					});

				});

			}

		}

	});

	// use the first element that is "scrollable"

	function scrollableElement(els) {

		for (var i = 0, argLength = arguments.length; i <argLength; i++) {

			var el = arguments[i],

			$scrollElement = $(el);

			if ($scrollElement.scrollTop()> 0) {

				return el;

			}else {

				$scrollElement.scrollTop(1);

				var isScrollable = $scrollElement.scrollTop()> 0;

				$scrollElement.scrollTop(0);

				if (isScrollable) {

					return el;

				}

			}

		}

		return [];

	}

	});

})(this);