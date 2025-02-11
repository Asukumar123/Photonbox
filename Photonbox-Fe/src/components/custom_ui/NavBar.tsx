'use client';

import Image from 'next/image';
import { ShoppingCart, User } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { NAV_LINKS, NavLink } from '@/data/navbar';
import OtpPopup from '../ui/ContactPopup';
import ContactPopup from '../ui/ContactPopup';
import OtpVerificationPopup from '../ui/OtpPopup';


const fetchProducts = async (): Promise<NavLink[]> => {
    return [
        { name: 'Product 1', href: '/products/1' },
        { name: 'Product 2', href: '/products/2' }
    ];
};

export default function Navbar() {
    const [products, setProducts] = useState<NavLink[]>([]);

    const [isOtpOpen, setIsOtpOpen] = useState(false);
    const [isOtpVerificationOpen, setIsOtpVerificationOpen] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState("");
    useEffect(() => {
        fetchProducts().then(setProducts);
    }, []);

    return (
        <>
            <nav className="flex justify-between items-center p-4 shadow-md">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    {/* <Image src="" alt="Logo" /> */}
                    <span className="text-lg font-semibold">photonboxx.</span>
                </div>

                {/* Navigation Links */}
                <div className='flex items-center gap-6'>
                    <ul className="hidden md:flex gap-6 text-sm font-medium">
                        <li className="relative group">
                            <button className="hover:text-blue-500">Products ▾</button>
                            <div className="absolute left-0 hidden group-hover:block bg-white shadow-md p-2 z-[999] rounded-lg">
                                {products.map((product, index) => (
                                    <Link key={index} href={product.href} className="block px-4 py-2 hover:bg-gray-100">{product.name}</Link>
                                ))}
                            </div>
                        </li>
                        {NAV_LINKS.map((link, index) => (
                            <li key={index}><Link href={link.href} className="hover:text-blue-500">{link.name}</Link></li>
                        ))}
                    </ul>

                    {/* Icons & CTA Button */}
                    <div className="flex items-center gap-4">
                        <ShoppingCart className="w-5 h-5 cursor-pointer" />
                        <User className="w-5 h-5 cursor-pointer" />
                        <button className="px-4 py-2 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-500 hover:text-white">
                            Request A Call Back
                        </button>
                        <button onClick={() => setIsOtpOpen(true)} className="px-4 py-2 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-500 hover:text-white">
                            Login
                        </button>
                    </div>
                </div>

            </nav>
            <ContactPopup isOpen={isOtpOpen} onClose={() => setIsOtpOpen(false)} isPhoneEnter={(number) => {
                setPhoneNumber(number);
                setIsOtpVerificationOpen(true);
            }} />

            <OtpVerificationPopup
                isOpen={isOtpVerificationOpen}
                onClose={() => setIsOtpVerificationOpen(false)}
                phoneNumber={phoneNumber}
            />
        </>
    );
}
