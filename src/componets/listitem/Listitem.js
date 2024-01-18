import React from 'react'
import './Listitem.css'
export default  function Listitem(){
  return (
    <div className='listitem'>
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQYvWvzQmonsjB6qHgUMbArUNyptqP4oRMrpumzUY7SQ&s"  alt=" "/>
       <div className='itemInfo'>
        <div className='icons'>
         <i class="fa-solid fa-circle-play"></i>
         <i class="fa-solid fa-plus"></i>
        <i class="fa-regular fa-thumbs-up"></i>
        <i class="fa-regular fa-thumbs-down"></i>
        </div>
        <div className='itemInfoTop'>
          <span>1 hover 14 mins</span>
          <span className='limit'>+16</span>
          <span>1999</span>
        </div>
        <div className='desc'>
          loremA paragraph is a series of sentences that are organized and coherent, and are all related to a single topic. Almost every piece of writing you do that is longer than a few sentences should be organized into paragraphs.
        </div>
        <div className='genre'>Action
        </div>
       </div>
       </div>
  )
}

