/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        primary: '#8B5CF6',
        primaryLight: '#A78BFA',
        primaryDark: '#7C3AED',
        background: '#F5F3FF',
        cardBg: '#FFFFFF',
        textPrimary: '#1E1B4B',
        textSecondary: '#6B7280',
        border: '#E5E7EB',
        success: '#22C55E',
        danger: '#EF4444',
      },
      borderRadius: {
        xl: '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      boxShadow: {
        card: '0 4px 20px rgba(139, 92, 246, 0.08)',
        cardHover: '0 8px 30px rgba(139, 92, 246, 0.15)',
        button: '0 4px 14px rgba(139, 92, 246, 0.25)',
        buttonHover: '0 6px 20px rgba(139, 92, 246, 0.35)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'slide-down': 'slideDown 0.4s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
