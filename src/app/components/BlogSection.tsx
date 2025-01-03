"use client"
/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React, { useState } from 'react'

// Example Static Data for Blogs (Updated with more blogs)
const blogData = [
    {
        id: 1,
        title: "Planning Umrah with Friends? Here's What You Should Know",
        description: "Here’s a guide to assist you and your friends in preparing for and performing Umrah.",
        image: "/Images/13664..png",
        link: "/blog/1",
        publishedDate: "January 5, 2024", // Add Published Date
    },
    {
        id: 2,
        title: "Why Winter is the Best Season for Umrah and How to Plan Your Trip",
        description: "Winter is the ideal time for Umrah, offering cooler weather and fewer crowds.",
        image: "/Images/28305..png",
        link: "/blog/2",
        publishedDate: "February 10, 2024", // Add Published Date
    },
    {
        id: 3,
        title: "How to Perform Umrah with Children",
        description: "Performing Umrah with children requires planning, patience, and flexibility.",
        image: "/Images/32313..png",
        link: "/blog/3",
        publishedDate: "March 8, 2024", // Add Published Date
    },
    {
        id: 4,
        title: "How to Find Inexpensive Accommodation for Umrah",
        description: "Finding affordable accommodation during Umrah can be challenging. Here's how to get the best deals while maintaining comfort and convenience.",
        image: "/Images/33732..png",
        link: "/blog/4",
        publishedDate: "April 12, 2024", // Add Published Date
    },
    {
        id: 5,
        title: "What You Should Know About Umrah Packages in Rabi’ Al-Awal",
        description: "This article explores the best Umrah packages available during the sacred month of Rabi’ Al-Awal and how to choose the right one.",
        image: "/Images/40389..png",
        link: "/blog/5",
        publishedDate: "May 3, 2024", // Add Published Date
    },
    {
        id: 6,
        title: "Five Must-Follow Tips for a Successful Umrah Journey",
        description: "These five tips will help ensure your Umrah journey is spiritually fulfilling and seamless from start to finish.",
        image: "/Images/48847..png",
        link: "/blog/6",
        publishedDate: "June 25, 2024", // Add Published Date
    },
    {
        id: 7,
        title: "How Long is Umrah? A Comprehensive Guide",
        description: "Wondering how long Umrah takes? This guide gives you all the details on the duration of the rituals and the total time required for the pilgrimage.",
        image: "/Images/51127..png",
        link: "/blog/7",
        publishedDate: "July 17, 2024", // Add Published Date
    },
    {
        id: 8,
        title: "Why is There a Growing Demand for Cheap Umrah Packages?",
        description: "This article analyzes the growing trend of affordable Umrah packages and how travelers can benefit from them.",
        image: "/Images/59379..png",
        link: "/blog/8",
        publishedDate: "August 21, 2024", // Add Published Date
    },
    {
        id: 9,
        title: "What Are the Prohibited Items & Practices in Makkah During Umrah?",
        description: "Understand the prohibited items and practices while in Makkah for Umrah and ensure your pilgrimage complies with the sacred guidelines.",
        image: "/Images/63823..png",
        link: "/blog/9",
        publishedDate: "September 5, 2024", // Add Published Date
    },
]

function BlogSection() {
    const [searchQuery, setSearchQuery] = useState("")

    // Filter blogs based on the search query
    const filteredBlogs = blogData.filter(
        (blog) =>
            blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            blog.description.toLowerCase().includes(searchQuery.toLowerCase())
    )

    return (
        <div>
            <section className="container mx-auto py-16 max-w-6xl">
                {/* Search Box and Results Count */}
                <div className="flex flex-col sm:flex-row justify-between items-center mb-6 space-y-4 sm:space-y-0">
                    {/* Show Numbering */}
                    <h4 className="text-sm font-semibold mb-6 sm:mb-0">
                        Showing 1 to {blogData.length} of {blogData.length} posts
                    </h4>
                    <div className="flex items-center space-x-4">
                        <input
                            type="text"
                            className="border border-gray-300 rounded-lg p-2 text-sm"
                            placeholder="Search blogs..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <span className="text-sm text-gray-500">
                            {filteredBlogs.length} result{filteredBlogs.length !== 1 && "s"}
                        </span>
                    </div>
                </div>

                {/* Blog Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {/* Dynamically render each blog card */}
                    {filteredBlogs.map((blog) => (
                        <div
                            key={blog.id}
                            className="bg-white shadow-lg rounded-2xl overflow-hidden group transition-transform duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
                        >
                            <img
                                src={blog.image}
                                alt="Blog Thumbnail"
                                className="w-full h-48 object-cover group-hover:opacity-80 transition-opacity duration-300"
                            />
                            <div className="p-4">
                                <h6 className="text-base font-bold mb-4">{blog.title}</h6>
                                <p className="text-gray-700 mb-4">
                                    {blog.description}{" "}
                                    <Link
                                        href={blog.link}
                                        className="text-[#60d8ca] font-bold hover:underline hover:text-[#1e3a6d]"
                                    >
                                        READ MORE
                                    </Link>
                                </p>
                                {/* Display Published Date */}
                                <p className="text-sm text-gray-500">Published on: {blog.publishedDate}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination with Left and Right Arrows */}
                <div className="flex justify-between items-center mt-8">
                    <button className="text-gray-700 flex items-center hover:text-[#60d8ca]">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 mr-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M15 19l-7-7 7-7"
                            />
                        </svg>
                        Previous
                    </button>

                    <div className="flex items-center space-x-2">
                        <span className="text-gray-700">Page</span>
                        <button className="px-3 py-1 text-sm font-semibold text-[#60d8ca] border border-[#60d8ca] rounded-md hover:bg-[#60d8ca] hover:text-white">1</button>
                        <button className="px-3 py-1 text-sm font-semibold text-gray-700 border border-gray-300 rounded-md hover:bg-gray-100">2</button>
                        <button className="px-3 py-1 text-sm font-semibold text-gray-700 border border-gray-300 rounded-md hover:bg-gray-100">3</button>
                        <button className="px-3 py-1 text-sm font-semibold text-gray-700 border border-gray-300 rounded-md hover:bg-gray-100">4</button>
                        <button className="px-3 py-1 text-sm font-semibold text-gray-700 border border-gray-300 rounded-md hover:bg-gray-100">5</button>
                        <button className="px-3 py-1 text-sm font-semibold text-gray-700 border border-gray-300 rounded-md hover:bg-gray-100">6</button>
                        <span className="text-gray-700">...</span>
                        <button className="px-3 py-1 text-sm font-semibold text-gray-700 border border-gray-300 rounded-md hover:bg-gray-100">9</button>
                    </div>

                    <button className="text-gray-700 flex items-center hover:text-[#60d8ca]">
                        Next
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 ml-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M9 5l7 7-7 7"
                            />
                        </svg>
                    </button>
                </div>
            </section>
        </div>
    )
}

export default BlogSection
