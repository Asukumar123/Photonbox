
export interface NavLink {
    name: string;
    href: string;
}

export const NAV_LINKS: NavLink[] = [
    { name: 'Rental Plans', href: '/rental-plans' },
    { name: 'Our Technology', href: '/technology' },
    { name: 'Contact Us', href: '/contact' }
];