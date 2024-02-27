import React from 'react'
import Advenced from "../assets/img/advenced.svg";
import Arcade from "../assets/img/arcade.svg";
import Pro from "../assets/img/pro.svg";
import { useState } from 'react';



export default function SelectPlan() {

    const [tog, setTog] = useState(0)


    return (
        <div className='h-[440px]'>
            <div className='h-[440px] w-[100%] p-7 flex flex-col gap-8'>
                <div className='flex flex-col gap-1'>
                    <h1 className='text-[2em] font-bold text-[#0a2546]'>Select your plan</h1>
                    <p className='text-[0.9em] text-[#9d9c9c]'>You have the option of monthly or yearly billing</p>
                </div>
                <div className='h-[240px] w-[440px]'>
                    <div className='h-[77%] w-[100%] flex gap-6'>
                        <div className='h-[150px] w-[130px] border-gray-400 border-solid border-[2px] rounded-2xl hover:border-purple-700'>
                            <div className='h-[65%] w-[100%] pt-4 ps-3'>
                                <img src={Arcade} alt="icon-arcade" />
                            </div>
                            <div className='ps-3'>
                                <p className='text-[17px] font-bold text-[#0a2546]'>Arcade</p>
                                <p className='text-[16px] font-bold text'>$9/mo</p>
                            </div>      
                        </div>
                        <div className='h-[150px] w-[130px] border-gray-400 border-solid border-[2px] rounded-2xl hover:border-purple-700'>
                            <div className='h-[65%] w-[100%] pt-4 ps-3'>
                                <img src={Advenced} alt="icon-advenced" />
                            </div>
                            <div className='ps-3'>
                                <p className='text-[17px] font-bold text-[#0a2546]'>Advenced</p>
                                <p className='text-[16px] font-bold text'>$12/mo</p>
                            </div>   
                        </div>
                        <div className='h-[150px] w-[130px] border-gray-400 border-solid border-[2px] rounded-2xl hover:border-purple-700'>
                            <div className='h-[65%] w-[100%] pt-4 ps-3'>
                                <img src={Pro} alt="icon-pro" />
                            </div>
                            <div className='ps-3'>
                                <p className='text-[17px] font-bold text-[#0a2546]'>Pro</p>
                                <p className='text-[16px] font-bold text'>$15/mo</p>
                            </div>   
                        </div>
                    </div>
                    <div className='h-[22%] w-[100%] bg-[#edf3fc] flex justify-center items-center gap-16'>
                        <p>
                            Monthly
                        </p>
                            <input type="checkbox" className="toggle" />
                        <p>
                            Yearly
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
