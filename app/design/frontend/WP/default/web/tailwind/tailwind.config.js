const { spacing } = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
    theme: {
        extend: {
            screens: {
                'sm': '640px',
                // => @media (min-width: 640px) { ... }
                'md': '768px',
                // => @media (min-width: 768px) { ... }
                'lg': '1024px',
                // => @media (min-width: 1024px) { ... }
                'xl': '1280px',
                // => @media (min-width: 1280px) { ... }
                '2xl': '1536px',
                // => @media (min-width: 1536px) { ... }
            },
            backgroundImage: {
                'header-wrapper': 'url(../images/bg-wrapper.png)'
            },
            borderRadius: {
                '4xl': '2rem'
            },
            colors: {
                'carnaby-tan': '#583622',
                'carrot-orange': '#ee7016',
                'dune': '#4a4948',
                'harley-orange': '#c04916',
                'sambuca': '#3a2d25',
                'sauvignon': '#f8f3ee',
                'sorrell-brown': '#997b68',
                'spicy-mix': '#84634f'                                                                                                            
            },
            fontFamily: {
                'base': ['Roboto', 'sans-serif'],
                'merri': ['Merriweather', 'serif']
            },
            fontSize: {
                'full': '100%'
            },
            height: {
                '13': '52px'
            },
            inset: {
                '18': '4.5rem'
            },
            maxWidth: {
                'container': '90rem'
            },
            width: {
                '45': '180px'
            }
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography')
    ],
    content: [
        // this theme's phtml or js files
        '../../**/*.{phtml, js}'
    ]
}
