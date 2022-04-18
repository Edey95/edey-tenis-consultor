import defaultSettings from '@/settings'

const title = defaultSettings.title || 'Edey Sport Consultor'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
