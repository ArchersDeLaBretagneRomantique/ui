import React, { PropTypes } from 'react'
import { Link, IndexLink } from 'react-router'
import classnames from 'classnames'

import { getI18nLabels } from '../../../services/I18nService'

const labels = getI18nLabels({
  home: 'HOME.TITLE',
  presentation: 'PRESENTATION.TITLE',
  info: 'INFO.TITLE',
  photo: 'PHOTO.TITLE',
  title: 'TITLE',
})

const getClassName = (path, pathname) => classnames({ active: pathname === path })

const NavBar = ({ pathname }) => {
  return (
    <header className="header">
        <nav>
            <ul className="nav nav-pills pull-right">
                <li className={getClassName('/', pathname)}>
                  <IndexLink to="/">
                    {labels.home}
                  </IndexLink>
                </li>
                <li className={getClassName('/presentation', pathname)}>
                  <Link to="/presentation">
                    {labels.presentation}
                  </Link>
                </li>
                <li className={getClassName('/info', pathname)}>
                  <Link to="/info">
                    {labels.info}
                  </Link>
                </li>
                <li className={getClassName('/photos', pathname)}>
                  <Link to="/photos">
                    {labels.photo}
                  </Link>
                </li>
            </ul>
        </nav>
        <h3>
          <IndexLink className="text-muted" to="/">
            {labels.title}
          </IndexLink>
        </h3>
    </header>
  )
}

NavBar.propTypes = {
  pathname: PropTypes.string.isRequired,
}

export default NavBar
