import get from 'lodash/get'
import labels, { FRENCH } from '../i18n'

const current = FRENCH
const currentLabels = labels[FRENCH]

const getDefaultI18nLabels = (key) => {
  const splittedKey = key.split('.')
  return splittedKey[splittedKey.length - 1]
}

export const getI18nLabels = (keys = {}) => {
  const labels = {}

  for (const code in keys) {
    const key = keys[code]
    const label = get(currentLabels, key) || getDefaultI18nLabels(key)
    labels[code] = label
  }

  return labels
}
