import React from 'react'
import Navbar from '../Components/Navbar'
import About from '../Components/About'
import Category from '../Components/Category'
import HospitalsGrid from '../Components/HospitalsGrid'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Category></Category>
      <About></About>
      <HospitalsGrid></HospitalsGrid>
      <Footer></Footer>
    </div>
  )
}

export default Home
