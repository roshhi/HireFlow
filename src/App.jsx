import { Route,createBrowserRouter,createRoutesFromElements,RouterProvider } from 'react-router-dom'
import React from 'react'
import MainLayout from './layouts/MainLayout'
import HomePage from '../pages/homePage'
import JobsPage from '../pages/jobsPage'
import NotFoundPage from '../pages/notFoundPage'


const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element = {<MainLayout/>}>
    <Route index element={<HomePage/>}/>
    <Route path='/jobs' element={<JobsPage/>}/>
    <Route path='*' element={<NotFoundPage/>}/>
  </Route> 
));

const App = () => {
  return(
    <RouterProvider router={router}/>
)}

export default App;