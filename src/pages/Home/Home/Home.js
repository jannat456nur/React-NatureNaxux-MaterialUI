import React from 'react'
import Hero from '../../Hero/Hero'
import Gallery from '../Gallery/Gallery'
import Banner from '../Banner/Banner'
import Gallery2 from '../Gallery2/Gallery'
import Hww from '../Hww/Hww'
import Header from '../../shared/Header/Header'

const Home = () => {
  return (
    <div>
      {/* <Hero></Hero> */}

      <Header></Header>
    
      <Banner></Banner>
      <Gallery2></Gallery2>
      <Hww></Hww>
      {/* <Gallery></Gallery> */}
    </div>
  )
}

export default Home
