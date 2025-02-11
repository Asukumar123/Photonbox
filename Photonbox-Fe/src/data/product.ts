export interface Product {
    name: string;
    category: 'Rent' | 'Buy';
    imageUrl: string;
    description: string;
    powerRating: string;
    batteryCapacity: string;
    price: string;
    priceNote: string;
}

export const PRODUCTS: Product[] = [
    {
        name: 'Photonboxx 1100 X2',
        category: 'Rent',
        imageUrl: '/assets/Home/PB.svg',
        description: 'UPS with Integrated Inverter & Li-Ion Battery',
        powerRating: '1100 VA',
        batteryCapacity: '1280 Wh',
        price: '₹ 999/month',
        priceNote: '+ GST'
    },
    {
        name: 'Photonboxx 1100 S2',
        category: 'Buy',
        imageUrl: '/assets/Home/PB.svg',
        description: 'UPS with Integrated Inverter & Li-Ion Battery',
        powerRating: '1100 VA',
        batteryCapacity: '1280 Wh',
        price: '₹ 29829',
        priceNote: '+ GST'
    },
    {
        name: 'Photonboxx 1100 X2',
        category: 'Rent',
        imageUrl: '/assets/Home/PB.svg',
        description: 'UPS with Integrated Inverter & Li-Ion Battery',
        powerRating: '1100 VA',
        batteryCapacity: '1280 Wh',
        price: '₹ 999/month',
        priceNote: '+ GST'
    },
    {
        name: 'Photonboxx 1100 S2',
        category: 'Buy',
        imageUrl: '/assets/Home/PB.svg',
        description: 'UPS with Integrated Inverter & Li-Ion Battery',
        powerRating: '1100 VA',
        batteryCapacity: '1280 Wh',
        price: '₹ 29829',
        priceNote: '+ GST'
    },
    {
        name: 'Photonboxx 1100 X1',
        category: 'Rent',
        imageUrl: '/assets/Home/PB.svg',
        description: 'UPS with Integrated Inverter & Li-Ion Battery',
        powerRating: '1100 VA',
        batteryCapacity: '1280 Wh',
        price: '₹ 999/month',
        priceNote: '+ GST'
    },
    {
        name: 'Photonboxx 1100 S1',
        category: 'Buy',
        imageUrl: '/assets/Home/PB.svg',
        description: 'UPS with Integrated Inverter & Li-Ion Battery',
        powerRating: '1100 VA',
        batteryCapacity: '1280 Wh',
        price: '₹ 29829',
        priceNote: '+ GST'
    }
];
