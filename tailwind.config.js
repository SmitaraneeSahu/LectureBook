// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}","./index.html"],
  darkMode: "class",
  theme: {
    extend: {
       colors: {
        primary: {"50":"#f0fdf4","100":"#dcfce7","200":"#bbf7d0","300":"#86efac","400":"#4ade80","500":"#22c55e","600":"#16a34a","700":"#15803d","800":"#166534","900":"#14532d","950":"#052e16"}
      },
      borderColor: {
          glow: 'var(--glow-color)',
        },
        backgroundColor: {
          glow: 'var(--glow-color)',
        },
        boxShadow: {
          glow: '0 0 30px var(--glow-color), 0 0 60px var(--glow-color), inset 0 0 20px var(--glow-color)',
        },  
      keyframes: {
              fadeIn: {
                '0%': { opacity: '0' },
                '100%': { opacity: '1' },
              },
            },
            animation: {
              fadeIn: 'fadeIn 0.5s ease-in-out',
            },

          },
        },
        
plugins: [],

}

