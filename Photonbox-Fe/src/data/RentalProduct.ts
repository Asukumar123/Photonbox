export interface RentalProduct {
    id: string;
    name: string;
    imageUrl: string;
    price: number;
    originalPrice: number;
    discountPercentage: number;
    tenure: string;
    planName: string;
  }
  
  export const rentalProducts: RentalProduct[] = [
    {
      id: "photonboxx-1100-x1",
      name: "Photonboxx 1100 X1 | UPS with Integrated Inverter & Li-ion Battery",
      imageUrl: "assets/Cartadded/IMG.png",
      price: 1099,
      originalPrice: 1499,
      discountPercentage: 33,
      tenure: "12 Months",
      planName: "Super Saver Plan",
    },
    {
      id: "photonboxx-1100-x2",
      name: "Photonboxx 1100 X2 | UPS with Integrated Inverter & Li-ion Battery",
      imageUrl: "assets/Cartadded/IMG.png",
      price: 999,
      originalPrice: 1599,
      discountPercentage: 27,
      tenure: "12 Months",
      planName: "Super Saver Plan",
    },
  ];
  