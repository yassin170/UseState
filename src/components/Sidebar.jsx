import React from 'react'

import "./Sidebar.css";



export default function Sidebar(props) {
    
    return (
        <div className='Bg h-[90%] w-[90%] rounded-3xl bg-cover bg-no-repeat flex justify-center pt-8'>
            <div className='h-[58%] w-[80%] flex flex-col gap-6'>
                <div className='flex gap-6 items-center'>
                    <div className={`h-[40px] w-[40px] rounded-full border-white border-[2px] text-white font-extrabold flex justify-center items-center
                    ${props.page == 1 ?"bg-[#b6dcfa] text-[#3f35fe]":''}`}>
                        1
                    </div>
                    <div>
                        <p className='text-[10px] font-semibold'>STEP 1</p>
                        <p className='text-[15px] font-semibold text-white'>YOUR INFO</p>
                    </div>
                </div>
                <div className='flex gap-6 items-center'>
                    <div className={`h-[40px] w-[40px] rounded-full border-white border-[2px] text-white font-extrabold flex justify-center items-center
                    ${props.page == 2 ?"bg-[#b6dcfa] text-[#3f35fe] border-none":''}`}>
                        2
                    </div>
                    <div>
                        <p className='text-[10px] font-semibold'>STEP 2</p>
                        <p className='text-[15px] font-semibold text-white'>SELECT PLAN</p>
                    </div>
                </div>
                <div className='flex gap-6 items-center'>
                    <div className={`h-[40px] w-[40px] rounded-full border-white border-[2px] text-white font-extrabold flex justify-center items-center
                    ${props.page == 3 ?"bg-[#b6dcfa] text-[#3f35fe] border-none":''}`}>
                        3
                    </div>
                    <div>
                        <p className='text-[10px] font-semibold'>STEP 3</p>
                        <p className='text-[15px] font-semibold text-white'>ADD-ONS</p>
                    </div>
                </div>
                <div className='flex gap-6 items-center'>
                    <div className={`h-[40px] w-[40px] rounded-full border-white border-[2px] text-white font-extrabold flex justify-center items-center
                    ${props.page == 4 ?"bg-[#b6dcfa] text-[#3f35fe] border-none":''}`}>
                        4
                    </div>
                    <div>
                        <p className='text-[10px] font-semibold'>STEP 4</p>
                        <p className='text-[15px] font-semibold text-white'>SUMMARY</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
