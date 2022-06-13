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
            backgroundImage: {
                'map-footer': 'url(../images/map-footer.png)',
                'focus-pointer': 'url(../images/icon-pointer.png)',
            },
            backgroundPosition: {
                'map-right-center': '95% 50%',
                'map-left-top': '10px 15px',
            },
            backgroundSize: {
                'full-auto': '100% auto',
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
            borderRadius: {
                '4xl': '2rem',
            },
            fontFamily: {
                'base': 'Roboto, sans-serif',
            },
            fontSize: {
                '2xs': '0.8125rem',
                '2lg': '2rem',
            },
            minWidth: {
                8: spacing["8"],
                20: spacing["20"],
                40: spacing["40"],
                48: spacing["48"],
            },
            maxWidth: {
                24: spacing["24"],
                64: spacing["64"],
                90: spacing["90"],
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
                '3/10': '30%',
                '7/10': '70%',
                '4.5': '1.125rem',
                '12.5': '3.125rem',
                '15': '3.75rem',
                '17.5': '4.375rem',
                '90': '22.5rem',
                '110': '27.5rem',
                '200': '50rem',
                'full-80': 'calc(100% - 20rem)',
                'full-90': 'calc(100% - 22.5rem)',
                'full-110': 'calc(100% - 27.5rem)',
            },
            height: {
                '15': '3.75rem',
                '25.5': '6.375rem',
                '50': '12.5rem',
            },
            margin: {
                '-7.5': '-1.875rem',
                '7.5': '1.875rem',
                '15': '3.75rem',
            },
            padding: {
                '12.5': '3.125rem',
                '15': '3.75rem',
            },
            inset: {
                '-7.5': '-1.875rem',
                '-13': '-3.125rem',
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
            // this theme's phtml files
            '../../**/*.phtml',
            './src/**/*.phtml',
            // parent theme in Vendor
            '../../../../../../../vendor/hyva-themes/magento2-default-theme/**/*.phtml'
        ]
    }
}
