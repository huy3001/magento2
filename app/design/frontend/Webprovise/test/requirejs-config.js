/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    // When load 'requirejs' always load the following files also
    deps: [
        "js/custom"
    ],

    // Paths defines associations from library name (used to include the library,
    // for example when using "define") and the library file path.
    paths: {
        
    },

    // Shim: when you're loading your dependencies, requirejs loads them all
    // concurrently. You need to set up a shim to tell requirejs that the library
    // (e.g. a jQuery plugin) depends on another already being loaded (e.g. depends
    // from jQuery).
    // Exports: if the library it's not AMD aware, you need to tell requirejs what
    // to look to know the script loaded correctly. You can do this with an
    // "exports" entry in your shim. The value must be a variable defined within
    // the library.
    shim: {
        
    }
};