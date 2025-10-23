import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  en: {
    translation: {
      welcome: {
        title: 'Kol Torah',
        subtitle: 'Welcome to the Kol Torah web application',
        getStarted: 'Get Started'
      },
      language: {
        english: 'English',
        hebrew: 'עברית'
      }
    }
  },
  he: {
    translation: {
      welcome: {
        title: 'קול תורה',
        subtitle: 'ברוכים הבאים לאפליקציית קול תורה',
        getStarted: 'התחל'
      },
      language: {
        english: 'English',
        hebrew: 'עברית'
      }
    }
  }
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'he', // default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  })

// Set initial direction
document.documentElement.dir = i18n.language === 'he' ? 'rtl' : 'ltr'
document.documentElement.lang = i18n.language

// Update direction and lang when language changes
i18n.on('languageChanged', (lng) => {
  document.documentElement.dir = lng === 'he' ? 'rtl' : 'ltr'
  document.documentElement.lang = lng
})

export default i18n
