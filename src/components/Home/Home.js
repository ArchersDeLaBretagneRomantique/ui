import React from 'react'
import { Link } from 'react-router'

const Home = () => {
  return (
    <div>
      <div className="jumbotron">
        <h1>
          Les Archers de la Bretagne Romantique
        </h1>
        <p>
          Club de tir à l&#39;arc basé à Tinténiac, Bretagne.
        </p>
        <Link to="/info" className="btn btn-primary">
          Nous rejoindre
        </Link>
      </div>
      <div className="row marketing">
        Soon...
      </div>
    </div>
  )
}

export default Home
