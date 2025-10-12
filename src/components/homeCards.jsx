import React from 'react'
import Card from "./card";

const HomeCards = () => {
  return (
    <>
        <div className='flex justify-center items-center w-full border h-auto bg-white flex-col pt-4 pb-4 md:flex-row md:p-8 text-white'>
            <Card title={"For Developers"} subtitle={"Quickly browse our React jobs and start your career today"} btnText={"Browse Jobs"} cardBg={'bg-[rgb(240,241,243)]'} btnBg={'bg-black'} />
            <Card title={"For Employers"} subtitle={"List your job to find the perfect developer for the desire role"} btnText={"Add job"} cardBg={'bg-[rgb(217,224,255)]'} btnBg={'bg-[rgb(78,78,241)]'} />
        </div>
    </>
  )
}

export default HomeCards;