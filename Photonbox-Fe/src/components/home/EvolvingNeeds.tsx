import { needs } from '@/data/Need'
import React from 'react'

const EvolvingNeeds = () => {

    return (
        <div className='max-w-[1240px] flex items-center m-auto shadow-2xl bg-white'>
            <div className="w-full flex text-center flex-col gap-[60px] justify-center  py-[50px] px-[100px]">

                <h1 className='font-[500] text-[40px] leading-[64px] text-primary'>
                    Designed to suit your evolving needs
                </h1>

                <div className='flex justify-between'>
                    <div className='w-[50%] flex flex-col gap-[50px]'>
                        {
                            needs.map((obj, i) => (
                                <div key={i} className='w-full flex justify-between items-center pl-[40px] bg-[#F4F6F8] '>
                                    <h1 className='text-[24px] font-[700]'>{obj.name}</h1>
                                    <img src={obj.icon} alt="" />
                                </div>
                            ))
                        }
                    </div>
                    <div className='w-[50%]'>
                        <img src="/assets/Home/OEM.svg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EvolvingNeeds