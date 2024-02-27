import React from 'react'
import { useState,useEffect } from 'react';



export default function Personal(props) {


    const [name, setName] = useState("");
    const [mail, setMail] = useState("");
    const [number, setNumber] = useState("");
    let change =(e, salut)=>{
        salut(e.target.value)
    }
    useEffect(() => {
        name == '' || mail == '' || number == '' ? props.setDisabled(1): props.setDisabled(0)
    }, [name,mail,number])
    

    


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
                            <span className="label-text text-black text-sm font-semibold">Your name is : {name}</span>
                        </div>
                        <input type="text" placeholder="Vingt-Six" onChange={(event)=>{change(event, setName)}} className="ps-5 bg-white text-black input input-bordered border-gray-400 border-[2px] h-[40px] w-[425px] rounded-md focus:outline-purple-700" />
                    </label>
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text text-black text-sm font-semibold">Your email is : {mail}</span>
                        </div>
                        <input type="text" placeholder="vingt_six@gmail.com" onChange={(event)=>{change(event, setMail)}} className="ps-5 bg-white text-black input input-bordered border-gray-400 border-[2px] h-[40px] w-[425px] rounded-md focus:outline-purple-700" />
                    </label>
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text text-black text-sm font-semibold">Your phone number is : {number}</span>
                        </div>
                        <input type="text" placeholder="e.g.+1 234 567 890" onChange={(event)=>{change(event, setNumber)}} className="ps-5 bg-white text-black input input-bordered border-gray-400 border-[2px] h-[40px] w-[425px] rounded-md focus:outline-purple-700" />
                    </label>
                </div>
            </div>
        </div>
    )
}
