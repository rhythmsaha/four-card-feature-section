module.exports = {
    mode: "jit",
    purge: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                "primary-red": "hsl(0, 78%, 62%)",
                "primary-cyan": "hsl(180, 62%, 55%)",
                "primary-orange": "hsl(34, 97%, 64%)",
                "primary-blue": "hsl(212, 86%, 64%)",

                "very-dark-blue": "hsl(234, 12%, 34%)",
                "grayish-blue": "hsl(229, 6%, 66%)",
                "very-light-gray": "hsl(0, 0%, 98%)",
            },

            fontFamily: {
                poppins: ["Poppins", "sans-serif"],
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
