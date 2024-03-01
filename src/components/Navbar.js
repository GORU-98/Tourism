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
        <h2>signup</h2>
      </div>

    </div>
  )
}

export default Navbar