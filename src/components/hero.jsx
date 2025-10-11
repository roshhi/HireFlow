import React from "react";

const Hero = ({title= "Become a React Dev", subtitle= "Find the React job that fits yours skill set" })=>{
    
    return (
        <>
            <div className="w-full flex-center flex-col h-[25vh] bg-indigo-500">
                <p className="text-[min(7.5vw,60px)] font-bold">{title}</p>
                <p className="text-[min(5vw,18px)]">{subtitle}</p>
            </div>
        </>
    )
}

export default Hero;