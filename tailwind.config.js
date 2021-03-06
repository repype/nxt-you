const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Hero', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        '10xl': '14rem',
      },
      colors: {
        blue: { light: '#3966e0', DEFAULT: '#0b60ac', dark: '#2D5070' },
      },
      zIndex: {
        '-10': '-10',
        60: '60',
        70: '70',
        80: '80',
        90: '90',
        100: '100',
      },
      height: {
        12: '3rem',
        '4-screen': '400vh',
      },
      boxShadow: {
        highlight: `0 0 30px rgba(57, 102, 224, 0.8)`,
      },
      transitionProperty: {
        size: 'width, height',
      },
      transitionTimingFunction: {
        'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
      },
      transitionDuration: {
        0: '0ms',
        2000: '2000ms',
      },
      delay: {
        1500: '1500ms',
      },
      animation: {
        slide: 'slide 1s ease-in-out infinite',
        'ping-slow': 'ping 2.4s cubic-bezier(0.215, 0.61, 0.355, 1) infinite',
        'gradient-x': 'gradient-x 10s ease-in-out infinite',
        'gradient-y': 'gradient-y 10s ease-in-out infinite',
        'gradient-xy': 'gradient-xy 10s ease-in-out infinite',
      },
      keyframes: {
        slide: {
          '0%': { left: '-1px', transform: 'translateX(-100%)' },
          '100%': { left: 'calc(100% + 1px)', transform: 'translateX(0)' },
        },
        'gradient-y': {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'center top',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'center center',
          },
        },
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
        'gradient-xy': {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
      },
    },
  },
  purge: {
    content: [
      './slices/**/*.vue',
      './node_modules/swiper/**/*.js',
      './node_modules/vue-awesome-swiper/**/*.js',
      './node_modules/vue-awesome-swiper/**/*.ts',
      './components/**/**.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
      './node_modules/swiper/js/swiper.esm.js',
    ],
    options: {
      whitelistPatterns: [/^swiper/],
      whitelistPatternsChildren: [/^swiper/],
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
  ],
}
