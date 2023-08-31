import { useState } from 'react';
import {Back, DarkMode } from '../icons'
import {Link } from 'react-router-dom'

function NavBar() {

  window.onload=SetColorMode
  const [isDarkMode,SetDarkMode] = useState(false)
  function SetColorMode(){
    if(window.matchMedia('(prefers-color-scheme: dark)').matches){
      document.body.classList.add('dark')
    }else{
      document.body.classList.add('light')
    }
    // console.log()
  }
  function ChangeColorMode(){
    SetDarkMode(!isDarkMode)
    document.body.classList.toggle('dark')
    document.body.classList.toggle('light')
  }

    return <div className='flex justify-between p-3'>

      <Link to={-1}>
      <Back Size='20'/>

      </Link>


      <button onClick={ChangeColorMode}>
      <DarkMode Size='20' Mode={isDarkMode?'Dark':''}  />
      </button>
    </div>;
  }
  
  export default NavBar;
  