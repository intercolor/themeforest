var YIT_Browser={isTablet:function(){var b=jQuery("body").hasClass("responsive")||jQuery("body").hasClass("iPad")||jQuery("body").hasClass("Blakberrytablet")||jQuery("body").hasClass("isAndroidtablet")||jQuery("body").hasClass("isPalm"),a=1024>=jQuery(window).width()&&768<=jQuery(window).width();return b&&a},isPhone:function(){var b=jQuery("body").hasClass("responsive")||jQuery("body").hasClass("isIphone")||jQuery("body").hasClass("isWindowsphone")||jQuery("body").hasClass("isAndroid")||jQuery("body").hasClass("isBlackberry"),
    a=480>=jQuery(window).width()&&320<=jQuery(window).width();return b&&a},isViewportBetween:function(b,a){"undefinied"==a&&(a=0);return a?jQuery(window).width()<b&&jQuery(window).width()>a:jQuery(window).width()<b},isLowResMonitor:function(){return 1200>jQuery(window).width()},isMobile:function(){return this.isTablet()||this.isPhone()},isIE:function(){return jQuery.browser.msie},isIE8:function(){return this.isIE()&&"8.0"==jQuery.browser.version},isIE9:function(){return this.isIE()&&"9.0"==jQuery.browser.version},
    isIE10:function(){return this.isIE()&&"10.0"==jQuery.browser.version}};

