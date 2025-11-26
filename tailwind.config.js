/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  safelist: [
    {
      pattern: /(w|h)-\[.+\]/,
      variants: ['sm', 'md', 'lg', 'xl'],
    },
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Noto Sans TC', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
