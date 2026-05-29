import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'

export default createVuetify({
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        dark: false,
        colors: {
          primary: '#7C3AED',
          secondary: '#A855F7',
          background: '#FAFAFA',
          surface: '#FFFFFF',
        }
      }
    }
  }
})
