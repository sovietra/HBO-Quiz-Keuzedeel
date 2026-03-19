import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import MouseTrail from './components/MouseTrail'
import SectionPage from './pages/SectionPage'
import OverallResults from './pages/OverallResults'

export default function App() {
  return (
    <BrowserRouter>
      <MouseTrail />
      <Routes>
        <Route path="/" element={<Navigate to="/sectie/1" replace />} />
        <Route path="/sectie/:id" element={<SectionPage />} />
        <Route path="/eindresultaat" element={<OverallResults />} />
      </Routes>
    </BrowserRouter>
  )
}
