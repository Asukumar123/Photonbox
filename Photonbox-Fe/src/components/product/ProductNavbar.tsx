import React from 'react'

const ProductNavbar = () => {
  return (
    
    <div className="w-full max-w-4xl mx-[90px] p-4 pt-10 mb-3">
    <h1 className="text-2xl font-bold mb-4">Products</h1>
    <div className="flex space-x-4">
        <button className="px-4 py-2 bg-blue-600 text-white rounded shadow">All</button>
        <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded">Rent</button>
        <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded">Buy</button>
    </div>
</div>

  
  )
}

export default ProductNavbar;
