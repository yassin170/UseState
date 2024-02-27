import React from 'react'



export default function Finish() {
    return (
        <div className='h-[440px]'>
            <div className='h-[440px] w-[100%] p-7 flex flex-col gap-8'>
                <div className='flex flex-col gap-1'>
                    <h1 className='text-[2em] font-bold text-[#0a2546]'>Finishing up</h1>
                    <p className='text-[0.9em] text-[#9d9c9c]'>Double-check everything looks OK before confirming.</p>
                </div>
                <div className='h-[200px] w-[440px] flex justify-center items-center'>
                    <div className='h-[90%] w-[90%]'>
                        <div className='h-[66%] w-[100%] flex flex-col justify-center gap-3'>
                            <div className='flex justify-between items-center'>
                                <div>
                                    <p className='text-blue-800 font-bold text-[18px]'>Pro(Monthly)</p>
                                    <p className='underline text-[14px]'>change</p>
                                </div>
                                <div>
                                    <p className='text-blue-800 font-bold'>15$/mo</p>
                                </div>
                            </div>
                            <div className='h-[10%] w-[100%] flex justify-center items-center'>
                                <div className='h-[10%] w-[90%] bg-gray-500'></div>
                            </div>
                            <div className='flex justify-between'>
                                <p className='text-[14px]'>Online service</p>
                                <p className='text-blue-800 font-bold text-[14px]'>+1$/mo</p>
                            </div>
                        </div>
                        <div className='h-[34%] w-[100%] flex justify-between items-center'>
                            <p className='text-[14px]'>Total (per mont)</p>
                            <p className='text-blue-800 font-bold text-[17px]'>16$/mo</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
