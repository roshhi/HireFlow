import React from "react";
import Job from "./job";
import myJobs from '../jobs.json'
import ViewAllJobs from "./viewAllJobs";
import { useState } from "react";

const JobListings = ()=>{

    let [visibleCount,setVisibleCount] = useState(3);
    const limJobs = myJobs.slice(0, visibleCount);
    const loadMore = ()=>{
        setVisibleCount((prev)=>prev+3);
    }
    return (
        <>
            <p className=" flex-center text-[rgb(57,55,241)] bg-[rgb(236,244,255)]  font-bold text-[min(6.8vw,35px)] pt-3 pb-3">Browse Jobs</p>
            <div className=" grid grid-cols-1 gap-3 place-items-center md:grid-cols-2 xl:grid-cols-3 bg-[rgb(236,244,255)] w-full h-auto pt-3">
                {   limJobs.map((job) => { 
                    return (
                        <Job
                          key={job.id}               
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
    )
}

export default JobListings;