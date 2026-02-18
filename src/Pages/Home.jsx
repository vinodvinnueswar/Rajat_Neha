import React from 'react'
import Intro from '../components/Intro'
import Bride_Groom from '../components/Bride_Groom'
import Photo_Gallery from '../components/Photo_Gallery'
import Social_Share from '../components/Social_Share'
import Footer from '../components/Footer'
import Location from '../components/Location'

const Home = () => {
  return (
    <div className='Home'>
       <div className="Home-page">
         <Intro/>
        <Bride_Groom/>
        <Photo_Gallery/>
        <Location/>
        <div className="Social-Footer">
        <Social_Share/>
        <Footer/>
        </div>

       </div>
    </div>
  )
}

export default Home