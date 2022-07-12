const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Nunito', ...defaultTheme.fontFamily.sans],
            },
            backgroundImage: {
                'introSectionBg': "url('.././images/homePageBg.png')",
            },
            colors: {
                customOrange: {
                    DEFAULT: '#FF7A56',
                },
                customBlack: {
                    DEFAULT: '#262B35',
                },
            }
        },
        keyframes: {
            appear: {
                '0%': {opacity: '0'},
                '100%': {opacity: '100%',},
            },
            slide:{
                '0%': {top: '-400px'},
                '100%': {top: '-0'},
            },
            dissepear: {
                '0%': { opacity: '100%' },
                '100%': { opacity: '0' },
            }
        },
        animation: {
            appear: 'appear 0.5s ease-in-out',
            dissepear: 'dissepear 0.5s ease-in-out',
            slide: 'slide 0.6s ease-in-out'
        }
    },

    plugins: [require('@tailwindcss/forms')],
};
