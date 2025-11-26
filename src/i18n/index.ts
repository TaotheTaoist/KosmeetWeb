import { createI18n } from 'vue-i18n'
import { DEFAULT_LANGUAGE, loadLocaleMessages } from './locales'
import { getLanguageFromCookie, setLanguageToCookie } from '../utils/cookies'

// Get initial language from cookie or use default
const getInitialLanguage = (): string => {
  const cookieLanguage = getLanguageFromCookie()
  if (cookieLanguage) {
    return cookieLanguage
  }

  // Detect browser language and map to supported language
  const browserLanguage = navigator.language.toLowerCase()

  // Language mapping
  const languageMap: Record<string, string> = {
    'zh-tw': 'zh_tw',
    'zh-hk': 'zh_tw',
    'zh-mo': 'zh_tw',
    'zh-cn': 'zh_cn',
    'zh': 'zh_cn',
    'en': 'en_us',
    'en-us': 'en_us',
    'en-gb': 'en_us',
    'ko': 'ko_kr',
    'ko-kr': 'ko_kr',
    'vi': 'vi_vn',
    'vi-vn': 'vi_vn',
    'ja': 'ja_jp',
    'ja-jp': 'ja_jp'
  }

  const detectedLanguage = languageMap[browserLanguage] ||
                          languageMap[browserLanguage.split('-')[0] || ''] ||
                          DEFAULT_LANGUAGE

  // Save detected language to cookie
  setLanguageToCookie(detectedLanguage)

  return detectedLanguage
}

const initialLanguage = getInitialLanguage()

// Create i18n instance
export const i18n = createI18n({
  legacy: false,
  locale: initialLanguage,
  fallbackLocale: DEFAULT_LANGUAGE,
  messages: {}
})

// Load initial locale messages
export const initializeI18n = async () => {
  try {
    const messages = await loadLocaleMessages(initialLanguage)
    i18n.global.setLocaleMessage(initialLanguage, messages)
  } catch (error) {
    console.error('Failed to initialize i18n:', error)
    // Try to load default language as fallback
    try {
      const fallbackMessages = await loadLocaleMessages(DEFAULT_LANGUAGE)
      i18n.global.setLocaleMessage(DEFAULT_LANGUAGE, fallbackMessages)
      i18n.global.locale.value = DEFAULT_LANGUAGE
    } catch (fallbackError) {
      console.error('Failed to load fallback language:', fallbackError)
    }
  }
}

// Change language function
export const changeLanguage = async (locale: string) => {
  try {
    // Load locale messages if not already loaded
    if (!i18n.global.availableLocales.includes(locale)) {
      const messages = await loadLocaleMessages(locale)
      i18n.global.setLocaleMessage(locale, messages)
    }

    // Update locale
    i18n.global.locale.value = locale

    // Save to cookie
    setLanguageToCookie(locale)

    // Update document language attribute
    document.documentElement.lang = locale.replace('_', '-')

    return true
  } catch (error) {
    console.error(`Failed to change language to ${locale}:`, error)
    return false
  }
}