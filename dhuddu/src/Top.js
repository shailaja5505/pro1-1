import React from 'react'
import veg from './image/veg.jpg'
import nveg from './image/nveg.jpg'
import dis from './image/dis.jpg'
import ban from './image/ban.jpg'
import './Top.css';
const Top = () => {
  return (
    <div>
       <hr />
       <h1 className='cat'>Get Fresh Food in a Easy Way </h1>
       <hr />
       <div className='ord'>
       <br />
       <br />
       <hr />
      
       <h1 className='cook'>Top Categories </h1>
       
       <div className='all'>
        <div className='rep'>
       <img src={veg} alt='' className='rep' />
       </div>
       <div className='rep'>
       <img src={nveg} alt='' className='rep' />
       </div>
       <div className='rep'>
       <img src={dis} alt='' className='rep' />
       </div>
       <div className='rep'>
       <img src={ban} alt='' className='rep' />
       </div>
       </div>
    </div>
    </div>
  )
}

export default Top