import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar1'>
    <div className='navbar'>
<div className='navbar__left'>
    <p>OneSchool</p>
    </div>

<div className='navbar__middle'>
<p><li><Link to="/" style={{textDecoration: 'none', color:'inherit'}}>Home</Link></li></p>

<p><li><Link to="/Add" style={{textDecoration: 'none', color:'inherit'}}>ADD</Link></li></p> 
<p>Courses</p>

<p>Teachers</p>
</div>

<div className='navbar__right'>
<button>CONTACT US</button>
</div>
</div>

          
         
   
   
   
   
   
   
   
   
   
   

   
   
   
    </div>
    
  )
}

export default Navbar
