import React from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import { Route,Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Services from './components/Services'
import Gallery from './components/Gallery'
import Blog from './components/Blog'
import Privacy from './components/Privacy'
import Cancel from './components/Cancel'
import Terms from './components/Terms'
import Blogpage from './components/Blogpage'

const App = () => {
  return (
    <div className='h-screen w-full'>
      <Header/>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/Services' element={<Services/>}/>
        <Route path='/Gallery' element={<Gallery/>}/>
        <Route path='/Blog' element={<Blog/>}>
        <Route path='Blogpage' element={<Blogpage/>}/>
        </Route>
        <Route path='/Privacy' element={<Privacy/>}/>
        <Route path='/Cancel' element={<Cancel/>}/>
        <Route path='/Terms' element={<Terms/>}/>
      </Routes>
    </div>
  )
}

export default App
