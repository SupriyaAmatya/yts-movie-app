import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className ='row'>
          <ul>
            <li>YTS © 2020</li>
            <li>-</li>
            <li><Link to="/">Home</Link></li>
            <li>-</li>
            <li><Link to="/browse-movies">Browse Movies</Link></li>
            <li>-</li>
            <li><Link to='/'>Login</Link></li>
          </ul>
        </div>
        <div className='row'>
          <p>Official Domain - <a href="https://yts.mx/" target="_blank" rel="noopener noreferrer">YTS.MX</a></p>
        </div>
        
      </div>
    </footer>
  )
}

export default Footer
