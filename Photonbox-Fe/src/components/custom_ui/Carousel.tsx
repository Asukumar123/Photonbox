'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
    {
        src: '/image1.jpg',  
        alt: 'Man working with daughter',
    },
    {
        src: '/image2.jpg',  
        alt: 'Gamer celebrating',
    },
];

export default function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="relative max-w-4xl mx-auto p-4">
            <h2 className="text-2xl font-semibold mb-4">Live Life Uninterrupted & Hassle Free</h2>
            <div className="flex items-center gap-4">
                <button
                    onClick={prevSlide}
                    className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
                >
                    <ChevronLeft />
                </button>
                <div className="relative w-full h-64 md:h-80 lg:h-96 overflow-hidden rounded-lg">
                    <Image
                        src={images[currentIndex].src}
                        alt={images[currentIndex].alt}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg"
                    />
                </div>
                <button
                    onClick={nextSlide}
                    className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600"
                >
                    <ChevronRight />
                </button>
            </div>
        </div>
    );
}
