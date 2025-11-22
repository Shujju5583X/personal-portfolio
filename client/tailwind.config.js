/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                matrix: {
                    black: '#0d0d0d',
                    green: '#00ff41',
                    darkGreen: '#003b00',
                }
            },
            fontFamily: {
                mono: ['"Courier New"', 'Courier', 'monospace'],
                vt323: ['"VT323"', 'monospace'],
            },
            animation: {
                'typing': 'typing 3.5s steps(40, end), blink-caret .75s step-end infinite',
            },
            keyframes: {
                typing: {
                    from: { width: '0' },
                    to: { width: '100%' },
                },
                'blink-caret': {
                    'from, to': { borderColor: 'transparent' },
                    '50%': { borderColor: '#00ff41' },
                },
            }
        },
    },
    plugins: [],
}
