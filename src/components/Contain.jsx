import React from 'react';
import Sidebar from './Sidebar';
import Personal from './Personal';
import SelectPlan from './SelectPlan';
import Add from './Add';
import Finish from './Finish';
import Thanks from './Thanks';
import { useState } from 'react';


export default function Contain() {

    const [page, setPage] = useState(1);
    const [disabled, setDisabled] = useState(0);
    // const [count, setCount] = useState(0); 
    




    return (
        
        <div className='h-[525px] w-[900px] bg-white rounded-3xl flex'>
            <div className='h-[100%] w-[30%] rounded-l-3xl flex justify-center items-center'>
                <Sidebar page={page}/>
            </div>
            <div className='h-[100%] w-[70%] rounded-r-3xl flex ps-10 pt-8'>
                <div className='h-[400px] w-[80%]'>
                    {
                        page == 1 &&
                        <Personal setDisabled={setDisabled} />
                    } 
                    {
                        page == 2 && 
                        <SelectPlan />
                    }
                    {
                        page == 3 &&
                        <Add />
                    }
                    {
                        page == 4 &&
                        <Finish />
                    }
                    {
                        page == 5 &&
                        <Thanks />
                    }
                    <div className={`flex ${page > 1 ? "justify-between" : "justify-end"} items-end`}> {
                        page < 5  && page > 1 ? 
                        <button className="text-blue-950 bg-white border-none pb-4 ps-8 font-semibold" onClick={()=>setPage(page - 1)}>Go Back</button> :''       
                    }
                    {page>0 && page<5? 
                    page==1 && disabled == 1?
                    <button disabled className={`btn bg-blue-950 text-white hover:bg-blue-900 border-none`} onClick={()=>setPage(page + 1)}>Next Step</button> :
                        <button className={`btn bg-blue-950 text-white hover:bg-blue-900 border-none`} onClick={()=>setPage(page + 1)}>
                            {page == 4 ? "Confirm" : "Next Step"}</button> :
                    ''}
                    </div>
                </div>
            </div>
        </div>
    )
}
