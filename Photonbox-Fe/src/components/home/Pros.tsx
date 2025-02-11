import { pros } from '@/data/Pros'
import React from 'react'

const Pros = () => {
    return (
        <div className='bg-[#F4F6F8] p-[100px] flex flex-col gap-[30px] items-center m-auto justify-center '>

            <div className=' max-w-[1240px] w-full '>
                <div className='text-center'>
                    <h1 className=' font-bold text-[48px] leading-[80px]'>
                        Take The Power In Your Hands
                    </h1>
                    <h3 className='font-[300] text-[40px] leading-[60px]'>
                        With Easy Monthly Rentals
                    </h3>
                </div>
            </div>

            <div className=' bg-white w-full flex rounded-xl shadow-xl'>
                {
                    pros.map((obj, i) => (
                        <div key={i} className='w-[33.33%] flex flex-col items-center gap-[24px] my-[24px] border-r-2'>
                            <div>
                                <img src={obj.icon} alt="" />
                            </div>
                            <h1 className='text-[16px] font-[600] leading-[24px]'>
                                {obj.name}
                            </h1>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default Pros