'use client';

import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { z } from "zod";
import axios from 'axios';
import { toast } from 'react-hot-toast';

interface ContactPopupProps {
    isOpen: boolean;
    onClose: () => void;
    isPhoneEnter: (number: string) => void;
}

const formSchema = z.object({
    mobileNumber: z.string()
        .min(10, "Mobile number must be 10 digits")
        .max(10, "Mobile number must be 10 digits")
        .regex(/^[0-9]+$/, "Invalid mobile number"),
});

const ContactPopup = ({ isOpen, onClose, isPhoneEnter }: ContactPopupProps) => {
    const [mobileNumber, setMobileNumber] = useState('');
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setError(null);


        const result = formSchema.safeParse({ mobileNumber });
        if (!result.success) {
            setError(result.error.errors[0].message);
            return;
        }

        toast.promise(
            axios.post(`https://dev-app.photonboxx.com/api/v1/auth/send-otp`, { mobile: mobileNumber }),
            {
                loading: "Sending OTP...",
                success: () => {
                    isPhoneEnter(mobileNumber);
                    onClose();
                    return "OTP sent successfully!";
                },
                error: "Failed to send OTP. Please try again.",
            }
        );
    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="max-w-md rounded-xl p-6">
                <DialogHeader>
                    <DialogTitle className="text-xl font-semibold">Welcome to Photonboxx</DialogTitle>
                </DialogHeader>
                <p className="text-gray-500 text-sm">
                    Please enter your mobile number to login or signup
                </p>

                <form onSubmit={handleSubmit}>
                    <div className="relative flex items-center border border-gray-300 rounded-lg p-2 mt-3">
                        <Image src="/assets/icon/ic_flags_india.svg" alt="India Flag" width={24} height={24} />
                        <Input
                            type="tel"
                            placeholder="Mobile Number"
                            value={mobileNumber}
                            onChange={(e) => setMobileNumber(e.target.value)}
                            className="ml-2 flex-1 border-none focus:ring-0"
                        />
                    </div>
                    {error && <p className="text-red-500 text-xs mt-1">{error}</p>}

                    <Button type="submit" className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white">
                        Send OTP
                    </Button>
                </form>

                <p className="text-xs text-gray-500 mt-3 text-center">
                    By continuing, you agree to our{' '}
                    <a href="#" className="text-blue-500 underline">Terms & Conditions</a> and{' '}
                    <a href="#" className="text-blue-500 underline">Privacy Policy</a>.
                </p>
            </DialogContent>
        </Dialog>
    );
};

export default ContactPopup;
