import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { PRODUCTS } from "@/data/product";

export default function ProductCard() {
  return (
    
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mx-[100px] mb-20 pb-20">
      {PRODUCTS.map((product, index) => (
        <Card key={index} className="bg-white p-4 rounded-lg shadow">
       
        <CardHeader>
          <span className={`w-12 px-2 py-1 text-xs font-semibold rounded ${product.category === 'Rent' ? 'text-blue-600 bg-blue-100' : 'text-green-600 bg-green-100'}`}>
          {product.category}
        </span>
        </CardHeader>

      <CardContent className="flex flex-col justify-between  gap-4">
       <div>
        <img src={product.imageUrl} alt={product.name} className="w-full h-24 object-contain mb-4" />
        </div>
        <div>
        <CardTitle>{product.name}</CardTitle>
        <CardDescription className="mt-1">{product.description}</CardDescription>
        </div>
        <div>
        <p className="text-sm text-gray-600 ">
        <strong>Power Rating:</strong> {product.powerRating}
      </p>
      <p className="text-sm text-gray-600">
        <strong>Battery Capacity:</strong> {product.batteryCapacity}
      </p>
        </div>
        </CardContent>

        <CardFooter className="flex flex-col items-start">
       
        <p className="text-blue-600 font-semibold mt-2">{product.category === 'Rent' ? 'RENTALS STARTING FROM' : 'BUY AT'}</p>
        <p className="text-xl font-bold text-blue-600">
          {product.price} <span className="text-gray-600 text-sm">{product.priceNote}</span>
        </p>
      </CardFooter>
      
      
        </Card>
      ))}
    </div>
  );
}
