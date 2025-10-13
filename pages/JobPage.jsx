import React from 'react'
import { useParams,useLoaderData } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const JobPage = () => {
    const { id } = useParams();
    const job = useLoaderData();

    return(
        <>
            <div className='flex flex-col'>
                <div className='p-4 gap-3 text-black bg-white'>
                    <Link to="/" className='flex items-center gap-3 cursor-pointer hover:text-indigo-600'>
                        <FaArrowLeft />
                        <p className='font-semibold'> Back to Job Listings </p>
                    </Link>
                </div>
                <div className='bg-[rgb(217,224,255)] flex flex-col flex-center mt-7'>
                    <div className='flex flex-col gap-4 w-full p-3 md:p-6 md:flex-row '>
                        <div className='flex flex-col gap-4 h-[100%]'>
                            <div className='flex flex-col justify-evenly bg-white rounded-md p-3 lg:h-[15vh]'>
                                <p className='text-red-700 mediumResFont font-medium'> {job.type} </p>
                                <h1 className='largeResFont font-semibold  text-indigo-600'> {job.title} </h1>
                                <p className='text-red-700  mediumResFont font-medium'> {job.location} </p>
                            </div>
                            <div className='flex flex-col justify-evenly mt-3 bg-white rounded-md p-3 lg:h-[35vh]'>
                                <h2 className='text-indigo-600 largeResFont font-semibold'>Job Description</h2>
                                <p className='smallResFont'> {job.description} </p>
                                <h2 className='text-indigo-600 largeResFont font-semibold'>Salary</h2>
                                <p className='smallResFont text-red-700 font-semibold'> {job.salary} </p>
                            </div>
                        </div>
                        <div className='flex flex-col bg-white rounded-md p-3 md:p-6 lg:justify-evenly'>
                            <h2 className='smallResFont text-red-700 font-bold'>Company Info</h2>
                            <h1 className='largeResFont font-semibold text-indigo-600'> {job.company.name} </h1>
                            <p className='smallResFont'> {job.company.description} </p>
                            <h2 className='smallResFont text-red-700 font-bold'> Contact Email</h2>
                            <div>
                                <p className='smallResFont bg-[rgb(217,224,255)] rounded-sm p-2 font-semibold mt-2 mb-2'> {job.company.contactEmail}  </p>
                            </div>
                            <h2 className='smallResFont text-red-700 font-bold mt-2 mb-2'>Contact Phone</h2>
                            <div>
                                <p className='smallResFont bg-[rgb(217,224,255)] rounded-sm p-2 font-semibold'> {job.company.contactPhone}  </p>
                            </div>
                        </div>
                    </div>
                    <div className='w-[94.5%] flex flex-col ml-3 mr-3 mb-5 p-3 bg-white rounded-md md:ml-6 md:mr-6 md:w-[50vw] '>
                        <p className='mediumResFont text-indigo-600 font-bold mb-1'> Manage Job</p>
                        <div className='w-full border text-white font-semibold flex-center gap-4'>
                            <button className='bg-indigo-500 p-2 rounded-md w-[110px] smallResFont'> Edit Job </button>
                            <button className='bg-red-500 p-2 rounded-md w-[110px] smallResFont'> Delete Job</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
const jobLoader = async({ params })=>{
    const url = `/api/jobs/${params.id}`;
    const res = await fetch (url)
    const data = await res.json();
    return data;
}

export {JobPage as default, jobLoader};