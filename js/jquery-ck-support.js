/* from tquery-details.html: */

window.console || (window.console = { 'log': alert });
$(function() {

    // Add conditional classname based on support
    $('html').addClass($.fn.details.support ? 'details' : 'no-details');

    // Show a message based on support
    // $('body').prepend($.fn.details.support ? 'Native support detected; the plugin will only add ARIA annotations and fire custom open/close events.' : 'Emulation active; you are watching the plugin in action!');

/*  this alert appears at each visit to the page ...(not nice)...
    if($.fn.details.support) {
        //alert("Details supported.");
        ///alert("FYI:  Native support for HTML detail function detected.\nThe plugin will only add ARIA annotations\n and fire custom open/close events.");
        alert("Information:\n\nThis browser supports the HTML detail function.");
    }
    else {
        //alert("FYI:  HTML detail function emulation active.\n You are watching the plugin in action!");
        alert("Information:  No HTML detail function in this browser.\nEmulation active.");
    }
*/
    
    
    
    // Emulate <details> where necessary and enable open/close event handlers
    $('details').details();

    // Bind some example event handlers
    $('details').on({
        'open.details': function() {
            console.log('opened');
        },
        'close.details': function() {
            console.log('closed');
        }
    });

});
