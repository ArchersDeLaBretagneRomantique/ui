import React from 'react'

import { getI18nLabels } from '../../../services/I18nService'

const labels = getI18nLabels({
  footer: 'FOOTER',
})

const Footer = () => {
  return (
    <footer className="footer">
        <p>{labels.footer}</p>
    </footer>
  )
}

export default Footer
