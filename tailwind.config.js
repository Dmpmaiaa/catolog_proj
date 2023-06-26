/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "prime-violet" : "#5e0dff",
        "prime-light-violet": "#939BF4",
        "prime-dark-blue": "#19202D",
        "prime-midnight": "#121721",
        "scnd-white": "#FFFFFF",
        "scnd-light-gray": "#F4F6F8",
        "scnd-btn" : "#C9C9C9",
        "scnd-gray" : "#9DAEC2",
        "scnd-dark-gray": "#6E8098"
      },
      backgroundImage: {
        "mobile-banner": "url('/images/nav-mobile.svg')",
        "desktop-banner": "url('/images/nav-desktop.svg')"
      },
      container: {
        center: true,
      },
    },
  },
  plugins: [],
}
