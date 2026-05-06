/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html','./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg:      '#0B0B0F',
        surface: '#141418',
        surface2:'#1C1C22',
        gold:    '#C9A84C',
        'gold-dim':'rgba(201,168,76,0.12)',
        'gold-border':'rgba(201,168,76,0.25)',
        line:    'rgba(255,255,255,0.06)',
        'line-h':'rgba(255,255,255,0.1)',
        muted:   '#6B6880',
        main:    '#F4F2FF',
      },
      fontFamily: {
        sans:    ['Inter','DM Sans','system-ui','sans-serif'],
        display: ['"DM Serif Display"','Georgia','serif'],
        mono:    ['"JetBrains Mono"','monospace'],
      },
      animation: {
        'fade-up':'fadeUp .6s cubic-bezier(.23,1,.32,1) forwards',
        'fade-in':'fadeIn .5s ease forwards',
        'spin-slow':'spin 20s linear infinite',
        'spin-rev':'spin 28s linear infinite reverse',
        'float':  'float 6s ease-in-out infinite',
        'pulse-gold':'pulseGold 2.5s ease-in-out infinite',
        'draw':   'draw 1.2s cubic-bezier(.23,1,.32,1) forwards',
      },
      keyframes: {
        fadeUp:    {'0%':{opacity:0,transform:'translateY(28px)'},'100%':{opacity:1,transform:'translateY(0)'}},
        fadeIn:    {'0%':{opacity:0},'100%':{opacity:1}},
        float:     {'0%,100%':{transform:'translateY(0)'},'50%':{transform:'translateY(-10px)'}},
        pulseGold: {'0%,100%':{boxShadow:'0 0 0 0 rgba(201,168,76,.3)'},'50%':{boxShadow:'0 0 0 8px transparent'}},
        draw:      {'0%':{strokeDashoffset:'1000'},'100%':{strokeDashoffset:'0'}},
      },
    },
  },
  plugins: [],
}
