import React from 'react';

const ProductFooter = () => {
    return (
     <div className='px-20 flex gap-4 '>
          <footer className="py-12 bg-white text-gray-800">
             
                <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between">
                
                    <div className="mb-8 md:mb-0">
                        {/* Logo and company name */}
                        <div className="flex items-center mb-4">
                            <img alt="Photonboxx logo" className="mr-2" height="40" src="/assets/Product/Logo.png" width="40" />
                            <span className="text-2xl font-semibold">photonboxx.</span>
                        </div>
                        {/* Company description */}
                        <p className="text-sm mb-4 w-96">
                            India's pioneering Power Backup Subscription platform. Our smart inverters ensure optimal efficiency, seamless energy management, and reliable power for your home and business. Experience cutting-edge technology and uninterrupted power solutions with Photonboxx.
                        </p>
                        {/* Social media links */}
                        <div className="flex space-x-4 mb-4">
                            <a className="text-blue-600" href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
                            <a className="text-pink-600" href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
                            <a className="text-blue-400" href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                        {/* Social media icons */}
                        <div className="pb-4 flex space-x-4">
                            <a href="#">
                                <img alt="Facebook logo" className="w-10 h-10" height="40" src="/assets/Product/ic_facebbook.svg" width="40" />
                            </a>
                            <a href="#">
                                <img alt="Instagram logo" className="w-10 h-10" height="40" src="/assets/Product/ic_instagram.svg" width="40" />
                            </a>
                            <a href="#">
                                <img alt="LinkedIn logo" className="w-10 h-10" height="40" src="/assets/Product/ic_linkedin.svg" width="40" />
                            </a>
                        </div>
                        {/* Terms and Privacy links */}
                        <div className="text-sm">
                            <a className="mr-4" href="#">Terms and Conditions</a>
                            <a href="#">Privacy Policy</a>
                        </div>
                        {/* Copyright notice */}
                        <p className="text-sm mt-4">© 2022. All rights reserved</p>
                    </div>

                    {/* Second column: Product links */}
                    <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-16 ml-24">
                        <div>
                            <h3 className="font-semibold mb-4">PRODUCT</h3>
                            <ul className="space-y-2">
                                <li><a className="hover:underline" href="#">PB 1100 X1</a></li>
                                <li><a className="hover:underline" href="#">PB 1100 X2</a></li>
                            </ul>
                        </div>
                        {/* Company links */}
                        <div>
                            <h3 className="font-semibold mb-4">COMPANY</h3>
                            <ul className="space-y-2">
                                <li><a className="hover:underline" href="#">About us</a></li>
                                <li><a className="hover:underline" href="#">Contact us</a></li>
                                <li><a className="hover:underline" href="#">Blogs</a></li>
                            </ul>
                        </div>
                        {/* Rentals links */}
                        <div>
                            <h3 className="font-semibold mb-4">RENTALS</h3>
                            <ul className="space-y-2">
                                <li><a className="hover:underline" href="#">Rental Plans</a></li>
                                <li><a className="hover:underline" href="#">How it works</a></li>
                                <li><a className="hover:underline" href="#">FAQs</a></li>
                                <li><a className="hover:underline" href="#">Refer & Earn</a></li>
                            </ul>
                        </div>
                        {/* Contact information */}
                        <div>
                            <h3 className="font-semibold mb-4">CONTACT</h3>
                            <ul className="space-y-2">
                                <li><a className="hover:underline" href="mailto:support@photonboxx.com">support@photonboxx.com</a></li>
                                <li>144, Outer Ring Road, Sector 5, HSR Layout, Bengaluru, KA - 560102</li>
                            </ul>
                            {/* App download links */}
                            <div className="mt-4 bg-[#F4F6F8] pr-0">
                                <h3 className="font-semibold mb-2 mt-20">PHOTONBOXX APP</h3>
                                <div className="flex space-x-2">
                                    <a href="#"><img alt="Download Photonboxx App on the App Store" height="40" src="/assets/Product/App Store.png" width="120" /></a>
                                    <a href="#"><img alt="Get Photonboxx App on Google Play" height="40" src="/assets/Product/Play Store.png" width="120" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default ProductFooter;