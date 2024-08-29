import React from 'react'
import blog from './image/blog.png'
export const About = () => {
  const listStyle = {
    textDecoration: 'none'
  }
  return (
    <div>
     <div className='total'>
      <header className='head'>
    <h1 className='heading'>Recipe World</h1>
    <ul>
      <li style={listStyle}>About</li>
      <li style={listStyle}>Contact</li>
      <li style={listStyle}>Recipe</li>
      <li style={listStyle}>More</li>
    </ul>
    <img src={intro} alt="" className='ho' />
    import intro from './image/intro.png';
    </header>
    <img src={blog} alt="" />

    </div>
 
        </div>
  )
}
export default About;
