export interface LanguageInfo {
  code: string;
  name: string;
  flag: string;
}

export const SUPPORTED_LANGUAGES: LanguageInfo[] = [
  { code: "zh_tw", name: "繁體中文", flag: "🇹🇼" },
  { code: "zh_cn", name: "简体中文", flag: "🇨🇳" },
  { code: "en_us", name: "English", flag: "🇺🇸" },
  { code: "ko_kr", name: "한국어", flag: "🇰🇷" },
  { code: "vi_vn", name: "Tiếng Việt", flag: "🇻🇳" },
  { code: "ja_jp", name: "日本語", flag: "🇯🇵" },
];

export const DEFAULT_LANGUAGE = "zh_tw";

export const loadLocaleMessages = async (locale: string): Promise<any> => {
  try {
    const messages = await fetch(`/locales/${locale}.json`); // Fixed: use () not ``
    if (!messages.ok) {
      throw new Error(`Failed to load locale: ${locale}`); // Fixed: use () not ``
    }
    return await messages.json();
  } catch (error) {
    console.error(`Error loading locale ${locale}:`, error); // Fixed: use () not ``
    // Fallback to default language
    if (locale !== DEFAULT_LANGUAGE) {
      return await loadLocaleMessages(DEFAULT_LANGUAGE);
    }
    throw error;
  }
};
