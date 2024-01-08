import React from 'react'
import './Home.css'
import Navbar from '../componets/navbar/Navbar'
import Featured from '../componets/featured/Featured'
const Home = () => {
  return (
    <div className='home'>
        <Navbar/>
      {/* <img src=" https://img.freepik.com/free-photo/movie-background-collage_23-2149876028.jpg" alt=" " width={"100%"}/>  */}
 <Featured/>
 </div>
  )
}

export default Home
