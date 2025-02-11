import { monitoringFeatures } from '@/data/montoringFeature'
import React from 'react'

const Technology = () => {
    return (
        <div className='bg-black my-[100px] md:py-[50px]'>
            <h1 className='text-white text-[48px] font-[700] text-center'>
                Our Technology
            </h1>

            <div className='max-w-[1440px] flex justify-between items-center  m-auto'>
                <div className='w-[50%]'>
                    <img src="/assets/Home/battery_pack.svg" className='h-full w-full' alt="" />
                </div>
                <div className=' w-[40%]'>
                    <h1 className='font-bold text-[48px] pr-[100px] text-white'>
                        State of the Art Lithium - Ion Technology
                    </h1>
                    <p className='text-[#919EAB] text-[16px] leading-[24px] '>
                        Experience unparalleled efficiency and reliability with our advanced Lithium-Ion technology. Engineered for optimal performance, our inverters ensure long-lasting power and superior energy storage.
                    </p>
                </div>
            </div>

            <div className='max-w-[1440px] flex justify-between items-center  m-auto'>
                <div className=' w-[40%]'>
                    <h1 className='font-bold text-[48px]   text-white'>
                        State of the Art Lithium - Ion Technology
                    </h1>
                    <p className='text-[#919EAB] text-[16px] leading-[24px] '>
                        Experience unparalleled efficiency and reliability with our advanced Lithium-Ion technology. Engineered for optimal performance, our inverters ensure long-lasting power and superior energy storage.
                    </p>
                </div>
                <div className='w-[50%]'>
                    <img src="/assets/Home/ec.svg" className='h-full w-full' alt="" />
                </div>

            </div>
            <div className='max-w-[1440px] flex  justify-between   m-auto'>
                <div className='w-[40%]'>
                    <img src="/assets/Home/mobilemock.svg" className='h-full w-full' alt="" />
                </div>
                <div className='flex flex-col w-[50%] justify-center gap-10'>

                    {monitoringFeatures.map((item, index) => (
                        <div key={index} className="flex gap-4 items-start space-x-6">
                            <img src={"/assets/Home/teenyicons_shield-tick-solid.svg"} alt="" />
                            <div>
                                <h3 className="text-[24px] font-bold text-white leading-[36px]">{item.title}</h3>
                                <p className="text-gray-600 text-sm">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Technology