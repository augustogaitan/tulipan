/* ==========================================================================
   . Detecciones
   ========================================================================== */

conditionizr.add('ie9', [], function () {
  var version = false;
  /*@cc_on
    if (/^9/.test(@_jscript_version) && /MSIE 9\.0(?!.*IEMobile)/i.test(navigator.userAgent))
    version = true
  @*/
  return version;
});

conditionizr.add('ie8', [], function () {
  var version = false;
  /*@cc_on
    if (@_jscript_version > 5.7 && !/^(9|10)/.test(@_jscript_version))
    version = true
  @*/
  return version;
});

/* ==========================================================================
   . Pruebas
   ========================================================================== */
conditionizr.config({
    assets: 'js/min/',
    tests: {
        'ie8': ['class'],
        'ie9': ['class']
    }
});
conditionizr.polyfill('js/min/placeholders.min.js', ['ie9','ie8']);

/* ==========================================================================
   . Recursos 
   ========================================================================== */

//@prepros-append min/jquery-1.10.2.min.js
//@prepros-append min/jquery.bxslider.min.js
/*@prepros-append min/jquery-ui-1.10.4.custom.min.js

@prepros-append min/jquery.backstretch.min.js
@prepros-append min/jquery.colorbox.min.js
@prepros-append min/jquery.customSelect.min.js
@prepros-append min/jquery.roundabout.min.js*/