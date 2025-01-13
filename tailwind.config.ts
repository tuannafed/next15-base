import type { Config } from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/modules/**/*.{js,ts,jsx,tsx,mdx}',
    './src/providers/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        'primary-red': {
          DEFAULT: 'hsl(var(--primary-red))',
          foreground: 'hsl(var(--primary-red-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))',
        },
        warning: {
          DEFAULT: 'hsl(var(--warning))',
          foreground: 'hsl(var(--warning-foreground))',
        },
        success: {
          DEFAULT: 'hsl(var(--success))',
          foreground: 'hsl(var(--success-foreground))',
        },
        info: {
          DEFAULT: 'hsl(var(--info))',
          foreground: 'hsl(var(--info-foreground))',
        },
        error: {
          DEFAULT: 'hsl(var(--error))',
          foreground: 'hsl(var(--error-foreground))',
        },
        gray: {
          '100': '#EFEEE9',
          '200': '#F2F2F2',
          '300': '#E0E0E0',
          '400': '#E6E8EC',
          '500': '#F4F5F6',
          '600': '#B1B5C3',
          '700': '#777E90',
          '800': '#353945',
          '900': '#23262F',
          dark: '#141416',
          light: '#FCFCFD',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      spacing: {
        '0.5': '0.125rem',
        '1': '0.25rem',
        '1.5': '0.375rem',
        '2': '0.5rem',
        '2.5': '0.625rem',
        '3': '0.75rem',
        '3.5': '0.875rem',
        '4': '1rem',
        '5': '1.25rem',
        '6': '1.5rem',
        '7': '1.75rem',
        '8': '2rem',
        '9': '2.25rem',
        '10': '2.5rem',
        '11': '2.75rem',
        '12': '3rem',
        '14': '3.5rem',
        '16': '4rem',
        '20': '5rem',
        '24': '6rem',
        '28': '7rem',
        '32': '8rem',
        '36': '9rem',
        '40': '10rem',
        '44': '11rem',
        '48': '12rem',
        '52': '13rem',
        '56': '14rem',
        '60': '15rem',
        '64': '16rem',
        '72': '18rem',
        '80': '20rem',
        '96': '24rem',
      },
      lineHeight: {
        h1: '112px',
        h2: '72px',
        h3: '56px',
        h4: '42px',
        h5: '32px',
        h6: '32px',
        subtitle1: '28px',
        subtitle2: '21px',
        body1: '24px',
        body2: '21px',
        caption: '14px',
        overline: '14px',
      },
      fontSize: {
        h1: ['96px', { lineHeight: '112px', fontWeight: '300' }],
        h2: ['60px', { lineHeight: '72px', fontWeight: '300' }],
        h3: ['48px', { lineHeight: '56px', fontWeight: '400' }],
        h4: ['34px', { lineHeight: '42px', fontWeight: '400' }],
        h5: ['24px', { lineHeight: '32px', fontWeight: '400' }],
        h6: ['20px', { lineHeight: '32px', fontWeight: '500' }],
        subtitle1: ['16px', { lineHeight: '28px', fontWeight: '400' }],
        subtitle2: ['14px', { lineHeight: '21px', fontWeight: '500' }],
        body1: ['14px', { lineHeight: '24px', fontWeight: '400' }],
        body2: ['14px', { lineHeight: '21px', fontWeight: '400' }],
        caption: ['12px', { lineHeight: '14px', fontWeight: '400' }],
        overline: ['12px', { lineHeight: '14px', fontWeight: '400' }],
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    function ({ addComponents, theme }: any) {
      const fontSize = theme('fontSize');

      addComponents({
        '.heading-1': {
          fontSize: fontSize.h1[0], // Access the font size (96px)
          lineHeight: fontSize.h1[1].lineHeight, // Access the line height (112px)
          fontWeight: fontSize.h1[1].fontWeight, // Access the font weight (300)
        },
        '.heading-2': {
          fontSize: fontSize.h2[0], // Access the font size (60px)
          lineHeight: fontSize.h2[1].lineHeight, // Access the line height (72px)
          fontWeight: fontSize.h2[1].fontWeight, // Access the font weight (300)
        },
        '.heading-3': {
          fontSize: fontSize.h3[0], // Access the font size (48px)
          lineHeight: fontSize.h3[1].lineHeight, // Access the line height (56px)
          fontWeight: fontSize.h3[1].fontWeight, // Access the font weight (400)
        },
        '.heading-4': {
          fontSize: fontSize.h4[0], // Access the font size (34px)
          lineHeight: fontSize.h4[1].lineHeight, // Access the line height (42px)
          fontWeight: fontSize.h4[1].fontWeight, // Access the font weight (400)
        },
        '.heading-5': {
          fontSize: fontSize.h5[0], // Access the font size (24px)
          lineHeight: fontSize.h5[1].lineHeight, // Access the line height (32px)
          fontWeight: fontSize.h5[1].fontWeight, // Access the font weight (400)
        },
        '.heading-6': {
          fontSize: fontSize.h6[0], // Access the font size (20px)
          lineHeight: fontSize.h6[1].lineHeight, // Access the line height (32px)
          fontWeight: fontSize.h6[1].fontWeight, // Access the font weight (500)
        },
        '.subtitle-1': {
          fontSize: fontSize.subtitle1[0], // Access the font size (16px)
          lineHeight: fontSize.subtitle1[1].lineHeight, // Access the line height (28px)
          fontWeight: fontSize.subtitle1[1].fontWeight, // Access the font weight (400)
        },
        '.subtitle-2': {
          fontSize: fontSize.subtitle2[0], // Access the font size (14px)
          lineHeight: fontSize.subtitle2[1].lineHeight, // Access the line height (21px)
          fontWeight: fontSize.subtitle2[1].fontWeight, // Access the font weight (500)
        },
        '.body-1': {
          fontSize: fontSize.body1[0], // Access the font size (14px)
          lineHeight: fontSize.body1[1].lineHeight, // Access the line height (24px)
          fontWeight: fontSize.body1[1].fontWeight, // Access the font weight (400)
        },
        '.body-2': {
          fontSize: fontSize.body2[0], // Access the font size (14px)
          lineHeight: fontSize.body2[1].lineHeight, // Access the line height (21px)
          fontWeight: fontSize.body2[1].fontWeight, // Access the font weight (400)
        },
        '.caption': {
          fontSize: fontSize.caption[0], // Access the font size (12px)
          lineHeight: fontSize.caption[1].lineHeight, // Access the line height (14px)
          fontWeight: fontSize.caption[1].fontWeight, // Access the font weight (400)
        },
        '.overline': {
          fontSize: fontSize.overline[0], // Access the font size (12px)
          lineHeight: fontSize.overline[1].lineHeight, // Access the line height (14px)
          fontWeight: fontSize.overline[1].fontWeight, // Access the font weight (400)
          textTransform: 'uppercase', // Access textTransform (uppercase)
          textDecorationLine: 'none !important', // Access textDecoderation (underline)
        },
      });
    },
  ],
  corePlugins: {},
} satisfies Config;
