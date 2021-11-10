import React, { useState, Suspense } from 'react'
import ReactDOM from 'react-dom'

import './index.scss'

const Header = React.lazy(() => import('host/Header'))
const Footer = React.lazy(() => import('host/Footer'))

function App() {
  const [showHeader, setShowHeader] = useState(false)

  return (
    <div className="text-3xl mx-auto max-w-6xl">
      {showHeader && (
        <Suspense fallback={<div>Loading...</div>}>
          <Header />
        </Suspense>
      )}
      <button className="text-3xl p-5" onClick={() => setShowHeader(!showHeader)}>
        Show the Header
      </button>
      <div className="my-10">PDP Page Content</div>
      <Suspense fallback={<div>Loading...</div>}>
        <Footer />
      </Suspense>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
