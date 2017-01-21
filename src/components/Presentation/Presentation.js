import React from 'react'

import PageHeader from '../PageHeader'
import { getI18nLabels } from '../../services/I18nService'

const labels = getI18nLabels({
  title: 'PRESENTATION.TITLE',
  beginningTitle: 'BEGINNING.TITLE',
  beginningSpeach: 'BEGINNING.SPEACH',
  beginningEnum: 'BEGINNING.ENUM',
  evolutionTitle: 'EVOLUTION.TITLE',
  evolutionSpeach1: 'EVOLUTION.SPEACH_1',
  evolutionSpeach2: 'EVOLUTION.SPEACH_2',
  evolutionEnum: 'EVOLUTION.ENUM',
})

const Presentation = () => {
  return (
    <div>
      <PageHeader title={labels.title} />
      <div className="row marketing">
        <h2>{labels.beginningTitle}</h2>
        <p>{labels.beginningSpeach}</p>
        <ul>
          {
            labels.beginningEnum.forEach(item => <li>{item}</li>)
          }
        </ul>

        <h2>{labels.evolutionTitle}</h2>
        <p>{labels.evolutionSpeach1}</p>
        <p>{labels.evolutionSpeach2}</p>
        <ul>
          {
            labels.evolutionEnum.forEach(item => <li>{item}</li>)
          }
        </ul>
      </div>
    </div>
  )
}

export default Presentation
