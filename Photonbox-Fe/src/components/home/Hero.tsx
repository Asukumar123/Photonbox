import React from 'react'
import { Button } from '../ui/button'
import { Input } from "@/components/ui/input"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
const Hero = () => {
    return (
        <div>

            <div className="relative w-full h-screen bg-[url('/assets/Home/hero.jpg')] bg-cover bg-center flex items-center justify-center">
                <div className="max-w-7xl w-full px-6 gap-8 ">

                    {/* Left Side Text */}
                    <div className="text-black gap-4 flex flex-col  ">
                        <h2 className="text-3xl md:text-[40px] font-semibold">
                            Why Buy An Inverter?
                        </h2>
                        <h2 className='text-3xl md:text-[40px] pb-8 font-semibold'>
                            When You Can Just <span className="text-blue-500">Rent It</span>
                        </h2>
                    </div>

                    {/* Form Section */}
                    <div className="bg-white p-6 md:py-8 md:px-10 rounded-2xl shadow-lg w-full max-w-xl">
                        <h3 className="text-lg font-semibold text-gray-800 mb-4">
                            Access your 15-Day Free Trial Now
                        </h3>
                        <form className="space-y-4">
                            <Input placeholder='Name' />
                            <Input placeholder='Phone Number' />
                            <Input placeholder='Email' />
                            <Select >
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Theme" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="light">Light</SelectItem>
                                    <SelectItem value="dark">Dark</SelectItem>
                                    <SelectItem value="system">System</SelectItem>
                                </SelectContent>
                            </Select>

                            <Button variant='primary'> Submit</Button>
                        </form>
                    </div>
                    {/* bottom section  */}

                </div >
            </div >
            <div className='bg-[#F4F6F8] text-center text-[#637381] text-[16px] leading-[24px] font-[500] py-2'>
                RENTALS STARTING @ ₹ 999/MONTH
            </div>
        </div>
    )
}

export default Hero
