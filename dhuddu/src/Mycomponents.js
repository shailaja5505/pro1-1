import React from 'react'
import './Mycomponent.css';
// import back from './image/back.png'


export const Mycomponents = () => {
  return (
    <div className='navbar'> 
     
      <div className='total'>
        
       <h1 className='slogan'>Crafting Happiness, <br></br> One Recipe At a Time</h1>
       <button className='one'>Start learn</button>
      {/* <img src={back} alt='' className='img' />  */}
       </div>
       
    </div>
  )
}

export default Mycomponents;