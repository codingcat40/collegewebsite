import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Faculty from './components/Faculty'
import Navbar from './components/Navbar'

function App() {

  return (
    <div>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about-us' element={<About />}/>
          <Route path='/contact-us' element={<Contact />}/>
          <Route path='/faculty' element={<Faculty />} />

        </Routes>
    </div>
  )
}

export default App
