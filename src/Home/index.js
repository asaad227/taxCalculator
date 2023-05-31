import React from 'react'
import { Link } from 'react-router-dom';
export default function Home() {
  return (
    <div className="nav-bar">
    <h1>UK Tax Calculator</h1>
    <div className='nav-divider'></div>
    <h3>Choose your country</h3>
    <ul>
      <li> <Link to="/england">England</Link></li>
      <li> <Link to="/scotland">Scotland</Link></li>
      <li> <Link to="/wales">Wales</Link></li>
    </ul>
    </div>
  )
}
