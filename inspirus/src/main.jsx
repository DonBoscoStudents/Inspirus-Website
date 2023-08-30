import React from 'react'
import ReactDOM from 'react-dom/client'
import LoadingPage from './pages/LoadingPage/App'

import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Home from './pages/Home/Home'
import PlaySound from './components/playSound/playSound'
import { DarkMode } from './components/icons'




const router = createBrowserRouter([
  {
    path:"/",
    element:<LoadingPage/>
  },
  {
    path:"/Home",
    element:<Home/>
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <button className='text-white absolute'>
      <DarkMode Mode="Dark"/>
    </button>
  <PlaySound/>
    
    <RouterProvider router={router} />
  </React.StrictMode>
)





