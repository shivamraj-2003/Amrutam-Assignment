import React from 'react';

export default function Header() {
    return (
        <div className="flex flex-col items-center justify-between bg-yellow-100 border py-4 md:py-0 md:flex-row md:items-center md:px-8 lg:px-16">
            <div className="flex items-center justify-center space-x-4 md:space-x-8 lg:space-x-40 mb-4 md:mb-0">
                <h1 className="text-3xl md:text-4xl lg:text-6xl text-green-800 font-bold">
                    A M R U T A M
                </h1>
                <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
                    <h1 className="font-normal text-lg lg:text-3xl">Home</h1>
                    <h1 className="font-normal text-green-700 text-lg lg:text-3xl">
                        Find Doctors
                    </h1>
                    <h1 className="font-normal text-lg lg:text-3xl">About Us</h1>
                </div>
            </div>
            <div className="flex items-center justify-center space-x-4 md:space-x-6 lg:space-x-8">
                <button className="border font-semibold border-green-700 text-green-700 text-lg md:text-3xl lg:text-4xl h-12 md:h-16 lg:h-20 w-24 md:w-40 lg:w-48 rounded-lg">
                    Login
                </button>
                <button className="border font-semibold bg-green-800 text-white text-lg md:text-3xl lg:text-4xl h-12 md:h-16 lg:h-20 w-24 md:w-40 lg:w-48 rounded-lg">
                    Sign-up
                </button>
            </div>
        </div>
    );
}