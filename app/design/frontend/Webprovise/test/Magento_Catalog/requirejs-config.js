/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    config: {
        mixins: {
            'Magento_Catalog/js/product/list/listing': {
                'Magento_Catalog/js/product/list/listing-mixin': true
            }
        }
    },

    paths: {
        'slick': 'js/vendor/slick.min'
    },

    shim: {
        'slick': {
            deps: ['jquery'],
            exports: 'jQuery.fn.slick'
        }
    }
};