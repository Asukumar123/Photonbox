import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { comparisons } from "@/data/RentalFeature"


import React from 'react'

const RentalFeature = () => {
    return (
        <div className="flex items-center justify-center m-auto flex-col bg-[#F4F6F8] ">
            <Table className=" w-full max-w-[1240px] justify-center m-auto bg-white ">

                <TableHeader>
                    <TableRow className="">
                        <TableHead className="w-[25%]"> </TableHead>
                        <TableHead className="w-[33.33%]">
                            <div className=" flex items-center m-auto justify-center ">
                                <img src="/assets/Home/PB.svg" alt="" />
                            </div>
                        </TableHead>
                        <TableHead className="w-[33.33%]">
                            <div className=" flex items-center m-auto justify-center ">
                                <img src="/assets/Home/PB.svg" alt="" />
                            </div>
                        </TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        comparisons.map((obj, i) => (
                            <TableRow key={i}>
                                <TableCell className="font-bold text-[16px] p-6">{obj.title}</TableCell>
                                <TableCell className=" p-6 text-center text-[20px] text-primary">{obj.photonBoxx}</TableCell>
                                <TableCell className=" p-6 text-center text-[20px] text-primary" >{obj.otherInverters}</TableCell>
                            </TableRow>
                        ))
                    }

                </TableBody>
            </Table>
        </div>

    )
}

export default RentalFeature