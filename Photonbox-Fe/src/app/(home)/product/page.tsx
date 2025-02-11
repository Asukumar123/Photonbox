

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