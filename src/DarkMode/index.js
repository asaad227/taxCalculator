import React from 'react';
import "./index.css"

export default function DarkMode({toggle, setToggle}) {
 
    function handleClick(color1,color2,color3,color4,color5){
        setToggle(!toggle);
        /*
         --main-bg-color: #ffffff;
      --main-text-color: #990099;
      --main-border-color: #668086;
      --main-btn-color: #ffcc00;
      --main-shadow-color: rgba(0,0,0,0.2); */
      if(!toggle){
        color1 = '#000000';
        color2 = '#ffffff';
        color3 = 'yellow';
        color4 = 'rgba(255,255,255,0.2)';
        color5 = '#ffcc00';
        
        document.documentElement.style.setProperty('--main-bg-color', color1);
        document.documentElement.style.setProperty('--main-text-color', color2);
        document.documentElement.style.setProperty('--main-border-color', color3);
        document.documentElement.style.setProperty('--main-shadow-color', color4);
        document.documentElement.style.setProperty('--main-btn-color', color5);
      }else{
        color1 = '#ffffff';
        color2 = '#990099';
        color3 = '#668086';
    
        color4 = 'rgba(249, 249, 249, 0.506)';
        color5 = '#ffcc00';
    
        document.documentElement.style.setProperty('--main-bg-color', color1);
        document.documentElement.style.setProperty('--main-text-color', color2);
        document.documentElement.style.setProperty('--main-border-color', color3);
        document.documentElement.style.setProperty('--main-shadow-color', color4);
        document.documentElement.style.setProperty('--main-btn-color', color5);
    
      }
      }
  return (
    <div className='darkmood'>
           <i className={toggle? 'fas fa-toggle-off ':'fas fa-toggle-on'} onClick={handleClick}></i>
    </div>
  )
}
