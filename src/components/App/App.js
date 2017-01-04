import React, { PropTypes } from 'react'

import NavBar from './NavBar'
import Footer from './Footer'

const App = ({ location: { pathname }, children }) => {
  return (
    <div className="container">
      <NavBar pathname={pathname} />
      {children}
      <Footer />
    </div>
  )
}

App.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  children: PropTypes.object,
}

export default App
