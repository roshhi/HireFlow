import React from 'react'

const ViewAllJobs = ({onClick}) => {
  return (
    <div className='flex-center p-[30px] bg-white'>
        <div onClick={onClick} className='bg-black w-[180px] p-3 flex-center rounded-md cursor-pointer'>
            <p className='text-white'>Show More</p>
        </div>
    </div>
  )
}

export default ViewAllJobs