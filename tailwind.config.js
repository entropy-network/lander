/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        stripes:
          'linear-gradient(135deg, #fff 0%, #fff 5%, transparent 5%, transparent 50%, #fff 50%, #fff 55%, transparent 55%, transparent 100%)',
      },
      backgroundSize: {
        stripes: '20px 20px',
      },
      keyframes: {
        stripes1: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '0 100vh' },
        },
        stripes2: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '0 200vh' },
        },
      },
      animation: {
        stripes1: 'stripes1 8s linear infinite',
        stripes2: 'stripes2 12s linear infinite',
      },
    },
  },
  plugins: [],
};
