/* eslint-disable @next/next/no-img-element */
"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import { RxDividerVertical } from 'react-icons/rx';
import { TiArrowSortedDown } from 'react-icons/ti';
import { HiMenuAlt4 } from 'react-icons/hi';
import Image from 'next/image';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null); // Track the active dropdown

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = (menu: string) => {
    if (activeDropdown === menu) {
      setActiveDropdown(null); // Close if the same dropdown is clicked again
    } else {
      setActiveDropdown(menu); // Open the clicked dropdown
    }
  };

  return (
    <div>
      <header className="bg-white shadow">
        <div className="container mx-auto flex items-center justify-between py-4 px-6">
          {/* Left Section */}
          <div className="flex items-center space-x-1">
            <Link href="/">
              <Image
                src="/Images/new_UC_Logo.svg"
                alt="Logo"
                width={40}
                height={40}
                className="h-10 cursor-pointer"
              />
            </Link>
            <RxDividerVertical className="w-8 h-12 text-gray-400" />
            <span className="text-gray-600 font-thin">Travel Agent</span>
          </div>

          {/* Desktop Navbar */}
          <nav className="hidden md:flex space-x-6 gap-3 text-[#313131]">
            {/* Packages with Arrow Dropdown */}
            <div className="relative group">
              <button
                onClick={() => toggleDropdown('packages')}
                className="flex items-center hover:font-bold hover:text-sm hover:border-b-2 hover:border-[#60d8ca] transition duration-100"
              >
                Packages
                <TiArrowSortedDown className="ml-2 h-5 w-5 text-gray-600" />
              </button>
              {activeDropdown === 'packages' && (
                <div className="absolute bg-white text-sm font-mono text-center items-center shadow-lg mt-2 rounded-3xl w-40 z-50">
                  <Link
                    href="/packages/standard"
                    className="block px-1 py-2 text-gray-800 hover:text-white hover:bg-[#60d8ca] rounded-full"
                  >
                    Standard Package
                  </Link>
                  <Link
                    href="/packages/premium"
                    className="block px-1 py-2 text-gray-800 hover:text-white hover:bg-[#60d8ca] rounded-full"
                  >
                    Executive Package
                  </Link>
                  <Link
                    href="/packages/premium"
                    className="block px-1 py-2 text-gray-800 hover:text-white hover:bg-[#60d8ca] rounded-full"
                  >
                    Premium Package
                  </Link>
                  <Link
                    href="/packages/premium"
                    className="block px-1 py-2 text-gray-800 hover:text-white hover:bg-[#60d8ca] rounded-full"
                  >
                    Umrah Plus
                  </Link>
                </div>
              )}
            </div>

            {/* Umrah Visa */}
            <Link
              href="/umrah-visa"
              className="hover:font-bold hover:text-sm hover:border-b-2 hover:border-[#60d8ca] transition duration-100"
            >
              Umrah Visa
            </Link>

            {/* Experiences Dropdown */}
            <div className="relative group">
              <button
                onClick={() => toggleDropdown('experiences')}
                className="flex items-center hover:font-bold hover:text-sm hover:border-b-2 hover:border-[#60d8ca] transition duration-100"
              >
                Experiences
                <TiArrowSortedDown className="ml-2 h-5 w-5 text-gray-600" />
              </button>
              {activeDropdown === 'experiences' && (
                <div className="absolute bg-white text-sm font-mono text-center items-center shadow-lg mt-2 rounded-3xl w-40 z-50">
                  <Link
                    href="/experiences/luxury"
                    className="block px-1 py-2 text-gray-800 hover:text-white hover:bg-[#60d8ca] rounded-full"
                  >
                    Luxury
                  </Link>
                  <Link
                    href="/experiences/adventure"
                    className="block px-1 py-2 text-gray-800 hover:text-white hover:bg-[#60d8ca] rounded-full"
                  >
                    Adventure
                  </Link>
                </div>
              )}
            </div>

            {/* Inquiry Now */}
            <Link
              href="/inquiry"
              className="hover:font-bold hover:text-sm hover:border-b-2 hover:border-[#60d8ca] transition duration-100"
            >
              Inquiry Now
            </Link>

            {/* Support Dropdown */}
            <div className="relative group">
              <button
                onClick={() => toggleDropdown('support')}
                className="flex items-center hover:font-bold hover:text-sm hover:border-b-2 hover:border-[#60d8ca] transition duration-100"
              >
                Support
                <TiArrowSortedDown className="ml-2 h-5 w-5 text-gray-600" />
              </button>
              {activeDropdown === 'support' && (
                <div className="absolute bg-white text-sm font-mono text-center items-center shadow-lg mt-2 rounded-3xl w-40 z-50">
                  <Link
                    href="/support/faq"
                    className="block px-1 py-2 text-gray-800 hover:text-white hover:bg-[#60d8ca] rounded-full"
                  >
                    Contact
                  </Link>
                  <Link
                    href="/support/contact"
                    className="block px-1 py-2 text-gray-800 hover:text-white hover:bg-[#60d8ca] rounded-full"
                  >
                    FAQ
                  </Link>
                  <Link
                    href="/support/feedback"
                    className="block px-1 py-2 text-gray-800 hover:text-white hover:bg-[#60d8ca] rounded-full"
                  >
                    Feedback
                  </Link>
                  <Link
                    href="/support/feedback"
                    className="block px-1 py-2 text-gray-800 hover:text-white hover:bg-[#60d8ca] rounded-full"
                  >
                    Who We Are
                  </Link>
                  <Link
                    href="/support/feedback"
                    className="block px-1 py-2 text-gray-800 hover:text-white hover:bg-[#60d8ca] rounded-full"
                  >
                    Blog
                  </Link>
                </div>
              )}
            </div>
          </nav>

          {/* Right Section */}
          <div className="flex items-center space-x-2">
            <div className="flex items-center justify-center bg-[#24b3ba] hover:bg-[#d6ea7f] h-10 w-10 rounded-full cursor-pointer">
              <Image
                src="/Images/homeIcon.png"
                alt="Home"
                className="h-5 w-5"
                width={20}  // Define a specific width for the image
                height={20} // Define a specific height for the image
              />
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
            <div className="relative group">
              <button
                onClick={() => toggleDropdown('packages')}
                className="text-gray-800 hover:text-[#60d8ca] w-full"
              >
                Packages
              </button>
              {activeDropdown === 'packages' && (
                <div className="absolute bg-white text-sm font-mono text-center items-center shadow-lg mt-2 rounded-3xl w-full z-50">
                  <Link
                    href="/packages/standard"
                    className="block px-1 py-2 text-gray-800 hover:text-white hover:bg-[#60d8ca] rounded-full"
                  >
                    Standard Package
                  </Link>
                  <Link
                    href="/packages/premium"
                    className="block px-1 py-2 text-gray-800 hover:text-white hover:bg-[#60d8ca] rounded-full"
                  >
                    Executive Package
                  </Link>
                  <Link
                    href="/packages/premium"
                    className="block px-1 py-2 text-gray-800 hover:text-white hover:bg-[#60d8ca] rounded-full"
                  >
                    Premium Package
                  </Link>
                  <Link
                    href="/packages/premium"
                    className="block px-1 py-2 text-gray-800 hover:text-white hover:bg-[#60d8ca] rounded-full"
                  >
                    Umrah Plus
                  </Link>
                </div>
              )}
            </div>

            {/* More Links */}
            <Link href="/umrah-visa" className="w-full text-center text-gray-800 hover:text-[#60d8ca] py-2">
              Umrah Visa
            </Link>
            <Link href="/experiences" className="w-full text-center text-gray-800 hover:text-[#60d8ca] py-2">
              Experiences
            </Link>
            <Link href="/inquiry" className="w-full text-center text-gray-800 hover:text-[#60d8ca] py-2">
              Inquiry Now
            </Link>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
