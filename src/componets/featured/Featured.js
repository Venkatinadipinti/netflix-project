import React from 'react'
import './Featured.css'
export default function Featured({type}){
return (
    <div className="featured">
      {type && (
        <div className='category'>
          <span>{type=== "movie" ? "Movies" :"Series"}</span>
          <select name="genre" id="genre">
            <option>Genre</option>
            <option value="action-adventure"> Action-Adventure</option>
            <option value="comedy">Comdey</option>
            <option value="horror">Horror</option>
            <option value="drama ">Drama</option>
            <option value=" mystery">Mystery</option>
            <option value="family">Family</option>
            <option value="Animation"></option>
          </select>
        </div>
      )}
      <img src=" https://img.freepik.com/free-photo/movie-background-collage_23-2149876028.jpg" alt=" " width={"100%"}/> 
    <div className='info'>
        <img src="https://i.vimeocdn.com/video/1085934018-eabfef74c44a1e9f2bba71dde57295eb7bf37c22f72faaf0b1fff5d94255143d-d_1280 " alt=" " width={"50%"}/>
        <span className='desc'>
        </span>
        ipsum dolor sit amet consectetur adipisicing elit. Quis accusantium aut nobis quas itaque voluptatem exercitationem obcaecati totam, necessitatibus autem ducimus possimus inventore ullam architecto numquam dolores iusto distincti
            <div className='buttons' >
                <button className='play'>
                <i class="fa-solid fa-play"></i>
                <span>play</span>
                </button>
                <button className='more'>
                <i class="fa-regular fa-circle-question"></i>
                <span>info</span>
                </button>
            </div>
          </div>
    </div>
  )
  }

