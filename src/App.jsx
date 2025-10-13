import { Route,createBrowserRouter,createRoutesFromElements,RouterProvider } from 'react-router-dom'
import React from 'react'
import MainLayout from './layouts/MainLayout'
import HomePage from '../pages/homePage'
import JobsPage from '../pages/jobsPage'
import NotFoundPage from '../pages/notFoundPage'
import JobPage from '../pages/JobPage'
import AddJobsPage from '../pages/AddJobsPage'

const jobLoader = async({ params })=>{
  const url = `/api/jobs/${params.id}`;
  const res = await fetch (url)
  const data = await res.json();
  return data;
}

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element = {<MainLayout/>}>
    <Route index element={<HomePage/>}/>
    <Route path='/jobs' element={<JobsPage/>}/>
    <Route path='/jobs/:id' element={<JobPage/>} loader = {jobLoader}/>
    <Route path='/addjob' element={<AddJobsPage/>}/>
    <Route path='*' element={<NotFoundPage/>}/>
  </Route> 
));

const App = () => {
  return(
    <RouterProvider router={router}/>
)}

export default App;