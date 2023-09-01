import { useState } from 'react';
import {Back, DarkMode } from '../icons'
import {Link } from 'react-router-dom'

function NavBar() {

  window.onload=SetColorMode
  const [isDarkMode,SetDarkMode] = useState(false)
  function SetColorMode(){
    if(window.matchMedia('(prefers-color-scheme: dark)').matches){
      document.body.classList.add('dark')
      SetDarkMode(true)
    }else{
      document.body.classList.add('light')
      SetDarkMode(false)
    }

    
    if(window.localStorage.getItem('color-scheme')=='dark'){

      document.body.classList.add('dark')
      document.body.classList.remove('light')
      SetDarkMode(true)

    }else{
      document.body.classList.add('light')
      document.body.classList.remove('dark')
      SetDarkMode(false)

    }
    // console.log()
  }
  function ChangeColorMode(){
    SetDarkMode(!isDarkMode)
    document.body.classList.toggle('dark')
    document.body.classList.toggle('light')
    if(isDarkMode){
      window.localStorage.setItem('color-scheme','light')
      console.log('Current Light')
    }else{
      window.localStorage.setItem('color-scheme','dark')
      console.log('Current Dark')
    }
  }

    return <div className='fixed w-screen bg-primary flex justify-between p-5'>

      <Link to={-1}>
      <Back Size='20'/>
      </Link>

      <div className='flex gap-6 text-xl'>
        <Link to={'/Home'}>Home</Link>
        <Link to={'/Team'}>Team</Link>
      </div>

      <button onClick={ChangeColorMode}>
      <DarkMode Size='20' Mode={isDarkMode?'Dark':''}  />
      </button>
    </div>;
  }
  
  export default NavBar;
  