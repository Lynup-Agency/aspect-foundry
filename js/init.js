jQuery(document).ready(function () {
/* dropdown toggle fix */

"use strict";

/* ----------------- */
$(".disabled").click(function(event) {
  event.preventDefault();
});

/* ----------------- */


/* SlidesJS */
/* ----------------- */

$(function(){
      $(".banner").slidesjs({
		width: 1200,
		height: 735,
		navigation: {
      active: false,
        // [boolean] Generates next and previous buttons.
        // You can set to false and use your own buttons.
        // User defined buttons must have the following:
        // previous button: class="slidesjs-previous slidesjs-navigation"
        // next button: class="slidesjs-next slidesjs-navigation"
      effect: "fade"
        // [string] Can be either "slide" or "fade".
    },
		pagination: {
      	active: true,
        // [boolean] Create pagination items.
        // You cannot use your own pagination. Sorry.
      	effect: "fade"
        // [string] Can be either "slide" or "fade".
    },
	effect: {
      slide: {
        // Slide effect settings.
        speed: 200
          // [number] Speed in milliseconds of the slide animation.
      },
      fade: {
        speed: 500,
          // [number] Speed in milliseconds of the fade animation.
        crossfade: true
          // [boolean] Cross-fade the transition.
      }
    }
      });
    });
/* ----------------- */


/* Mobile Navigation */
/* ----------------- */

jQuery('.SL_swap').meanmenu();

/* ----------------- */

/*  Moderizr Universal Placeholder Text */
/* ----------------- */

jQuery(function() {
        // check placeholder browser support
        if (!Modernizr.input.placeholder) {

            // set placeholder values
            jQuery(this).find('[placeholder]').each(function() {
                if (jQuery(this).val() == '') { // if field is empty
                    jQuery(this).val( jQuery(this).attr('placeholder') );
                }
            });

            // focus and blur of placeholders
            jQuery('[placeholder]').focus(function() {
                if (jQuery(this).val() == jQuery(this).attr('placeholder')) {
                    jQuery(this).val('');
                    jQuery(this).removeClass('placeholder');
                }
            }).blur(function() {
                if (jQuery(this).val() == '' || jQuery(this).val() == jQuery(this).attr('placeholder')) {
                    jQuery(this).val(jQuery(this).attr('placeholder'));
                    jQuery(this).addClass('placeholder');
                }
            });

            // remove placeholders on submit
            jQuery('[placeholder]').closest('form').submit(function() {
                jQuery(this).find('[placeholder]').each(function() {
                    if (jQuery(this).val() == jQuery(this).attr('placeholder')) {
                        jQuery(this).val('');
                    }
                })
            });

        }
    });

/* ----------------- */

/* WayPoints */
/* ----------------- */

$('.home-block').waypoint(function(direction) {
  if (direction === "down") {
    var $links = $("ul.main-navigation a[href=#"+ this.id+ "], ul.subNavigation a[href=#"+ this.id+ "]");
    $(".activeMenu").removeClass("activeMenu");
    $links.addClass("activeMenu");
  }
  }, {
    offset: 56
});
$('.home-block').waypoint(function(direction){
  if (direction === "up") {
    var $links = $("ul.main-navigation a[href=#"+ this.id+ "], ul.subNavigation a[href=#"+ this.id+ "]");
    $(".activeMenu").removeClass("activeMenu");
    $links.addClass("activeMenu");
  }
}, {
    offset: -55
});
/*Fixes sticky highlight bug when scrolling to top of page remove all classes*/
$(window).scroll(function () {
	if ($(window).scrollTop() === 0) {
		$("#wrap-header").removeClass( "wrap-header-shrink" );
		$('ul.main-navigation a.activeMenu, ul.subNavigation a.activeMenu').removeClass('activeMenu');
	}
});


$('#features').waypoint(function(direction) {
  if (direction === "down") {
    $("#wrap-header").addClass( "wrap-header-shrink" );
  }
  }, {
    offset: 77
});

$('#features').waypoint(function(direction) {
  if (direction === "up") {
    $("#wrap-header").removeClass( "wrap-header-shrink" );
  }
  }, {
    offset: 56
});

$( ".subNavigation a" ).click(function() {
  $.waypoints('refresh');
});

/* ----------------- */

/* Scrollto */
/* ----------------- */

jQuery(function() {
	$('.subNavScroll, .SL_swap').localScroll({
		   hash:true,
		   axis:'y',
		   offset:-54
		});
	});

/* ----------------- */



/* Scrolling Thumbnails */
/* ----------------- */
$("#thumbSlider").owlCarousel({
	items : 8,
    itemsDesktop : [1299,5],
    itemsDesktopSmall : [980,4],
    itemsTablet: [768,3],
    itemsTabletSmall: false,
    itemsMobile : [479,2],
    singleItem : false,
	navigation: false,
	pagination: true,
	scrollPerPage: true,
	lazyLoad: true
});

$("#thumbSliderMini").owlCarousel({
	items : 3,
    itemsDesktop : [1299,3],
    itemsDesktopSmall : [980,2],
    itemsTablet: [768,3],
    itemsTabletSmall: false,
    itemsMobile : [479,2],
    singleItem : false,
	navigation: false,
	pagination: true,
	scrollPerPage: true,
	lazyLoad: true
});

/* ----------------- */


/* Gallery Popups */
/* ----------------- */

$('.gallery-item').each(function() { // the containers for all your galleries
    $(this).magnificPopup({
		delegate: 'a', // the selector for gallery item
		type: 'image',	
		closeBtnInside:true,
		fixedContentPos: true,
		fixedBgPos: true,
        gallery: {
			enabled:true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
        },
		callbacks: {
		beforeOpen:
		function() {
			if ( navigator.userAgent.indexOf('iPad') == -1 ) {
				$('#wrap-header').css({
				"padding-right":"15px",
				//"z-index":"1023" 
			});
			}
		},
		beforeClose: 
		function() {
			if ( navigator.userAgent.indexOf('iPad') == -1 ) {
				$('#wrap-header').css({
				"padding-right":"0px",
				//"z-index":"9999" 
			});
			}
		}
	  }//end callbacks
    });
}); 

/* ----------------- */


/* Client Testimonial Rotator */
/* ----------------- */

	$( function() {
		$( '#cbp-qtrotator' ).cbpQTRotator(
		{
			// default transition speed (ms)
			speed : 300,
			// default transition easing
			easing : 'ease',
			// rotator interval (ms)
			interval : 4000
		}
		);
	});
/* ----------------- */

/**
 * jQuery Unveil
 * A very lightweight jQuery plugin to lazy load images
 * http://luis-almeida.github.com/unveil
 *
 * Licensed under the MIT license.
 * Copyright 2013 Luís Almeida
 * https://github.com/luis-almeida
 */

;(function($){$.fn.unveil=function(threshold,callback){var $w=$(window),th=threshold||0,retina=window.devicePixelRatio>1,attrib=retina?"data-src-retina":"data-src",images=this,loaded;this.one("unveil",function(){var source=this.getAttribute(attrib);source=source||this.getAttribute("data-src");if(source){this.setAttribute("src",source);if(typeof callback==="function")callback.call(this);}});function unveil(){var inview=images.filter(function(){var $e=$(this),wt=$w.scrollTop(),wb=wt+$w.height(),et=$e.offset().top,eb=et+$e.height();return eb>=wt-th&&et<=wb+th;});loaded=inview.trigger("unveil");images=images.not(loaded);}$w.scroll(unveil);$w.resize(unveil);unveil();return this;};})(window.jQuery||window.Zepto);
/* ----------------- */

// Sticky Plugin v1.0.0 for jQuery
// =============
// Author: Anthony Garand
// Improvements by German M. Bravo (Kronuz) and Ruud Kamphuis (ruudk)
// Improvements by Leonardo C. Daronco (daronco)
// Created: 2/14/2011
// Date: 2/12/2012
// Website: http://labs.anthonygarand.com/sticky
// Description: Makes an element on the page stick on the screen as you scroll
//       It will only set the 'top' and 'position' of your element, you
//       might need to adjust the width in some cases.

(function($) {
  var defaults = {
      topSpacing: 0,
      bottomSpacing: 0,
      className: 'is-sticky',
      wrapperClassName: 'sticky-wrapper',
      center: false,
      getWidthFrom: ''
    },
    $window = $(window),
    $document = $(document),
    sticked = [],
    windowHeight = $window.height(),
    scroller = function() {
      var scrollTop = $window.scrollTop(),
        documentHeight = $document.height(),
        dwh = documentHeight - windowHeight,
        extra = (scrollTop > dwh) ? dwh - scrollTop : 0;

      for (var i = 0; i < sticked.length; i++) {
        var s = sticked[i],
          elementTop = s.stickyWrapper.offset().top,
          etse = elementTop - s.topSpacing - extra;

        if (scrollTop <= etse) {
          if (s.currentTop !== null) {
            s.stickyElement
              .css('position', '')
              .css('top', '');
            s.stickyElement.parent().removeClass(s.className);
            s.currentTop = null;
          }
        }
        else {
          var newTop = documentHeight - s.stickyElement.outerHeight()
            - s.topSpacing - s.bottomSpacing - scrollTop - extra;
          if (newTop < 0) {
            newTop = newTop + s.topSpacing;
          } else {
            newTop = s.topSpacing;
          }
          if (s.currentTop != newTop) {
            s.stickyElement
              .css('position', 'fixed')
              .css('top', newTop);

            if (typeof s.getWidthFrom !== 'undefined') {
              s.stickyElement.css('width', $(s.getWidthFrom).width());
            }

            s.stickyElement.parent().addClass(s.className);
            s.currentTop = newTop;
          }
        }
      }
    },
    resizer = function() {
      windowHeight = $window.height();
    },
    methods = {
      init: function(options) {
        var o = $.extend(defaults, options);
        return this.each(function() {
          var stickyElement = $(this);

          var stickyId = stickyElement.attr('id');
          var wrapper = $('<div></div>')
            .attr('id', stickyId + '-sticky-wrapper')
            .addClass(o.wrapperClassName);
          stickyElement.wrapAll(wrapper);

          if (o.center) {
            stickyElement.parent().css({width:stickyElement.outerWidth(),marginLeft:"auto",marginRight:"auto"});
          }

          if (stickyElement.css("float") == "right") {
            stickyElement.css({"float":"none"}).parent().css({"float":"right"});
          }

          var stickyWrapper = stickyElement.parent();
          stickyWrapper.css('height', stickyElement.outerHeight());
          sticked.push({
            topSpacing: o.topSpacing,
            bottomSpacing: o.bottomSpacing,
            stickyElement: stickyElement,
            currentTop: null,
            stickyWrapper: stickyWrapper,
            className: o.className,
            getWidthFrom: o.getWidthFrom
          });
        });
      },
      update: scroller
    };

  // should be more efficient than using $window.scroll(scroller) and $window.resize(resizer):
  if (window.addEventListener) {
    window.addEventListener('scroll', scroller, false);
    window.addEventListener('resize', resizer, false);
  } else if (window.attachEvent) {
    window.attachEvent('onscroll', scroller);
    window.attachEvent('onresize', resizer);
  }

  $.fn.sticky = function(method) {
    if (methods[method]) {
      return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
    } else if (typeof method === 'object' || !method ) {
      return methods.init.apply( this, arguments );
    } else {
      $.error('Method ' + method + ' does not exist on jQuery.sticky');
    }
  };
  $(function() {
    setTimeout(scroller, 0);
  });
})(jQuery);
/* ----------------- */


/*!
 * classie - class helper functions
 * from bonzo https://github.com/ded/bonzo
 * 
 * classie.has( elem, 'my-class' ) -> true/false
 * classie.add( elem, 'my-new-class' )
 * classie.remove( elem, 'my-unwanted-class' )
 * classie.toggle( elem, 'my-class' )
 */

/*jshint browser: true, strict: true, undef: true */
/*global define: false */

/*( function( window ) {

'use strict';

// class helper functions from bonzo https://github.com/ded/bonzo

function classReg( className ) {
  return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
}

// classList support for class management
// altho to be fair, the api sucks because it won't accept multiple classes at once
var hasClass, addClass, removeClass;

if ( 'classList' in document.documentElement ) {
  hasClass = function( elem, c ) {
    return elem.classList.contains( c );
  };
  addClass = function( elem, c ) {
    elem.classList.add( c );
  };
  removeClass = function( elem, c ) {
    elem.classList.remove( c );
  };
}
else {
  hasClass = function( elem, c ) {
    return classReg( c ).test( elem.className );
  };
  addClass = function( elem, c ) {
    if ( !hasClass( elem, c ) ) {
      elem.className = elem.className + ' ' + c;
    }
  };
  removeClass = function( elem, c ) {
    elem.className = elem.className.replace( classReg( c ), ' ' );
  };
}

function toggleClass( elem, c ) {
  var fn = hasClass( elem, c ) ? removeClass : addClass;
  fn( elem, c );
}

var classie = {
  // full names
  hasClass: hasClass,
  addClass: addClass,
  removeClass: removeClass,
  toggleClass: toggleClass,
  // short names
  has: hasClass,
  add: addClass,
  remove: removeClass,
  toggle: toggleClass
};

// transport
if ( typeof define === 'function' && define.amd ) {
  // AMD
  define( classie );
} else {
  // browser global
  window.classie = classie;
}

})( window );*/
/* ----------------- */

/**
 * AnimatedHeader.min.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2013, Codrops
 * http://www.codrops.com
 */

/*var AnimatedHeader = (function() {
 
    var docElem = document.documentElement,
        header = document.querySelector( '#wrap-header' ),
        didScroll = false,
        changeHeaderOn = 600;
 
    function init() {
        window.addEventListener( 'scroll', function( event ) {
            if( !didScroll ) {
                didScroll = true;
                setTimeout( scrollPage, 0 );
            }
        }, false );
    }
 
    function scrollPage() {
        var sy = scrollY();
        if ( sy >= changeHeaderOn ) {
            classie.add( header, 'wrap-header-shrink' );
        }
        else {
            classie.remove( header, 'wrap-header-shrink' );
        }
        didScroll = false;
    }
 
    function scrollY() {
        return window.pageYOffset || docElem.scrollTop;
    }
 
    init();
 
})();
*/
/* ----------------- */

/**
 * jquery.cbpQTRotator.min.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2013, Codrops
 * http://www.codrops.com
 */
(function(c,b,e){var d=b.Modernizr;c.CBPQTRotator=function(f,g){this.$el=c(g);this._init(f)};c.CBPQTRotator.defaults={speed:700,easing:"ease",interval:8000};c.CBPQTRotator.prototype={_init:function(f){this.options=c.extend(true,{},c.CBPQTRotator.defaults,f);this._config();this.$items.eq(this.current).addClass("cbp-qtcurrent");if(this.support){this._setTransition()}this._startRotator()},_config:function(){this.$items=this.$el.children("div.cbp-qtcontent");this.itemsCount=this.$items.length;this.current=0;this.support=d.csstransitions;if(this.support){this.$progress=c('').appendTo(this.$el)}},_setTransition:function(){setTimeout(c.proxy(function(){this.$items.css("transition","opacity "+this.options.speed+"ms "+this.options.easing)},this),25)},_startRotator:function(){if(this.support){this._startProgress()}setTimeout(c.proxy(function(){if(this.support){this._resetProgress()}this._next();this._startRotator()},this),this.options.interval)},_next:function(){this.$items.eq(this.current).removeClass("cbp-qtcurrent");this.current=this.current<this.itemsCount-1?this.current+1:0;this.$items.eq(this.current).addClass("cbp-qtcurrent")},_startProgress:function(){setTimeout(c.proxy(function(){this.$progress.css({transition:"width "+this.options.interval+"ms linear",width:"100%"})},this),25)},_resetProgress:function(){this.$progress.css({transition:"none",width:"0%"})},destroy:function(){if(this.support){this.$items.css("transition","none");this.$progress.remove()}this.$items.removeClass("cbp-qtcurrent").css({position:"relative","z-index":100,"pointer-events":"auto",opacity:1})}};var a=function(f){if(b.console){b.console.error(f)}};c.fn.cbpQTRotator=function(g){if(typeof g==="string"){var f=Array.prototype.slice.call(arguments,1);this.each(function(){var h=c.data(this,"cbpQTRotator");if(!h){a("cannot call methods on cbpQTRotator prior to initialization; attempted to call method '"+g+"'");return}if(!c.isFunction(h[g])||g.charAt(0)==="_"){a("no such method '"+g+"' for cbpQTRotator instance");return}h[g].apply(h,f)})}else{this.each(function(){var h=c.data(this,"cbpQTRotator");if(h){h._init()}else{h=c.data(this,"cbpQTRotator",new c.CBPQTRotator(g,this))}})}return this}})(jQuery,window);


/* ----------------- */

 });