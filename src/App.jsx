import { Route,createBrowserRouter,createRoutesFromElements,RouterProvider } from 'react-router-dom'
import React from 'react'
import MainLayout from './layouts/MainLayout'
import HomePage from '../pages/homePage'
import JobsPage from '../pages/jobsPage'
import NotFoundPage from '../pages/notFoundPage'
import JobPage from '../pages/JobPage'
import AddJobsPage from '../pages/AddJobsPage'

const App = () => {

  // Add new Job
  const addJob = async(newJob)=>{
    await fetch("/api/jobs",{
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(newJob),
    });

    return;
  }
  
  // Delete a Job
  const deleteJob = async(id)=>{
    await fetch(`/api/jobs/${id}`,{
      method: 'DELETE',
    })
  }
  
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
      <Route path='/jobs/:id' element={<JobPage deleteJob={deleteJob} />} loader = {jobLoader}/>
      <Route path='/addjob' element={<AddJobsPage addJobSubmit={addJob} />} add/>
      <Route path='*' element={<NotFoundPage/>}/>
    </Route> 
  ));

  return(
    <RouterProvider router={router}/>
  )

}

export default App;