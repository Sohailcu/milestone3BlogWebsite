import React from 'react';

function AnnouncementBar() {
    return (
        <div className="bg-[#24b3ba] text-white p-3 px-10">
            <div className="flex justify-between items-center mx-6 text-xs font-semibold flex-wrap">
                {/* Left Side - Announcement Text */}
                <div className="text-left mx-4 mb-2 sm:mb-0">
                    Select Pre-Designed Umrah Packages or Customize it for a Personalized Spiritual Experience | www.umrahjourney.com
                </div>

                {/* Right Side - Currency and Language Selection */}
                <div className="flex items-center space-x-4 mr-4">
                    {/* Currency Selection */}
                    <div className="flex items-center">
                        <select
                            id="currency"
                            className="bg-[#24b3ba] text-white px-1 py-1 rounded text-xs sm:text-sm"
                        >
                            <option value="USD">USD</option>
                            <option value="SAR">SAR</option>
                            <option value="AED">AED</option>
                            <option value="GBP">GBP</option>
                            <option value="EUR">EUR</option>
                            <option value="PKR">PKR</option>
                        </select>
                    </div>

                    {/* Language Selection */}
                    <div className="flex items-center">
                        <select
                            id="language"
                            className="bg-[#24b3ba] text-white -px-4 py-1 rounded text-xs sm:text-sm"
                        >
                            <option value="en">English</option>
                            <option value="ar">Arabic</option>
                            <option value="fr">French</option>
                            <option value="ur">Urdu</option>
                            <option value="tr">Turkish</option>
                            <option value="id">Russian</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AnnouncementBar;
