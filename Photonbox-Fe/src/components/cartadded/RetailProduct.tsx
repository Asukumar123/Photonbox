import { Products as products} from "@/data/RetailProduct";

export default function RetailProduct() {
  
    return (
      <div className="max-w-6xl mx-auto p-4">
        <div className="bg-red rounded-lg shadow-md p-4">

        <div className="flex flex-row justify-between items-start mb-4">
        <h2 className="text-lg font-semibold mt-4">Retail Products</h2>
     
    
        <button className="bg-blue-500 text-white px-5 py-3 rounded-lg ml-[700px] mb-2 inline">
          Proceed to Buy
        </button>
     <img src="/assets/Cartadded/Vector.png" alt="info" className="mt-3" />
        <div>
        </div>
      </div>
          <div className="space-y-4">
            {products.map((product) => (
              <div key={product.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center">
                  <img
                    alt={`Image of ${product.name}`}
                    className="w-16 h-16 mr-4"
                    src={product.image}
                    width="60"
                    height="60"
                  />
                  <p className="font-semibold">{product.name}</p>
                </div>
                <div className="text-right">
                  <p className="text-green-600 font-semibold">
                    ₹ {(product.price - (product.price * product.discount) / 100).toFixed(2)}/unit
                    <span className="text-gray-500"> + GST</span>
                  </p>
                  <p className="text-green-500 text-sm">
                    -{product.discount}% OFF{" "}
                    <span className="line-through text-gray-500">₹ {product.price}/unit</span>
                  </p>
                </div>
                <div className="flex items-center ml-8">
                  <button className="bg-gray-200 text-gray-700 px-6 py-2 rounded-lg">-</button>
                  <span className="mx-4">1</span>
                  <button className="bg-gray-200 text-gray-700 px-6 py-2 rounded-lg">+</button>
                </div>

                <img src="/assets/Cartadded/ic_trash.svg" alt="trash" />

              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  