import React, { PropTypes } from 'react'
import { Link, IndexLink } from 'react-router'
import classnames from 'classnames'

const NavBar = ({ pathname }) => {
  const getClassName = path => classnames({ active: pathname === path })
  return (
    <header className="header">
        <nav>
            <ul className="nav nav-pills pull-right">
                <li className={getClassName('/')}>
                  <IndexLink to="/">
                    Accueil
                  </IndexLink>
                </li>
                <li className={getClassName('/presentation')}>
                  <Link to="/presentation">
                    Présentation
                  </Link>
                </li>
                <li className={getClassName('/info')}>
                  <Link to="/info">
                    Informations
                  </Link>
                </li>
                <li className={getClassName('/photos')}>
                  <Link to="/photos">
                    Galerie photos
                  </Link>
                </li>
            </ul>
        </nav>
        <h3>
          <IndexLink className="text-muted" to="/">
            Les Archers de la Bretagne Romantique
          </IndexLink>
        </h3>
    </header>
  )
}

NavBar.propTypes = {
  pathname: PropTypes.string.isRequired,
}

export default NavBar
