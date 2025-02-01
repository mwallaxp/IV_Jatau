import React from 'react'
import Navbar from "../Component/Navbar"
import HeroCarousel from './HeroCarousel'
import Footer from './Footer'
import CompanyStats from './CompanyStats'

const Home = () => {
  return (
    <div>
        <HeroCarousel/>
        <CompanyStats/>
        </div>
  )
}

export default Home