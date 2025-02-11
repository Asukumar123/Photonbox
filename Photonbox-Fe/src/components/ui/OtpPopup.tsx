'use client';

import { useEffect, useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import toast from 'react-hot-toast';
import axios from 'axios';

interface OtpVerificationPopupProps {
    isOpen: boolean;
    onClose: () => void;
    phoneNumber: string;
}

export default function OtpVerificationPopup({ isOpen, onClose, phoneNumber }: OtpVerificationPopupProps) {
    const [otp, setOtp] = useState<string[]>(new Array(6).fill(""));
    const [timeLeft, setTimeLeft] = useState(30);


    const handleChange = (index: number, value: string) => {
        if (/^[0-9]?$/.test(value)) {
            const newOtp = [...otp];
            newOtp[index] = value;
            setOtp(newOtp);
        }
    };

    useEffect(() => {
        if (timeLeft > 0) {
            const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
            return () => clearTimeout(timer);
        }
    }, [timeLeft]);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();


        toast.promise(
            axios.post(`https://dev-app.photonboxx.com/api/v1/auth/signup`, { mobile: phoneNumber, otp }),
            {
                loading: "Sending OTP...",
                success: () => {
                    
                    return "Otp Match ";
                },
                error: "Wrong otp",
            }
        );
    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="max-w-md rounded-xl p-6">
                <DialogHeader>
                    <DialogTitle className="text-xl font-semibold">Please check your message</DialogTitle>
                </DialogHeader>
                <p className="text-gray-500 text-sm">
                    Enter the 6-digit verification code sent to <span className="font-medium">{phoneNumber}</span> ✏️
                </p>

                <form onSubmit={handleSubmit}>

                    <div className="flex justify-center gap-2 mt-4">
                        {otp.map((digit, i) => (
                            <Input
                                key={i}
                                type="text"
                                maxLength={1}
                                value={digit}
                                onChange={(e) => handleChange(i, e.target.value)}
                                className="w-12 h-12 text-center text-xl border rounded-lg"
                            />
                        ))}
                    </div>

                    <Button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white">
                        Proceed
                    </Button>

                </form>
                <p className="text-xs text-gray-500 mt-3 text-center">
                    Didn’t receive the code?{' '}
                    {timeLeft > 0 ? (
                        <span className="text-gray-400">Resend code in 00:{timeLeft < 10 ? `0${timeLeft}` : timeLeft}</span>
                    ) : (
                        <button onClick={() => setTimeLeft(30)} className="text-blue-500 underline">Resend code</button>
                    )}
                </p>
            </DialogContent>
        </Dialog>
    );
}
