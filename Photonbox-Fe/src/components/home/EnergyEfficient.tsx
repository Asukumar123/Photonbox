import { Card, CardContent } from "@/components/ui/card";
import { ShieldCheck, Bolt, IndianRupee } from "lucide-react";

const EnergyEfficient = () => {
    return (
        <div>
            <section className="w-full pt-[100px] pb-[50px] flex justify-center items-center   py-10 px-4">
                <div className="max-w-[1240px] w-full flex justify-between text-center md:text-left">
                    {/* Heading Section */}
                    <div>
                        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
                            Most Energy Efficient <br /> Inverter/UPS
                        </h2>
                    </div>
                    {/* Feature Cards */}
                    <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
                        <Card className="flex flex-col items-center text-center shadow-none border-none">
                            <CardContent className="flex flex-col items-center">
                                <IndianRupee className="w-10 h-10 text-gray-700" />
                                <p className=" text-primary font-[600] mt-2">
                                    20% Cost Saving* <br /> In Each Cycle
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="flex flex-col items-center text-center shadow-none border-none">
                            <CardContent className="flex flex-col items-center">
                                <ShieldCheck className="w-10 h-10 text-gray-700" />
                                <p className=" text-primary font-[600] mt-2">
                                    Years of Consistent <br /> Backup Time
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="flex flex-col items-center text-center shadow-none border-none">
                            <CardContent className="flex flex-col items-center">
                                <Bolt className="w-10 h-10 text-gray-700" />
                                <p className="text-primary font-[600] mt-2">
                                    Minimal Self <br /> Discharge
                                </p>
                            </CardContent>
                        </Card>
                    </div>


                </div>
            </section>
        </div>
    )
}

export default EnergyEfficient
