import React from 'react'

import PageHeader from '../PageHeader'
import { getI18nLabels } from '../../services/I18nService'

const labels = getI18nLabels({
  title: 'PRESENTATION.TITLE',
  beginningTitle: 'PRESENTATION.BEGINNING.TITLE',
  beginningSpeach: 'PRESENTATION.BEGINNING.SPEACH',
  beginningEnum: 'PRESENTATION.BEGINNING.ENUM',
  evolutionTitle: 'PRESENTATION.EVOLUTION.TITLE',
  evolutionSpeach1: 'PRESENTATION.EVOLUTION.SPEACH_1',
  evolutionSpeach2: 'PRESENTATION.EVOLUTION.SPEACH_2',
  evolutionEnum: 'PRESENTATION.EVOLUTION.ENUM',
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
            labels.beginningEnum.map(item => <li>{item}</li>)
          }
        </ul>

        <h2>{labels.evolutionTitle}</h2>
        <p>{labels.evolutionSpeach1}</p>
        <p>{labels.evolutionSpeach2}</p>
        <ul>
          {
            labels.evolutionEnum.map(item => <li>{item}</li>)
          }
        </ul>
      </div>
    </div>
  )
}

export default Presentation
