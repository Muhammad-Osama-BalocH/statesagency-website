import React from 'react'
import Navbar from './components/navbar'
import HeroSection from './components/hero'
import Services from './components/services'
import Listings from './components/listings'
import Contact from './components/contact'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <Services/>
      <Listings/>
      <Contact/>
    </div>
  )
}

export default Home
