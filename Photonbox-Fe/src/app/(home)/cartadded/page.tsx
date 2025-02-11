// Add this directive at the top of your file
"use client";

import Carousel from '@/components/custom_ui/Carousel'
import EnergyEfficient from '@/components/home/EnergyEfficient'
import EvolvingNeeds from '@/components/home/EvolvingNeeds'
import Hero from '@/components/home/Hero'
import Plans from '@/components/home/Plans'
import Pros from '@/components/home/Pros'
import RentalFeature from '@/components/home/RentalFeature'
import Technology from '@/components/home/Technology'

import React from 'react';
import RentalProduct from "@/components/cartadded/RentalProduct";
import RetailProduct from "@/components/cartadded/RetailProduct";
import  ProductFooter  from '@/components/product/ProductFooter';

const Page = () => {
  return (
    <div>
<div className="bg-gray-100 pb-28">
     <RentalProduct />
    <RetailProduct />
</div>
<ProductFooter />
</div>
  );
};

export default Page;









