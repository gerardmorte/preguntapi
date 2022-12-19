import { Route, Routes, Navigate } from 'react-router-dom'

import Doc from '@/components/Doc'
import Home from '@/components/Home'
import Footer from '@/components/Footer'
import StartQuiz from '@/components/StartQuiz'
import Navigation from '@/components/Navigation'

export default function App () {
  return (
    <div className='min-h-screen flex flex-col lightBackground'>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/documentation' element={<Doc />} />
        <Route path='/startQuiz' element={<StartQuiz />} />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
      <Footer />
    </div>
  )
}
