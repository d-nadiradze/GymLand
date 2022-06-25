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
    },

    plugins: [require('@tailwindcss/forms')],
};
