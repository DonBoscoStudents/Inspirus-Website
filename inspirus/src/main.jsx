import React from 'react'
import ReactDOM from 'react-dom/client'
import LoadingPage from './pages/LoadingPage/App'
import  MinecraftMusic from './static/Audio/Minecraft.mp3'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Home from './pages/Home/Home'


const a=new Audio(MinecraftMusic)
a.play()

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
    <RouterProvider router={router} />
  </React.StrictMode>
)





