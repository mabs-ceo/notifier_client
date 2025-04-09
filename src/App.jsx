import { useState } from 'react'
import { Route, Routes } from 'react-router'
import LandingPage from './pages/LandingPage'
import HomePage from './pages/HomePage'
import NotificationPage from './pages/NotificationPage'
import './app.css'
import NavbarComponent from './components/NavbarComponent'
import LoginPage from './pages/LoginPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
<Route path="/" element={<NavbarComponent/>} >
<Route index element={<LandingPage/>} />
<Route path="notification" element={<NotificationPage/>} />
<Route path="login" element={<LoginPage/>} />
</Route>
    
    </Routes>
    
  )
}

export default App