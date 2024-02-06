import React, { useState } from 'react'
import './Listitem.css'
export default  function Listitem(index){
  const[isHovered,setIsHovered]=useState(false)
  const trailer="https://www.youtube.com/watch?v=KavrRIh0ScQ";
  return (
    <div className='listitem' 
    style={{left:isHovered&&index*225-50+index*2.5}}
    onMouseEnter={()=>setIsHovered(true)}
    onMouseOver={()=>setIsHovered(false)}>
      {isHovered&& (
        <>
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQYvWvzQmonsjB6qHgUMbArUNyptqP4oRMrpumzUY7SQ&s"  alt=" "/>
       <video src={trailer} autoPlay={true} loop/>
       <div className='itemInfo'>
        <div className='icons'>
         <i class="fa-solid fa-circle-play" className='icon'></i>
         <i class="fa-solid fa-plus" className='icon'></i>
        <i class="fa-regular fa-thumbs-up" className='icon'></i>
        <i class="fa-regular fa-thumbs-down"className='icon'></i>
        </div>
        <div className='itemInfoTop'>
          <span>1 hover 14 mins</span>
          <span className='limit'>+16</span>
          <span>1999</span>
        </div>
        <div className='desc'>
          loremA paragraph is a series of sentences that are organized and coherent, and are all related to a single topic. Almost every piece of writing you do that is longer than a few sentences should be organized into paragraphs.
        </div>
        <div className='genre'>Action </div>
       </div>
       </>
      )}
       </div>
  )
}

