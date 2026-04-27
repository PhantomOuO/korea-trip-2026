/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './resources/views/**/*.blade.php',
    './resources/js/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        korea: {
          bg: '#F7F4EB',
          card: '#FFFFFF',
          ink: '#34302A',
          muted: '#8B8376',
          line: '#E9E1D1',
          peach: '#F6B8A8',
          peachSoft: '#FFE7DF',
          sage: '#C9D8B6',
          sageSoft: '#EEF4E7',
          sky: '#BFD7EA',
          skySoft: '#EAF4FB',
          sand: '#EAD8B8',
          sandSoft: '#FBF1DD',
          rose: '#E9A6B2',
          roseSoft: '#FCE7EC',
          kimchi: '#D95D39',
          hanok: '#A66A43'
        }
      },
      boxShadow: {
        soft: '0 12px 30px rgba(88, 74, 52, 0.08)',
        sticker: '4px 4px 0px #E0E5D5',
        ticket: '0 16px 40px rgba(62, 52, 38, 0.12)',
        floating: '0 20px 50px rgba(52, 48, 42, 0.18)'
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem'
      },
      fontFamily: {
        sans: ['Noto Sans TC', 'Nunito', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
};
