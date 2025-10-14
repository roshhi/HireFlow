import React from "react";
import Job from "./job";
import ViewAllJobs from "./viewAllJobs";
import Spinner from "./spinner";
import { useState,useEffect } from "react";

const JobListings = ( {isHome = false} )=>{

    const [jobs,setJobs] = useState([]);
    const [loading,setloading] = useState(true);

    useEffect( ()=>{
        const fetchJobs = async() => {
            try {
                const url = "/api/jobs";
                const res = await fetch (url)
                const data = await res.json();
                setJobs(data.reverse()); // show newly added jobs first
            } catch (error) {
                console.log("Oops Error Fetching Data !!!",error)
            } finally{
                setloading(false);
            }
        }
        fetchJobs();
    },[])

    const initialCount = isHome ? 6 : 9;
    let [visibleCount,setVisibleCount] = useState(initialCount);
    const limJobs = jobs.slice(0, visibleCount);
    const loadMore = ()=>{
        setVisibleCount((prev)=>prev+3);
    }

    return (
        <>
            <p className=" flex-center text-[rgb(57,55,241)] bg-[rgb(236,244,255)]  font-bold text-[min(6.8vw,35px)] pt-[25px] pb-[45px]">
                {isHome?'Recent Jobs':'Browse Jobs'}
            </p>

            {loading ? <Spinner loading={loading}/> :
            <>
                <div className=" grid grid-cols-1 gap-3 place-items-center md:grid-cols-2 xl:grid-cols-3 bg-[rgb(236,244,255)] w-full h-auto pt-3">
                   {limJobs.map((job) => { 
                        return (
                            <Job
                            key={job.id}
                            id={job.id}                              
                            type={job.type}
                            title={job.title}
                            desc={job.description}
                            sal={job.salary}
                            loc={job.location}
                            />
                        )
                    })}
                </div>
                
                <ViewAllJobs onClick = {loadMore}/>
            </>    
            }
        </> 
    )
}

export default JobListings;