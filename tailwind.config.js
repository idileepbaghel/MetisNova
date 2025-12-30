/** @type {import('tailwindcss').Config} */
export default {
content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
theme: {
extend: {
colors: {
primary: '#0B0D12', // almost black
secondary: '#5B5FFF', // Railsware‑like blue
muted: '#6B7280'
},
fontFamily: {
sans: ['Inter', 'system-ui', 'sans-serif']
}
},
},
plugins: [],
}