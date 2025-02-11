
type Plan = {
    name: string;
    price: number;
    originalPrice: number;
    save: number;
    tenure: string;
    icon: string;
    preferred?: boolean;
};

export const plans: Plan[] = [
    {
        name: "SAVER",
        price: 1149,
        originalPrice: 1499,
        save: 23.35,
        tenure: "6-12 Months",
        icon: "\uD83D\uDE80",
    },
    {
        name: "SUPER SAVER",
        price: 999,
        originalPrice: 1499,
        save: 33.33,
        tenure: "12+ Months",
        icon: "\uD83D\uDE80",
        preferred: true,
    },
    {
        name: "BASIC",
        price: 1249,
        originalPrice: 1499,
        save: 16.67,
        tenure: "3-6 Months",
        icon: "\u2708\uFE0F",
    },
];

