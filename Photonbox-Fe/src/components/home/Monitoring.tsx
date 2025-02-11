import Image from 'next/image'
import React from 'react'
import { monitoringFeatures } from '@/data/montoringFeature';
const Monitoring = () => {
    return (
        <section className="w-full flex justify-center bg-white mt-[100px] pt-10 px-4">
            <div className="max-w-[1240px] w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

                <div className="flex justify-start ">
                    <img src="/assets/Home/mobile-mockup.svg" alt="Mobile Monitoring UI" className='w-[80%]' />
                </div>

                <div className='flex flex-1 flex-col gap-[12px]'>
                    <div className='flex flex-col gap-4'>
                        <h2 className="text-2xl md:text-[40px] leading-[36px] font-light text-gray-900">
                            Real Time
                        </h2>
                        <h2 className='text-2xl md:text-[40px] leading-[36px] font-semibold text-gray-900'>
                            <span className="font-bold">Monitoring</span>
                        </h2>
                    </div>
                    <div className="mt-6 space-y-[36px]">
                        {monitoringFeatures.map((item, index) => (
                            <div key={index} className="flex items-start space-x-6">
                                <img src={"/assets/Home/teenyicons_shield-tick-solid.svg"} alt="" />
                                <div>
                                    <h3 className="text-[24px] font-bold text-gray-900 leading-[36px]">{item.title}</h3>
                                    <p className="text-gray-600 text-sm">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Monitoring
