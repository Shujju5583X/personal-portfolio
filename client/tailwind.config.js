/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                hacker: {
                    bg: '#121212',
                    text: '#e0e0e0',
                    accent: '#ffffff',
                    muted: '#6b7280',
                }
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
                mono: ['"Fira Code"', '"Courier New"', 'Courier', 'monospace'],
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
                    '50%': { borderColor: '#10b981' },
                },
            }
        },
    },
    plugins: [],
}
