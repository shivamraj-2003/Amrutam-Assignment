import React from 'react';
import p7 from "../images/p7.png";
import p1 from "../images/p1.png";
import Star from './Star';

const About = () => {
    return (
        <div className="mt-16 mx-4 md:mx-8 lg:mx-24">
            <div
                className="bg-cover border rounded-xl bg-center h-44 md:h-64 lg:h-"
                style={ { backgroundImage: `url(${p7})` } }
            >
                {/* Content goes here */ }
            </div>
            <div className="flex flex-col md:flex-row items-center border rounded-md bg-yellow-50 mt-4">
                <img className="h-40 mx-4 mt-4 md:mt-0" src={ p1 } alt="Dr. Bruce Willis" />
                <div className="flex-1 text-center md:text-left md:items-center px-4 py-2">
                    <h2 className="text-xl font-bold">Dr. Bruce Willis</h2>
                    <p className="text-gray-600">Gynecologist</p>
                    <Star defaultRating={ 4 } />
                </div>
                <div className="flex flex-col md:flex-row justify-between md:mt-0 mt-4 px-4 py-2">
                    <div className="mx-4 md:mx-0">
                        <p className="text-lg text-green-800">Followers</p>
                        <p className="text-xl font-bold">850</p>
                    </div>
                    <div className="mx-4 md:mx-0">
                        <p className="text-green-800">Following</p>
                        <p className="text-xl font-bold">18K</p>
                    </div>
                    <div className="mx-4 md:mx-0">
                        <p className="text-green-800">Posts</p>
                        <p className="text-xl font-bold">250</p>
                    </div>
                </div>
                <button className="bg-green-800 font-medium text-lg text-white py-4 px-6 rounded-md hover:bg-green-600 transition-colors duration-300 mt-4 md:mt-0 md:ml-4">
                    Book an Appointment
                </button>
            </div>
        </div>
    );
};

export default About;