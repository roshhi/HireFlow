import React from 'react'
import Hero from '../src/components/hero'
import HomeCards from '../src/components/homeCards'
import JobListings from '../src/components/jobListings'

const HomePage = () => {
  return (
    <>
        <Hero/>
        <HomeCards/>
        <JobListings/>
    </>
  )
}

export default HomePage