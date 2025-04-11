import { useState } from 'react'
import { Route, Routes } from 'react-router'
import LandingPage from './pages/LandingPage'

import NotificationPage from './pages/NotificationPage'
import './app.css'
import Layout from './components/Layout'
import PrivacyNotice from './pages/Privacy'


function App() {


  return (
    <Routes>
<Route path="/" element={<Layout/>} >
<Route index element={<LandingPage/>} />
<Route path="notifications" element={<NotificationPage/>} />
<Route path="privacy" element={<PrivacyNotice/>} />

</Route>
    
    </Routes>
    
  )
}

export default App