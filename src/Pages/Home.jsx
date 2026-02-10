import React from 'react'
import Intro from '../components/Intro'
import Bride_Groom from '../components/Bride_Groom'
import Photo_Gallery from '../components/Photo_Gallery'
import Social_Share from '../components/Social_Share'
import Footer from '../components/Footer'
import Location from '../components/Location'

const Home = () => {
  return (
    <div>
        <Intro/>
        <Bride_Groom/>
        <Photo_Gallery/>
        <Location/>
        <Social_Share/>
        <Footer/>
    </div>
  )
}

export default Home