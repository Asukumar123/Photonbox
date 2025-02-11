

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









