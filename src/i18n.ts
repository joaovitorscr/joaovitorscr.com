import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import enJSON from '@/dictionaries/en.json'
import ptJSON from '@/dictionaries/pt.json'
import { initReactI18next } from 'react-i18next'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: ['en', 'pt'],
    resources: {
      en: { ...enJSON },
      pt: { ...ptJSON },
    },
    debug: true,
  })
