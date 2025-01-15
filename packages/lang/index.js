import zh from './zh.js'
import en from './en.js'

const messages = {
  zh,
  en,
}

/**
 * 获取当前语言
 * @returns zh-cn|en ...
 */
export const getLanguage = () => {
  const language = localStorage.getItem('language')
  // 原来缓存的语言是 zh_CN重新设置下
  return language || 'zh'
}

export const $t = (key) => {
  const language = getLanguage()
  return messages[language]?.[key] || key
}
//
// const i18n = createI18n({
//   legacy: false,
//   locale: getLanguage(), // 默认显示语言
//   messages: {
//     zh,
//     en,
//   },
// })
//
// export const setLanguage = (language) => {
//   localStorage.setItem('language', language)
// }
//
// export default i18n
