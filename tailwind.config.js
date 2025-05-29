const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        // ... your paths
    ],
    // ...
    theme: {
        extend: {
            fontFamily: {
                // "font-family": ["Outfit", "neulis-sans", "sans-serif"],
                outfit: ['var(--font-outfit)', ...fontFamily.sans], // Assuming Outfit is a sans-serif font
            },
        },
    },
    // ...
};