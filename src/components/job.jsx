import React from "react";
import { useState } from 'react'
import { FaMapMarker } from "react-icons/fa";
import { Link } from "react-router-dom";

const Job = ({id,type,title,desc,sal,loc})=>{
    
        let [showFullDesc,setFUllDesc] = useState(false);
        let myDesc = desc;
        if (!showFullDesc) {
            myDesc = myDesc.substring(0, 100) + "...";
        }    
    
    return(
        <div className="bg-white w-[90%] rounded-md p-4 mb-[30px] shadow-md h-[100%]">
            <p className="text-black smallResFont">{type}</p>
            <p className="text-black font-bold text-[min(6.5vw,20px)]">{title}</p>
            <p className="text-black smallResFont">{myDesc}</p>

            <button onClick={()=>setFUllDesc(!showFullDesc)} className="text-indigo-500 hover:text-[rgb(208,50,50)] hover:cursor-pointer "> 
                {showFullDesc?"Less":"More"} 
            </button>

            <p className="text-[rgb(57,55,241)] smallResFont border-b border-b-gray-200 pt-4 pb-4">{sal}</p>
            <p className="text-[rgb(208,50,50)] font-medium">
                <FaMapMarker className="inline mr-2"/>
                {loc}
            </p>
            <Link to={`/jobs/${id}`}>
                <div className="bg-[rgb(57,55,241)] rounded-sm p-1 flex-center mt-3 text-white">
                    <p>Read More</p>
                </div>
            </Link>
        </div>
    )
}

export default Job;


















