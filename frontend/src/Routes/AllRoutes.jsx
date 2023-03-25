import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from './Home'
import { PageNotFound } from './PageNotFound'
import { Task } from './Task'

export const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/task' element={<Task/>}/>
        <Route path='*' element={<PageNotFound/>}/>
    </Routes>
  )
}
