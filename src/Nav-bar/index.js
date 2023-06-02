import React,{useState} from 'react';
import "./index.css";
import { Link } from 'react-router-dom';
/*
  --main-bg-color: #ffffff;
  --main-text-color: #990099;
  --main-border-color: #668086;
  --main-shadow-color: rgba(0,0,0,0.2);
*/
export default function NavBar() {
  const [toggle, setToggle] = useState(false);
 
  function handleClick(color1,color2,color3,color4){
    setToggle(!toggle);
    /*
      --main-bg-color: #ffffff;
  --main-text-color: #990099;
  --main-border-color: #668086;
  --main-shadow-color: rgba(0,0,0,0.2); */
  if(toggle){
    document.documentElement.style.setProperty('--main-bg-color', color1);
    document.documentElement.style.setProperty('--main-text-color', color2);
    document.documentElement.style.setProperty('--main-border-color', color3);
    document.documentElement.style.setProperty('--main-shadow-color', color4);
  }else{
    color1 = '#ffffff';
    color2 = '#990099';
    color3 = '#668086';
    color4 = 'rgba(0,0,0,0.2)';
    document.documentElement.style.setProperty('--main-bg-color', color1);
    document.documentElement.style.setProperty('--main-text-color', color2);
    document.documentElement.style.setProperty('--main-border-color', color3);
    document.documentElement.style.setProperty('--main-shadow-color', color4);
  }
  }

  return (
 
        <nav>
         <i className={toggle? 'fas fa-toggle-off':'fas fa-toggle-on'} onClick={()=>handleClick('black','white','yellow','#f6f6f6')}></i>
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
