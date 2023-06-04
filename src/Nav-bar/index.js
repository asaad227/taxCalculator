import React  from 'react';
import "./index.css";
import { Link } from 'react-router-dom';


export default function NavBar() {

 
 

  return (
 
        <nav>
      
            <h1>Tax Calculator UK</h1>
           
            {/* <span className="material-symbols-outlined">
calculate
</span> */}
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/england">England</Link></li>
                <li><Link to="/scotland">Scotland</Link></li>
                <li><Link to="/wales">Wales</Link></li>
                
            </ul>
        </nav>
    
    
  )
}
