import './App.css'
import { Routes, Route, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Landing from './pages/landing/Landing'
import Main from './pages/main/Main'
import Zine from './pages/zine/Zine'
import Form from './pages/form/Form'
import Pledged from './pages/pledged/Pledged'
import ReturnButton from './components/returnButton/ReturnButton'
import About from './pages/about/About'

export default function App() {
  const [checkYes, setCheckYes] = useState(false)
  const location = useLocation().pathname

  useEffect(() => {
    if (location === '/main') {
      document.body.classList.add('overflowRestrict')
      document.body.classList.remove('whitebg')
    } else {
      document.body.classList.remove('overflowRestrict')
    }
    if (location === '/zine') {
      document.body.classList.add('whitebg')
    } else {
      document.body.classList.remove('whitebg')
    }
    if (location === '/about') {
      document.body.classList.add('aboutbg')
    } else {
      document.body.classList.remove('aboutbg')
    }
  }, [location])

  return (
    <div className="App">
      {checkYes === false && (
        <>
          <h1 className="errorMessage">NOT ALLOWED</h1>
        </>
      )}
      {checkYes === true && <ReturnButton />}
      <Routes>
        <Route
          path="/"
          element={<Landing checkYes={checkYes} setCheckYes={setCheckYes} />}
        />
        {checkYes === true && (
          <>
            <Route path="/main" element={<Main />} />
            <Route path="/about" element={<About />} />
            <Route path="/zine" element={<Zine />} />
            <Route path="/pledgeform" element={<Form />} />
            {/* <Route path="/pledged" element={<Pledged />} /> */}
          </>
        )}
      </Routes>
    </div>
  )
}
