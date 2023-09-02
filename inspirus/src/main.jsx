import React from 'react'
import ReactDOM from 'react-dom/client'

import LoadingPage from './pages/LoadingPage/main'

import {Routes,Route,BrowserRouter} from 'react-router-dom'
import Home from './pages/Home/app'
// import Team from './pages/Team/main'







ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter >
    <Routes>
      <Route path='/Home' element={<Home/>}/>
      <Route path='/' element={<LoadingPage/>}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
)





