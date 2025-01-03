"use client"
/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React, { useState } from 'react';
import { RxDividerVertical } from 'react-icons/rx';
import { TiArrowSortedDown } from 'react-icons/ti';
import { HiMenuAlt4 } from 'react-icons/hi';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <header className="bg-white shadow">
        <div className="container mx-auto flex items-center justify-between py-4 px-6">
          {/* Left Section */}
          <div className="flex items-center space-x-1">
            <img src="/Images/new_UC_Logo.svg" alt="Logo" className="h-10" />
            <RxDividerVertical className="w-8 h-12 text-gray-400" />
            <span className="text-gray-600 font-thin">Travel Agent</span>
          </div>

          {/* Center Section for Desktop */}
          <nav className="hidden md:flex space-x-6 gap-3 text-[#313131]">
            {/* Packages with Arrow Dropdown */}
            <div className="relative group">
              <button className="flex items-center hover:font-bold hover:text-sm hover:border-b-2 hover:border-[#60d8ca] transition duration-100">
                Packages
                <TiArrowSortedDown className="ml-2 h-5 w-5 text-gray-600" />
              </button>
              <div className="absolute hidden group-hover:block bg-white text-sm font-mono text-center items-center shadow-lg mt-2 rounded-3xl w-40 z-50">
                <Link href="/packages/standard" className="block px-1 py-2 text-gray-800 hover:text-white hover:bg-[#60d8ca] rounded-full">
                  Standard Package
                </Link>
                <Link href="/packages/premium" className="block px-1 py-2 text-gray-800 hover:text-white hover:bg-[#60d8ca] rounded-full">
                  Executive Package
                </Link>
                <Link href="/packages/premium" className="block px-1 py-2 text-gray-800 hover:text-white hover:bg-[#60d8ca] rounded-full">
                  Premium Package
                </Link>
                <Link href="/packages/premium" className="block px-1 py-2 text-gray-800 hover:text-white hover:bg-[#60d8ca] rounded-full">
                  Umrah Plus
                </Link>
              </div>
            </div>

            {/* Umrah Visa */}
            <Link href="/umrah-visa" className="hover:font-bold hover:text-sm hover:border-b-2 hover:border-[#60d8ca] transition duration-100">
              Umrah Visa
            </Link>

            {/* Experiences Dropdown */}
            <div className="relative group">
              <button className="flex items-center hover:font-bold hover:text-sm hover:border-b-2 hover:border-[#60d8ca] transition duration-100">
                Experiences
                <TiArrowSortedDown className="ml-2 h-5 w-5 text-gray-600" />
              </button>
              <div className="absolute hidden group-hover:block bg-white text-sm font-mono text-center items-center shadow-lg mt-2 rounded-3xl w-40 z-50">
                <Link href="/experiences/luxury" className="block px-1 py-2 text-gray-800 hover:text-white hover:bg-[#60d8ca] rounded-full">
                  Luxury
                </Link>
                <Link href="/experiences/adventure" className="block px-1 py-2 text-gray-800 hover:text-white hover:bg-[#60d8ca] rounded-full">
                  Adventure
                </Link>
              </div>
            </div>

            {/* Inquiry Now */}
            <Link href="/inquiry" className="hover:font-bold hover:text-sm hover:border-b-2 hover:border-[#60d8ca] transition duration-100">
              Inquiry Now
            </Link>

            {/* Support with Arrow Dropdown */}
            <div className="relative group">
              <button className="flex items-center hover:font-bold hover:text-sm hover:border-b-2 hover:border-[#60d8ca] transition duration-100">
                Support
                <TiArrowSortedDown className="ml-2 h-5 w-5 text-gray-600" />
              </button>
              <div className="absolute hidden group-hover:block bg-white text-sm font-mono text-center items-center shadow-lg mt-2 rounded-3xl w-40 z-50">
                <Link href="/support/faq" className="block px-1 py-2 text-gray-800 hover:text-white hover:bg-[#60d8ca] rounded-full">
                  Contact
                </Link>
                <Link href="/support/contact" className="block px-1 py-2 text-gray-800 hover:text-white hover:bg-[#60d8ca] rounded-full">
                  FAQ
                </Link>
                <Link href="/support/feedback" className="block px-1 py-2 text-gray-800 hover:text-white hover:bg-[#60d8ca] rounded-full">
                  Feedback
                </Link>
                <Link href="/support/feedback" className="block px-1 py-2 text-gray-800 hover:text-white hover:bg-[#60d8ca] rounded-full">
                  Who We Are
                </Link>
                <Link href="/support/feedback" className="block px-1 py-2 text-gray-800 hover:text-white hover:bg-[#60d8ca] rounded-full">
                  Blog
                </Link>
              </div>
            </div>
          </nav>

          {/* Right Section */}
          <div className="flex items-center space-x-2">
            <div className="flex items-center justify-center bg-[#24b3ba] hover:bg-[#d6ea7f] h-10 w-10 rounded-full cursor-pointer">
              <img src="/Images/homeIcon.png" alt="Home" className="h-5 w-5" />
            </div>
            <RxDividerVertical className="w-8 h-12 text-gray-400" />
            <button className="text-md text-gray-600 font-thin px-2 py-2 cursor-pointer">
              Login
            </button>
            <button className="bg-[#24b3ba] text-white px-6 py-2 rounded-3xl hover:bg-[#d6ea7f] cursor-pointer">
              Register
            </button>

            {/* Hamburger Icon for Mobile View */}
            <div className="md:hidden flex items-center" onClick={toggleNavbar}>
              <HiMenuAlt4 className="text-gray-600 text-3xl" />
            </div>
          </div>
        </div>

        {/* Mobile Navbar */}
        <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-white shadow-md absolute top-0 left-0 w-full h-full z-50`}>
          <nav className="flex flex-col items-center py-6 space-y-4">
            <Link href="/packages" className="text-gray-800 hover:text-[#60d8ca]">Packages</Link>
            <Link href="/umrah-visa" className="text-gray-800 hover:text-[#60d8ca]">Umrah Visa</Link>
            <Link href="/experiences" className="text-gray-800 hover:text-[#60d8ca]">Experiences</Link>
            <Link href="/inquiry-now" className="text-gray-800 hover:text-[#60d8ca]">Inquiry Now</Link>
            <Link href="/support" className="text-gray-800 hover:text-[#60d8ca]">Support</Link>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
