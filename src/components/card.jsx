import React from 'react'

const Card = ({title,subtitle,btnText,cardBg,btnBg}) => {
  return (
    <>
        <div className={`h-[80%] w-[90%] p-[20px] flex flex-col justify-center ${cardBg} rounded-lg m-2 lg:w-[40%] lg:p-[25px] shadow-md`}>
            <p className='text-black text-[min(6.8vw,30px)] font-bold'>{title}</p>
            <p className='text-black smallResFont'>{subtitle}</p>
            <div className={`${btnBg} w-[40%] flex-center p-2 rounded-md text-[min(3.5vw,15px)] mt-2 lg:w-[35%] 2xl:w-[20%] `} >
                <p>{btnText}</p>
            </div>
        </div>
    </>
  )
}

export default Card ;