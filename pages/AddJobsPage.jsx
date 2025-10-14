import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const AddJobsPage = ({addJobSubmit}) => {

    const [type, setType] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [salary, setSalary] = useState('');
    const [location, setLocation] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [companyDescription, setCompanyDescription] = useState('');
    const [contactEmail, setContactEmail] = useState('');
    const [contactPhone, setContactPhone] = useState('');


    const navigate  = useNavigate();

    const submitForm = (e)=>{
        e.preventDefault();
        const newJob = {
            title,
            type,
            description,
            location,
            salary,
            company:{
                companyName,
                companyDescription,
                contactEmail,
                contactPhone
            }
        }
        addJobSubmit(newJob);
        toast.success('Job added Successfully')
        return navigate('/jobs');
    }
    

  return (
    <div className='bg-[rgb(217,224,255)] w-full flex-center mt-5'>
        <div className="bg-indigo-50 w-[95%] rounded-md flex flex-col items-center p-2 md:w-[700px] md:p-6 mb-4">
            <h1 className='largeResFont font-bold text-[#212529] mb-4 '>Add Job</h1>
            <form className='w-full flex flex-col gap-5' onSubmit={submitForm}>
                <div className='flex flex-col'>
                    <label htmlFor="job-type" className='w-full mediumResFont text-indigo-500 font-bold '>Job Type</label>
                    <select name="job-type" id="job-type" required className=' mt-1 p-2 border rounded-md border-indigo-400 focus:outline-none' value={type} onChange={(e)=>setType(e.target.value)} >
                            <option value="">Select Job Type</option>    
                            <option value="Full-Time">Full-Time</option>
                            <option value="Part-Time">Part-Time</option>
                            <option value="Remote">Remote</option>
                            <option value="Internship">Internship</option>
                            <option value="Contract">Contract</option>
                    </select>
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="job-title" className='w-full mediumResFont text-indigo-500 font-bold mb-1 '>Job Listing Name</label>
                    <input type="text" required className='border rounded-md border-indigo-400 p-[6px] focus:outline-none' placeholder='Senior React Developer' value={title} onChange={(e)=>setTitle(e.target.value)} />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="job-desc" className='w-full mediumResFont text-indigo-500 font-bold mb-1'>Description</label>
                    <textarea type="text" required className='border rounded-md border-indigo-400 p-[6px] focus:outline-none' placeholder='Any Job duties, expectations, requirements etc' rows={5} value={description} onChange={(e)=>setDescription(e.target.value)}  />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="salary" className='w-full mediumResFont text-indigo-500 font-bold mb-1'>Salary</label>
                    <select name="salary" required id="salary" className=' mt-2 p-2 border rounded-md border-indigo-400 focus:outline-none' value={salary} onChange={(e)=>setSalary(e.target.value)} >
                            <option value="">Select Salary Range</option>    
                            <option value="under50k">Under $50K</option>
                            <option value="$50K - $60K">$50K - $60K</option>
                            <option value="$60K - $70K">$60K - $70K</option>                      
                            <option value="$70K - $80K">$70K - $80K</option>                                                
                            <option value="$80K - $90K">$80K - $90K</option>                       
                            <option value="$90K - $100K">$90K - $100K</option>
                            <option value="$100K - $125K">$100K - $125K</option>
                            <option value="$125K - $150K">$125K - $150K</option>
                            <option value="$150K - $175K">$150K - $175K</option>
                            <option value="$175K - $200K">$175K - $200K</option>
                            <option value="over200K">Over $200K</option>
                    </select>
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="location" className='w-full mediumResFont text-indigo-500 font-bold mb-1 '>Location</label>
                    <input type="text" required className='border rounded-md border-indigo-400 p-[6px] focus:outline-none' placeholder='Thailand' value={location} onChange={(e)=>setLocation(e.target.value)} />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="company-name" className='w-full mediumResFont text-indigo-500 font-bold mb-1 '>Company Name</label>
                    <input type="text" required className='border rounded-md border-indigo-400 p-[6px] focus:outline-none' placeholder='Smart Tech Solutions' value={companyName} onChange={(e)=>setCompanyName(e.target.value)} />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="company-desc" className='w-full mediumResFont text-indigo-500 font-bold mb-1'>Company Description</label>
                    <textarea type="text" required className='border rounded-md border-indigo-400 p-[6px] focus:outline-none' placeholder='What does you company do ?' rows={5} value={companyDescription} onChange={(e)=>setCompanyDescription(e.target.value)} />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="email" className='w-full mediumResFont text-indigo-500 font-bold mb-1 '>Contact Email</label>
                    <input type="email" required className='border rounded-md border-indigo-400 p-[6px] focus:outline-none' placeholder='abc123@gmail.com' value={contactEmail} onChange={(e)=>setContactEmail(e.target.value)} />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="phone" className='w-full mediumResFont text-indigo-500 font-bold mb-1 '>Contact Phone</label>
                    <input type="number" className='border rounded-md border-indigo-400 p-[6px] focus:outline-none' placeholder='555-555-5555' value={contactPhone} onChange={(e)=>setContactPhone(e.target.value)} />
                </div>
                <button className='w-full bg-indigo-500 text-white font-semibold p-2 rounded-md cursor-pointer'> Add Job </button>
            </form>
        </div>
    </div>

)}

export default AddJobsPage