import React from 'react'

import PageHeader from '../PageHeader'
import { getI18nLabels } from '../../services/I18nService'

const labels = getI18nLabels({
  title: 'INFO.TITLE',
})

const Info = () => {
  return (
    <div>
      <PageHeader title={labels.title} />
      <div className="row marketing">
        Soon...
      </div>
    </div>
  )
}

export default Info
