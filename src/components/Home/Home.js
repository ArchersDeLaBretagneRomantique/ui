import React from 'react'
import { Link } from 'react-router'

import { getI18nLabels } from '../../services/I18nService'

const labels = getI18nLabels({
  title: 'TITLE',
  intro: 'HOME.INTRO',
  joinUs: 'HOME.JOIN_US',
})

const Home = () => {
  return (
    <div>
      <div className="jumbotron">
        <h1>{labels.title}</h1>
        <p>{labels.intro}</p>
        <Link to="/info" className="btn btn-primary">
          {labels.joinUs}
        </Link>
      </div>
      <div className="row marketing">
        Soon...
      </div>
    </div>
  )
}

export default Home
