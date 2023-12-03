import React from 'react'
import logo from '../../assets/images/logo.svg'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
<nav className="navbar navbar-expand-sm navbar-light bg-light">
  <div className="container">
    <Link className="navbar-brand" to='/'>
      <img src={logo} alt="" />
    </Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarText">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link to='home' className='nav-link'>Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link to='cart' className="nav-link">Cart</Link>
      </li>
      <li className="nav-item">
        <Link to='products' className="nav-link">Products</Link>
      </li>
      <li className="nav-item">
        <Link to='categories' className="nav-link">Categories</Link>
      </li>
      <li className="nav-item">
        <Link to='brands' className="nav-link">Brands</Link>
      </li>
    </ul>

    <ul className='navbar-nav sm-auto mt-2 mt-lg-0'>
      <li className='nav-item d-flex align-items-center'>
        <i className='fab mx-2 fa-facebook'></i>
        <i className='fab mx-2 fa-twitter'></i>
        <i className='fab mx-2 fa-instgram'></i>
        <i className='fab mx-2 fa-tiktok'></i>
        <i className='fab mx-2 fa-linkedin'></i>
        <i className='fab mx-2 fa-youtube'></i>
      </li>
      <li>
        <Link className='nav-link' to='login'> Login </Link>
      </li>
      <li>
        <Link className='nav-link' to='register'> Register </Link>
      </li>
      <li>
        <Link className='nav-link'> Logout </Link>
      </li>
    </ul>
  </div>
  </div>

</nav>
  )
}

export default Navbar
