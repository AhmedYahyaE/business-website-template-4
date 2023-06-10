/* global $, window, console */
$(function () {
    'use strict';


    // Navbar opacity change with scrolling (When scrolled, turn on the opacity, if at the top of the page, make it opaque)
    $(window).scroll(function () {
        var navbar = $('.navbar');
        // console.log(navbar.height());
        // console.log($(window).scrollTop());
        
        $(window).scrollTop() >= navbar.height() ? navbar.addClass('scrolled') : navbar.removeClass('scrolled');
    });



    // Tabs
    $('.tab-switch li').click(function () {
        $(this).addClass('selected').siblings().removeClass('selected'); // Adding 'selected' class to active links
        
        $('.tabs .tabs-content > div').hide(); // Hiding all divs
        $('.' + $(this).data('class')).show(); // Showing the matched <div>
        // console.log('.' + $(this).data('class'));
    });

    



    
    
    
    

     
});