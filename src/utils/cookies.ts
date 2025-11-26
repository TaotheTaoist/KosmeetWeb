import Cookies from 'js-cookie'

export const LANGUAGE_COOKIE_KEY = 'kosmeet_language'

export const getLanguageFromCookie = (): string | undefined => {
  return Cookies.get(LANGUAGE_COOKIE_KEY)
}

export const setLanguageToCookie = (language: string): void => {
  Cookies.set(LANGUAGE_COOKIE_KEY, language, { expires: 365 })
}

export const removeLanguageFromCookie = (): void => {
  Cookies.remove(LANGUAGE_COOKIE_KEY)
}