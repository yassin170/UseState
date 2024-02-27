import React from 'react'



export default function Personal() {
    return (
        <div className='h-[440px]'>
            <div className='h-[440px] w-[100%] p-7 flex flex-col gap-8'>
                <div className='flex flex-col gap-1'>
                    <h1 className='text-[2em] font-bold text-[#0a2546]'>Personal info</h1>
                    <p className='text-[0.9em] text-[#9d9c9c]'>Please provide your name, email adress and phone number.</p>
                </div>
                <div className='flex flex-col gap-4'>
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text text-black text-sm font-semibold">Your name is :</span>
                        </div>
                        <input type="text" placeholder="Vingt-Six" className="ps-5 bg-white text-black input input-bordered border-gray-400 border-[2px] h-[40px] w-[425px] rounded-md focus:outline-purple-700" />
                    </label>
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text text-black text-sm font-semibold">Your email is :</span>
                        </div>
                        <input type="text" placeholder="vingt_six@gmail.com" className="ps-5 bg-white text-black input input-bordered border-gray-400 border-[2px] h-[40px] w-[425px] rounded-md focus:outline-purple-700" />
                    </label>
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text text-black text-sm font-semibold">Your phone number is :</span>
                        </div>
                        <input type="text" placeholder="e.g.+1 234 567 890" className="ps-5 bg-white text-black input input-bordered border-gray-400 border-[2px] h-[40px] w-[425px] rounded-md focus:outline-purple-700" />
                    </label>
                </div>
            </div>
        </div>
    )
}
