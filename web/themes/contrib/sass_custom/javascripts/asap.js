  (function ($) {
    // Contact Form Behavior
    //
    // Add a correct url to the register for link href.
    Drupal.behaviors.hrefChange = {
      attach: function(context, settings) {
        $( 'a[href*="/node/"]' ).attr("href", function(i, origValue){
          return origValue + "/register/pickup_service_form"});
      }
    };
  })(jQuery);