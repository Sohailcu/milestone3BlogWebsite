/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Image from 'next/image';

function HeroSection() {
  return (
    <div className="px-1">
      {/* Hero Section */}
      <section className="relative w-full h-72 sm:h-[200px] md:h-[250px] lg:h-[350px] mt-4">
        {/* Lazy Loaded Image as Background */}
        <Image
          src="/Images/bg-blog.jpg"
          alt="Blog Background"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
          width={1440}  // Specify the width of the image
          height={350}  // Specify the height of the image
        />

        {/* Overlay for better readability */}
        <div className="absolute inset-0 bg-white bg-opacity-60"></div>

        {/* Content Section */}
        <div className="container mx-auto relative z-10 flex items-center justify-start h-full pl-6 sm:pl-10 lg:pl-16">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1e3a6d] mb-6 sm:mb-10">
            Blogs
          </h1>
        </div>

        {/* Curved Bottom Section */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
          <svg
            className="relative block w-full h-[100%]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path
              fill="#ffffff" /* Curve Color */
              d="M0,288L48,272C96,256,192,224,288,208C384,192,480,192,576,213.3C672,235,768,277,864,282.7C960,288,1056,256,1152,234.7C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>
    </div>
  );
}

export default HeroSection;
