import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ChooseTask from '../pages/ChooseTask'
import TaskOne from '../pages/TaskOne'
import TaskTwo from '../pages/TaskTwo'

const AppRouter = () => {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<ChooseTask/>}/>
            <Route path='taskone' element={<TaskOne/>}/>
            <Route path='tasktwo' element={<TaskTwo/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default AppRouter