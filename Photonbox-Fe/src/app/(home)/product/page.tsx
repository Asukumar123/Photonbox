
import Carousel from '@/components/custom_ui/Carousel'
import EnergyEfficient from '@/components/home/EnergyEfficient'
import EvolvingNeeds from '@/components/home/EvolvingNeeds'
import Hero from '@/components/home/Hero'
import Plans from '@/components/home/Plans'
import Pros from '@/components/home/Pros'
import RentalFeature from '@/components/home/RentalFeature'
import Technology from '@/components/home/Technology'

import React from 'react';
import ProductNavbar from '@/components/product/ProductNavbar';
import ProductCard from '@/components/product/ProductCard';
import ProductFooter from '@/components/product/ProductFooter';

const Page = () => {
  return (
<div>
<div className='bg-[#F4F6F8]'>
    <ProductNavbar />
    <ProductCard />
</div>  
  <ProductFooter />
</div>
  );
};

export default Page;