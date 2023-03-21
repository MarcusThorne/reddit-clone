import React from 'react'
import './navbarStyles.css'

function Navbar() {
  return (
    <div className='navbarContainer'>
        <h1>Reddit Clone</h1>

        <div className='searchBarContainer'>
            <input className='searchBar' placeholder='search' />
        </div>
    </div>
  )
}

export default Navbar
