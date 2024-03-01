import React from 'react'

const Navbar = () => {
  return (
    <div className='navpage'>

      <div className='logo'>
        <h1> <span>T</span>ourist</h1>

      </div>
      <div className='index'>
            <ul>
                <li>Home</li>
                <li>Book</li>
                <li>Packages</li>
                <li>Services</li>
                <li>Gallery</li>
                <li>Review</li>
                <li>Contact</li>
            </ul>
      </div>
      <div className='icon'>
       <img src='icons/profile-user.png' alt='icon'/>
       <img src='icons/search.png' alt='icon'/>
      </div>

    </div>
  )
}

export default Navbar