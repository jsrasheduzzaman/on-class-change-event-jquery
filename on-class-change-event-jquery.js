(function(){
    var addClassMethod = jQuery.fn.addClass;
    var removeClassMethod = jQuery.fn.removeClass;
    jQuery.fn.addClass = function(){
        var result = addClassMethod.apply( this, arguments );
        jQuery(this).trigger('classChange');
        return result;
    }
    jQuery.fn.removeClass = function(){
        var result = removeClassMethod.apply( this, arguments );
        jQuery(this).trigger('classChange');
        return result;
    }
})();



// Example
jQuery('SELECTOR').bind('classChange', function(){
    console.log('Class Changed');
});