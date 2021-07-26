/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */
define([
    'jquery',
    'matchMedia'
], function ($) {
    'use strict';

    var $screen_m = 768;

    var customJs = {
        yourFuntion: function() {
            // Your code here

            mediaCheck({
                media: '(min-width:'+ $screen_m +'px)',
                // Switch to Desktop Version
                entry: function () {
                    /* The function that toggles page elements from desktop to mobile mode is called here */
                },
                // Switch to Mobile Version
                exit: function () {
                    /* The function that toggles page elements from mobile to desktop mode is called here*/
                }
            });
        }
    };

    /* Document ready function */
    $(document).ready(function() {

    });


    /* Window load function */
    $(window).load(function() {

    });

    return;
});