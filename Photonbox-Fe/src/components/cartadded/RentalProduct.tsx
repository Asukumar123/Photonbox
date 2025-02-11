import { rentalProducts } from "@/data/RentalProduct";

export default function RentalProduct() {
   
    return (
      <div className="bg-gray-100">
        <div className="max-w-6xl mx-auto p-4">
          <h1 className="text-2xl font-semibold mb-8 pt-12">Cart</h1>
  
          {/* Rental Products Section */}
          <div className="bg-white rounded-lg shadow-md p-4 mb-6">
          <div className="flex flex-row justify-between items-start mb-4">
            <h2 className="text-lg font-semibold mt-4">Rental Products</h2>
            <img src="/assets/Cartadded/Vector.png" className="mt-3 mr-3" alt="info" />
            </div>
            <div className="space-y-4">
              {rentalProducts.map((product) => (
                <div key={product.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center">
                    <img
                      alt={`Image of ${product.name}`}
                      className="w-16 h-16 mr-4"
                      src={product.imageUrl}
                      width="60"
                      height="60"
                    />
                    <div>
                      <p className="font-semibold">{product.name}</p>
                      <select className="mt-2 p-2 border rounded" title="Select Plan">
                        <option>{product.tenure} | {product.planName}</option>
                      </select>
                    </div>
                  </div>

                  <div className="text-right ml-3">
                    <p className="text-green-600 font-semibold">
                      ₹ {product.price}/month <span className="text-gray-500">+ GST</span>
                    </p>
                    <p className="text-green-500 text-sm">
                      -{product.discountPercentage}% OFF{" "}
                      <span className="line-through text-gray-500">₹ {product.originalPrice}/month</span>
                    </p>
                  </div>

                  <button className="bg-blue-500 text-white px-4 py-2 rounded-lg ml-4">Proceed to Rent</button>
                  <img src="/assets/Cartadded/ic_trash.svg"  alt="trash" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
  