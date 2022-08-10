$(document).ready(function() {

    /**
     * Switch class
     */
    $('#button-switch').on( 'click', function() {
        $('.newClass').switchClass( 'newClass', 'anotherNewClass', 1000 );
        $('.anotherNewClass').switchClass( 'anotherNewClass', 'newClass', 1000 );
    });


    /**
     * Toggle
     */
    function runEffect() {
        // get effect type from
        var selectedEffect = $('#effectTypes').val();

        // Most effect types need no options passed by default
        var options = {};
        // some effects have required parameters
        if ( selectedEffect === 'scale') {
            options = { 
                percent: 50 
            };
        } else if ( selectedEffect === 'size') {
            options = { 
                to: { 
                    width: 200,
                    height: 60 
                } 
            };
        }

        // Run the effect
        $('#effect-toggle').toggle( selectedEffect, options, 1000 );
    };
   
    // Set effect from select menu value
    $('#button-toggle').on('click', function() {
        runEffect();
    });
    
});