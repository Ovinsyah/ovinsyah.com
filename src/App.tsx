import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomeView from './views/home'
import PortfolioView from './views/portfolio'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/portfolio" element={<PortfolioView />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
