import React from 'react'
import './Home.css'
import Navbar from '../componets/navbar/Navbar'
import Featured from '../componets/featured/Featured'
import List from '../componets/list/List'
const Home = () => {
  return (
    <div className='home'>
        <Navbar/>
      {/* <img src=" https://img.freepik.com/free-photo/movie-background-collage_23-2149876028.jpg" alt=" " width={"100%"}/>  */}
 <Featured/>
 <List/>
 <List/>
 <List/>
 </div>
  )
}

export default Home
