import React from 'react'
import TY from "../assets/img/thankyou.svg";



export default function Thanks() {
    return (
    <div className='h-[440px] pt-10 flex flex-col justify-center items-center gap-5'>
        <img src={TY} alt="thank-you" />
        <p className='text-[30px] font-bold text-[#0a2546]'>
            Thank you!
        </p>
        <p className='text-[15px] text-center'>
            Thanks for confirming your subscription! We hope you have <br /> fun using our platform. If you ever need support, please <br /> feel free to email us at support@loremgaming.com.
        </p>
    </div>
    )
}
