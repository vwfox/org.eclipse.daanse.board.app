const config = {
  content: [
    'src/**/*.{vue,js,ts}',
    './../../**/*.{vue,js,ts,jsx,tsx}'// passt Pfade an!
  ],
  theme: {

    extend: {
        colors: {
        primary: '#154EC2',
        secondary: '#767C88',
        success: '#3D9209',
        info: '#158DE3',
        danger: '#E42222',
        warning: '#FFD43A',
        backgroundPrimary: '#f6f6f6',
        backgroundSecondary: '#FFFFFF',
        backgroundElement: '#ECF0F1',
        backgroundBorder: '#DEE5F2',
        textPrimary: '#262824',
        textInverted: '#FFFFFF'
      },
      screens: {
        xs: '0px',
        sm: '640px',
        md: '1024px',
        lg: '1440px',
        xl: '1920px',
      },},
  },
  plugins: [],
}

export default config
