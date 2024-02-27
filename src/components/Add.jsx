import React from 'react'



export default function Add() {
    return (
        <div className='h-[440px]'>
            <div className='h-[440px] w-[100%] p-7 flex flex-col gap-8'>
                <div className='flex flex-col gap-1'>
                    <h1 className='text-[2em] font-bold text-[#0a2546]'>Pick add-ons</h1>
                    <p className='text-[0.9em] text-[#9d9c9c]'>Add-ons help enhance your gaming experience.</p>
                </div>
                <div className='h-[240px] w-[440px] flex flex-col gap-3'>
                    <div className='h-[30%] w-[100%] border-solid border-gray-400 border-[2px] rounded-xl flex hover:border-purple-700'>
                        <div className='h-[100%] w-[13%] flex justify-center items-center'>
                            <input type="checkbox" className="checkbox h-4 w-4 rounded-sm border-[2px] border-gray-400 checked:border-none [--chkbg:theme(colors.purple.800)] [--chkfg:white]" />
                        </div>
                        <div className='h-[100%] w-[70%] flex flex-col justify-center'>
                            <p className='text-[17px] text-[#0a2546] font-bold'>
                                Online service
                            </p>
                            <p className='text-[14px]'>
                                Access to multiplayer games
                            </p>
                        </div>
                        <div className='h-[100%] w-[17%] flex items-center'>
                            <p className='text-purple-950 font-semibold'>
                                +10$/yr
                            </p>
                        </div>
                    </div>

                    <div className='h-[30%] w-[100%] border-solid border-gray-400 border-[2px] rounded-xl flex hover:border-purple-700'>
                        <div className='h-[100%] w-[13%] flex justify-center items-center'>
                            <input type="checkbox" className="checkbox h-4 w-4 rounded-sm border-[2px] border-gray-400 checked:border-none [--chkbg:theme(colors.purple.800)] [--chkfg:white]" />
                        </div>
                        <div className='h-[100%] w-[70%] flex flex-col justify-center'>
                            <p className='text-[17px] text-[#0a2546] font-bold'>
                                Larger storage
                            </p>
                            <p className='text-[14px]'>
                                Extrai 1TB of cloud save
                            </p>
                        </div>
                        <div className='h-[100%] w-[17%] flex items-center'>
                            <p className='text-purple-950 font-semibold'>
                                +20$/yr
                            </p>
                        </div>
                    </div>

                    <div className='h-[30%] w-[100%] border-solid border-gray-400 border-[2px] rounded-xl flex hover:border-purple-700'>
                        <div className='h-[100%] w-[13%] flex justify-center items-center'>
                            <input type="checkbox" className="checkbox h-4 w-4 rounded-sm border-[2px] border-gray-400 checked:border-none [--chkbg:theme(colors.purple.800)] [--chkfg:white]" />
                        </div>
                        <div className='h-[100%] w-[70%] flex flex-col justify-center'>
                            <p className='text-[17px] text-[#0a2546] font-bold'>
                                Customizable Profile
                            </p>
                            <p className='text-[14px]'>
                                Custom theme on your profil
                            </p>
                        </div>
                        <div className='h-[100%] w-[17%] flex items-center'>
                            <p className='text-purple-950 font-semibold'>
                                +20$/yr
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
