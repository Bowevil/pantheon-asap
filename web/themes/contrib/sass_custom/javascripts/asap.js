  (function ($) {
    // Contact Form Behavior
    //
    // Moves the Webform: Contact the IRS block from the Postscript First region
    // to outside the page container, add the form close button, and handles the
    // slideout animation using jQuery.animate().
    Drupal.behaviors.hrefChange = {
      attach: function(context, settings) {
        $( 'a[href*="/node/"]' ).attr("href", function(i, origValue){
          return origValue + "/register/pickup_service_form"});
      }
    };
  })(jQuery);