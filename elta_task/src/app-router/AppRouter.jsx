import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import TaskOne from '../pages/TaskOne'
import TaskTwo from '../pages/TaskTwo'
import AppResults from '../pages/AppResults'


const AppRouter = () => {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='taskone' element={<TaskOne/>}/>
            <Route path='tasktwo' element={<TaskTwo/>}/>
            <Route path='results' element={<AppResults/>}/>

            
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default AppRouter