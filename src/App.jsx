import { useState } from 'react'
import { Route, Routes } from 'react-router'
import LandingPage from './pages/LandingPage'

import NotificationPage from './pages/NotificationPage'
import './app.css'
import Layout from './components/Layout'
import PrivacyNotice from './pages/Privacy'
import ComingSoon from './pages/CommingSoon'
import GetNotifiedInfoPage from './components/getNotifiedPage'


function App() {


  return (
    <Routes>
<Route path="/" element={<Layout/>} >
{/* <Route index element={<GetNotifiedInfoPage/>} /> */}
<Route index element={<LandingPage/>} />
<Route path="notifications" element={<ComingSoon/>} />
<Route path="privacy" element={<PrivacyNotice/>} />

</Route>
    
    </Routes>
    
  )
}

export default App