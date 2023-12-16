import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import Footer from 'components/footer'
import Header from 'components/header'
import Main from 'components/main'

function App() {
  return (
    <Router>
      <Header />
      <Main />
      <Footer />
    </Router>
  )
}

export default App
