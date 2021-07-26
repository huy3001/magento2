/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

define([
    'jquery',
    'Magento_Ui/js/grid/listing',
    'slick'
], function ($, Listing) {
    'use strict';

    return function (Listing) {
        return Listing.extend({
            /** @inheritdoc */
            initialize: function () {
                this._super();
            },
    
            /**
             * Init recently viewed slider.
             */
             recentlyViewedSlider: function () {
                var recentlyProducts = $('.block-viewed-products-grid .product-items');
    
                if (recentlyProducts.length) {
                    // Set timeout to make sure product items are loaded
                    setTimeout(function () {
                        recentlyProducts.slick({
                            infinite: false,
                            slidesToShow: 5,
                            slidesToScroll: 1,
                            swipe: false,
                            responsive: [
                                {
                                    breakpoint: 1440,
                                    settings: {
                                        slidesToShow: 4,
                                    }
                                },
                                {
                                    breakpoint: 1024,
                                    settings: {
                                        slidesToShow: 3,
                                        swipe: true
                                    }
                                },
                                {
                                    breakpoint: 768,
                                    settings: {
                                        slidesToShow: 2,
                                        swipe: true
                                    }
                                }
                            ]
                        });
                    }, 1000)
                }
            }
        });
    }
});
