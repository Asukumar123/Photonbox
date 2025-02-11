'use client';

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { plans } from "@/data/Plan";


const Plans = () => {
    return (
        <div className="flex flex-col bg-[#F4F6F8] items-center gap-10 py-10">
            <h2 className="text-2xl font-semibold mb-6">Rental Plans</h2>
            <div className="flex flex-col md:flex-row gap-6  max-w-[1240px] w-full">
                {plans.map((plan, i) => (
                    <Card
                        key={i}
                        className={cn(
                            "p-6 rounded-2xl shadow-md transition-all w-full",
                            plan.preferred ? " -translate-y-10 shadow-2xl bg-white" : "bg-white"
                        )}
                    >
                        <CardContent className="flex flex-col items-center gap-4">
                            {plan.preferred && (
                                <span className="bg-blue-500 text-white text-xs px-3 py-1 rounded-full uppercase font-bold">
                                    Most Preferred
                                </span>
                            )}
                            <h3 className="text-lg font-bold">{plan.name}</h3>
                            <span className="text-4xl">{plan.icon}</span>
                            <p className="text-xl font-bold">
                                ₹ {plan.price}/month <span className="text-sm">+ GST</span>
                            </p>
                            <p className="text-gray-500 line-through text-sm">
                                ₹ {plan.originalPrice}/month
                            </p>
                            <div className="flex justify-between w-full text-center">
                                <div className="flex-1 p-2 border rounded-md">
                                    <p className="text-green-600 text-sm font-bold">SAVE</p>
                                    <p className="text-lg font-semibold">{plan.save}%</p>
                                </div>
                                <div className="flex-1 p-2 border rounded-md">
                                    <p className="text-gray-600 text-sm font-bold">TENURE</p>
                                    <p className="text-lg font-semibold">{plan.tenure}</p>
                                </div>
                            </div>
                            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md">
                                Select Plan
                            </Button>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}

export default Plans

