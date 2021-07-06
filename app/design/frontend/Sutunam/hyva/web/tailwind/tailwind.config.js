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
            colors: {
                primary: {
                    lighter: colors.blue['300'],
                    "DEFAULT": colors.blue['800'],
                    darker: colors.blue['900'],
                },
                secondary: {
                    lighter: colors.blue['100'],
                    "DEFAULT": colors.blue['200'],
                    darker: colors.blue['300'],
                },
                background: {
                    lighter: colors.blue['100'],
                    "DEFAULT": colors.blue['200'],
                    darker: colors.blue['300'],
                },
                wood: {
                    light: 'rgba(38,34,28,.5)',
                    DEFAULT: '#26221c'
                },
                narvik: {
                    DEFAULT: '#f2f0eb'
                },
                westar: {
                    DEFAULT: '#d1ccc2'
                },
                concord: {
                    DEFAULT: '#7f796f'
                },
                wildsand: {
                    DEFAULT: '#e8e5e0'
                }
            },
            textColor: {
                orange: colors.orange,
                primary: {
                    lighter: colors.gray['700'],
                    "DEFAULT": colors.gray['800'],
                    darker: colors.gray['900'],
                },
                secondary: {
                    lighter: colors.gray['400'],
                    "DEFAULT": colors.gray['600'],
                    darker: colors.gray['800'],
                },
            },
            backgroundColor: {
                primary: {
                    lighter: colors.blue['600'],
                    "DEFAULT": colors.blue['700'],
                    darker: colors.blue['800'],
                },
                secondary: {
                    lighter: colors.blue['100'],
                    "DEFAULT": colors.blue['200'],
                    darker: colors.blue['300'],
                },
                container: {
                    lighter: '#ffffff',
                    "DEFAULT": '#fafafa',
                    darker: '#f5f5f5',
                }
            },
            borderColor: {
                primary: {
                    lighter: colors.blue['600'],
                    "DEFAULT": colors.blue['700'],
                    darker: colors.blue['800'],
                },
                secondary: {
                    lighter: colors.blue['100'],
                    "DEFAULT": colors.blue['200'],
                    darker: colors.blue['300'],
                },
                container: {
                    lighter: '#f5f5f5',
                    "DEFAULT": '#e7e7e7',
                    darker: '#b6b6b6',
                }
            },
            fontFamily: {
                'base': 'Roboto, sans-serif',
            },
            minWidth: {
                8: spacing["8"],
                20: spacing["20"],
                40: spacing["40"],
                48: spacing["48"],
            },
            maxWidth: {
                6: spacing["24"],
                '1/4': '25%',
                '1/2': '50%',
                '3/4': '75%',
            },
            minHeight: {
                '14': '3.5rem',
                '120': '30rem',
                'screen-25': '25vh',
                'screen-50': '50vh',
                'screen-75': '75vh',
            },
            maxHeight: {
                '0': '0',
                'screen-25': '25vh',
                'screen-50': '50vh',
                'screen-75': '75vh',
            },
            width: {
                '4.5': '1.125rem',
                '200': '50rem',
            },
            padding: {
                '15': '3.75rem'
            },
            inset: {
                '15': '3.75rem',
                '30': '7.5rem',
                '90': '22.5rem',
            },
            transitionDelay: {
                '0': '0ms',
            }
        },
    },
    variants: {
        extend: {
            borderWidth: ['last', 'hover', 'focus'],
            margin: ['last'],
            opacity: ['disabled'],
            backgroundColor: ['even', 'odd']
        }
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
    ],
    purge: {
        // Examples for excluding patterns from purge
        // options: {
        //     safelist: [/^bg-opacity-/, /^-?[mp][trblxy]?-[4,8]$/, /^text-shadow/],
        // },
        content: [
            '../../**/*.phtml',
            './src/**/*.phtml',
            // parent theme in Vendor
            '../../../../../../../vendor/hyva-themes/magento2-default-theme/**/*.phtml'
        ]
    }
}
