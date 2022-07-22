import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ChooseTask from '../pages/ChooseTask'
import TaskOne from '../pages/TaskOne'

const AppRouter = () => {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<ChooseTask/>}/>
            <Route path='taskone' element={<TaskOne/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default AppRouter