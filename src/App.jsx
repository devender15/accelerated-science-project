import './App.css'

import { Routes, Route } from 'react-router-dom'

import { Routing } from './pages'

function App() {

  return (
    <>
      <Routes>
        <Route exact path="/*" element={<Routing />} />
      </Routes>
    </>
  )
}

export default App
