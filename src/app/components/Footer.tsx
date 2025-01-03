/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { FaFacebook, FaLinkedin, FaTiktok } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';

function Footer() {
    return (
        <footer className="bg-[#00adb5] text-slate-800 py-10">
            <div className="container mx-auto px-4 sm:px-6 md:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                    {/* Logo Section */}
                    <div>
                        <img src="/Images/footerlogo.png" alt="Logo" className="w-20 mb-4 mx-auto sm:mx-0" />
                    </div>

                    {/* Quick Links Section */}
                    <div>
                        <h3 className="font-bold text-2xl mb-4 text-black">Quick Links</h3>
                        <ul className="space-y-2 font-light text-sm text-gray-800">
                            <li><a href="#" className="hover:underline hover:text-[#1e3a6d] cursor-pointer duration-100">Packages</a></li>
                            <li><a href="#" className="hover:underline hover:text-[#1e3a6d] cursor-pointer duration-100">Transport</a></li>
                            <li><a href="#" className="hover:underline hover:text-[#1e3a6d] cursor-pointer duration-100">Umrah Visa</a></li>
                            <li><a href="#" className="hover:underline hover:text-[#1e3a6d] cursor-pointer duration-100">Who We Are</a></li>
                            <li><a href="#" className="hover:underline hover:text-[#1e3a6d] cursor-pointer duration-100">Umrah packages Pakistan 2024</a></li>
                            <li><a href="#" className="hover:underline hover:text-[#1e3a6d] cursor-pointer duration-100">Umrah packages Canada</a></li>
                            <li><a href="#" className="hover:underline hover:text-[#1e3a6d] cursor-pointer duration-100">Umrah packages UK</a></li>
                            <li><a href="#" className="hover:underline hover:text-[#1e3a6d] cursor-pointer duration-100">Umrah packages UAE</a></li>
                        </ul>
                    </div>

                    {/* Support Section */}
                    <div>
                        <h3 className="font-bold text-2xl mb-4 text-black">Support</h3>
                        <ul className="space-y-2 font-light text-sm text-gray-800">
                            <li><a href="#" className="hover:underline hover:text-[#1e3a6d] cursor-pointer duration-100">Contact</a></li>
                            <li><a href="#" className="hover:underline hover:text-[#1e3a6d] cursor-pointer duration-100">FAQ&apos;s</a></li>
                            <li><a href="#" className="hover:underline hover:text-[#1e3a6d] cursor-pointer duration-100">Affiliate Page</a></li>
                            <li><a href="#" className="hover:underline hover:text-[#1e3a6d] cursor-pointer duration-100">Blog</a></li>
                        </ul>
                    </div>

                    {/* Newsletter Section */}
                    <div>
                        <h3 className="font-bold text-2xl mb-4 text-black">Newsletters</h3>
                        <form className="flex items-center space-x-2">
                            <input
                                type="email"
                                placeholder="Enter Your Email"
                                className="w-full p-3 rounded-l-md text-black"
                            />
                            <button
                                type="submit"
                                className="bg-[#d6e800] hover:bg-[#24b3ba] text-black px-3 py-3 rounded-r-lg border hover:border-gray-500 duration-200 transition-all"
                            >
                                Subscribe
                            </button>
                        </form>
                        <p className="text-sm mt-4 font-light text-gray-800">Subscribe to our mailing list to get the latest insights and updates about Hajj and Umrah</p>
                    </div>
                </div>

                {/* Payment Methods and Social Media Links */}
                <div className="flex flex-col sm:flex-row justify-between items-center p-6 md:mt-0">
                    {/* Payment Methods */}
                    <div className="flex flex-wrap justify-center gap-4 mb-4 sm:mb-0">
                        <img src="/Images/visa.webp" alt="Visa" className="h-6 cursor-pointer hover:animate-bounce" />
                        <img src="/Images/master.webp" alt="MasterCard" className="h-6 cursor-pointer hover:animate-bounce" />
                        <img src="/Images/american.webp" alt="American Express" className="h-6 cursor-pointer hover:animate-bounce" />
                        <img src="/Images/paypal.webp" alt="PayPal" className="h-6 cursor-pointer hover:animate-bounce" />
                        <img src="/Images/stripe.webp" alt="Stripe" className="h-6 cursor-pointer hover:animate-bounce" />
                        <img src="/Images/hyper.webp" alt="HyperPay" className="h-6 cursor-pointer hover:animate-bounce" />
                        <img src="/Images/sadad.webp" alt="Sadad" className="h-4 mt-1 cursor-pointer hover:animate-bounce" />
                    </div>

                    {/* Social Media Links */}
                    <div className="flex space-x-4">
                        <a href="#" className="rounded-lg hover:text-blue-800"><FaFacebook className='w-6 h-6 cursor-pointer hover:animate-bounce' /></a>
                        <a href="#" className="rounded-lg hover:text-orange-600"><FiInstagram className='w-6 h-6 cursor-pointer hover:animate-bounce' /></a>
                        <a href="#" className="rounded-lg hover:text-gray-700"><FaTiktok className='w-6 h-6 cursor-pointer hover:animate-bounce' /></a>
                        <a href="#" className="rounded-lg hover:text-blue-700"><FaLinkedin className='w-6 h-6 cursor-pointer hover:animate-bounce' /></a>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center mt-1 border-t border-gray-500 pt-6 w-full mx-auto">
                    <div className="flex justify-between items-center w-full md:w-auto">
                        <p className="text-left text-sm sm:text-base">Copyright © 2024 IT MAN PAKISTAN. All rights reserved</p>
                        <div className="flex justify-center ml-[400px] space-x-4 mt-4 md:mt-0">
                            <a href="#" className="hover:underline hover:text-[#1e3a6d] cursor-pointer duration-100">Privacy Policy</a>
                            <a href="#" className="hover:underline hover:text-[#1e3a6d] cursor-pointer duration-100">Refund Policy</a>
                            <a href="#" className="hover:underline hover:text-[#1e3a6d] cursor-pointer duration-100">Terms and Conditions</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;