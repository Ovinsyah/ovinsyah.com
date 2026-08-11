import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomeView from './views/home'
import PortfolioView from './views/portfolio'
import HutRi81View from './views/hut-ri-81'
import Jkie4View from './views/jkie4'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/portfolio" element={<PortfolioView />} />
        <Route path="/jkie4" element={<Jkie4View />} />
        <Route path="/jkie4/hut-ri-81" element={<HutRi81View />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
