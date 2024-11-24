import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import enJSON from '@/dictionaries/en.json'
import ptJSON from '@/dictionaries/pt.json'

i18n.use(initReactI18next).init({
  lng: 'en',
  resources: {
    en: { ...enJSON },
    pt: { ...ptJSON },
  },
  debug: true,
})
