import React from 'react'
import p5 from "../images/p5.png"
import p2 from "../images/p2.png"
import p4 from "../images/p4.png"
import p3 from "../images/p3.png"
import p9 from "../images/p9.png"
import image from "../images/image.png"
import StarRating from './StarRating'

export default function Content1() {
    return (
        <div className='flex justify-evenly'>
            <div>
                <div className='border rounded-2xl mx-32 mt-16 w-4/6'>
                    <div className='bg-gray-100 p-2 items-center text-center space-x-56 flex  w-full '>
                        <h1 className=' ml-6 mt-2 text-blak text-center font-semibold text-3xl'>A Little About me</h1>
                        <button className='items-center mt-2 border-gray-500  text-xl border w-40 h-12 rounded-xl text-gray-500'>Follow<i class="mx-2 fa-solid fa-plus"></i></button>
                    </div>
                    <p className='mt-8 mx-8 text-md text-gray-400 font-medium'>Hello I am Dr. Bruce Willis a Gynaecologist in Sanjivni Hospital <br /> Surat. love to work with all my hospital staff and seniour doctors. Completed my graduation in Gynaecologist Medicine from the </p>
                    <div className='flex text-center'>
                        <div className=' mt-4 mx-8 w-3/4 flex h-0 border border-gray-400 border-opacity-50 '></div>
                        <p className='text-lg underline mx-2'>Read More</p>
                    </div>
                    <div className='flex mx-12 space-x-4 mt-12 text-center items-center'>
                        <p className='text-lg font-semibold' >Language Spoken</p>
                        <p className='text-xl border rounded-2xl h-10 w-28 p-2 bg-slate-100'>English</p>
                        <p className='text-xl border rounded-2xl h-10 w-24 p-2 bg-gray-100'>Hindi</p>
                        <p className='text-xl border rounded-2xl text-center mb-2 h-10 w-24 p-2 bg-slate-100'>Telegu</p>
                    </div>
                    <div className='flex mx-12 my-8 space-x-4 mt-10'>
                        <i class=" border border-gray-400  bg-gray-100 text-2xl rounded-3xl w-9  h-8 px-1 items-center text-gray-400 font-light fa-brands fa-youtube"></i>
                        <i class="border border-gray-400  bg-gray-100 text-2xl rounded-3xl w-8  h-8 px-1 items-center text-gray-400 font-light fa-brands fa-instagram"></i>
                        <i class="border border-gray-400  bg-gray-100 text-2xl rounded-3xl w-8  h-18 px-1 items-center text-gray-400 font-light fa-brands fa-twitter"></i>
                        <i class="border border-gray-400  bg-gray-100 text-2xl rounded-3xl w-8  h-8 px-1 items-center text-gray-400 font-light fa-brands fa-facebook"></i>
                    </div>
                </div>
                <div className='border rounded-2xl mx-32 mt-16 w-4/6'>
                    <div className='bg-gray-100 p-2 items-center text-center space-x-32 flex  w-full '>
                        <h1 className=' ml-6 mt-2 text-blak text-center font-semibold text-3xl'>I Specialize In</h1>
                    </div>
                    <div className='flex mx-6 space-x-2 mb-16'>
                        <img className=' mt-8 h-36' src={ p3 } />
                        <img className=' mt-8 h-36' src={ p4 } />
                        <img className=' mt-8 h-36' src={ p5 } />
                        <img className=' h-36 mt-8' src={ p9 } />
                    </div>
                </div>
                <div className='border rounded-2xl mx-32  mt-16 w-4/6' >
                    <div className='bg-gray-100 p-2 items-center text-center space-x-32 flex  w-full '>
                        <h1 className=' ml-6 mt-2 text-blak text-center font-semibold text-3xl'>The Concerns I Treat</h1>
                    </div>
                    <div className='flex mx-6 space-x-4 mt-16  text-center items-center'>
                        <p className='text-xl text-green-800 border rounded-2xl h-10 w-56 font-semibold p-2 text-center items-center bg-slate-100' >Skin Treatment</p>
                        <p className='text-xl text-green-800 border rounded-2xl h-10 w-32 font-semibold p-2 bg-slate-100'>Pregnancy</p>
                        <p className='text-xl text-green-800 border rounded-2xl h-10 w-56 font-semibold p-2 bg-gray-100'>Period Doubts</p>
                        <p className='text-xl text-green-800 border rounded-2xl text-center font-semibold h-10 w-40 p-2 bg-slate-100'>Endometriosis</p>
                    </div>
                    <div className='flex mx-6 my-10 space-x-4 mt-4  text-center items-center'>
                        <p className='text-xl text-green-800 border rounded-2xl h-10 w-40 font-semibold p-2 text-center items-center bg-slate-100' >Pelvic Pain</p>
                        <p className='text-xl text-green-800 border rounded-2xl h-10 w-40 font-semibold p-2 bg-slate-100'>Ovarian Cysts</p>
                        <p className='text-xl text-green-800 border rounded-2xl h-10 w-40 font-semibold p-2'><i class="mx-2 fa-solid fa-plus"></i>5 More</p>
                    </div>
                </div>
                <div className='border rounded-2xl  mx-32  mt-16 w-4/6'>
                    <div className='bg-gray-100 p-2 items-center text-center space-x-32 flex  w-full '>
                        <h1 className=' ml-6 mt-2 text-black text-center font-semibold text-3xl'>My Work Experience</h1>
                    </div>
                    <h1 className='mt-8 mx-8 text-xl text-green-800 font-semibold'>I HAVE BEEN IN PRACTICE FOR :7+ YEARS</h1>
                    <div className='border-t-2 mx-10 mt-6'></div>
                    <div className=' flex mx-8 space-x-40 mt-8'>
                        <div className='flex space-x-4'>
                            <img className='h-16' src={ image } />
                            <div>
                                <h1 className='text-xl mt-2 font-semibold'>Midtown Medical Clinic</h1>
                                <h1 className='text-xl font-semibold text-gray-400 mt02'>Senior doctor</h1>
                            </div>
                        </div>
                        <h1 className='text-xl text-gray-500'>2016-Present</h1>
                    </div>
                    <div className=' flex mx-8 space-x-40 mb-14 mt-8'>
                        <div className='flex space-x-4'>
                            <img className='h-16' src={ image } />
                            <div>
                                <h1 className='text-xl mt-2 font-semibold'>Midtown Medical Clinic</h1>
                                <h1 className='text-xl font-semibold text-gray-400 mt02'>Senior doctor</h1>
                            </div>
                        </div>
                        <h1 className='text-xl text-gray-500'>2010-2015</h1>
                    </div>
                </div>
                <div className='border rounded-2xl mx-32  mt-16 w-4/6'>
                    <div className='bg-gray-100 p-2 items-center text-center space-x-32 flex  w-full '>
                        <h1 className=' ml-6 mt-2 text-blak text-center font-semibold text-3xl'>Featured Reviews(102)</h1>
                    </div>
                    <div className=' rounded-xl bg-gray-100 space-x-12 h-56 mx-8  mt-8'>
                        <div className='flex mx-4 space-x-3 p-6'>
                            <img className='h-16' src={ p2 } />
                            <div>
                                <h1 className='text-xl mt-2 font-semibold'>Alicent Hightower</h1>
                                <h1 className='text-xl font-semibold text-gray-400 mt02'>Consulted for Skin care</h1>
                            </div>
                            <h1 className='text-xl mt-4 px-24 text-gray-500'>20 January 2023</h1>
                        </div>
                        <StarRating defaultRating={ 5 } />

                        <h1 className='text-lg mt-2 font-normal'>Might be bit early to confirm but yes I can see noticeable difference. will write again after using it for longer periods
                        </h1>
                    </div>
                    <div className='rounded-xl bg-gray-100 h-56  mx-8 space-x-12 mb-14 mt-8'>
                        <div className='flex mx-6 mt-6 space-x-4 p-6'>
                            <img className='h-16' src={ p2 } />
                            <div>
                                <h1 className='text-xl mt-2 font-semibold'>Alicent Hightower</h1>
                                <h1 className='text-xl font-semibold text-gray-400 mt02'>Consulted for Skin care</h1>
                            </div>
                            <h1 className='text-xl mt-4 px-24 text-gray-500'>20 January 2023</h1>
                        </div>
                        <StarRating defaultRating={ 5 } />
                        <h1 className='text-lg mt-2 font-normal'>Might be bit early to confirm but yes I can see noticeable difference. will write again after using it for longer periods
                        </h1>

                    </div>

                </div>
            </div>
            <div className='border rounded-2xl mx-4 mt-8 w-full md:w-2/3 lg:w-1/2 xl:w-1/3'>
                <div className='flex mx-10 p-2 text-center items-center border space-x-80 md:space-x-16 sm:space-x-0 mt-10 h-16 rounded-3xl'>
                    <h1 className='text-2xl mx-2 font-semibold'>Appointment Fee</h1>
                    <h1 className='text-2xl mx-2 text-green-800'><i class="fa-solid fa-indian-rupee-sign"></i>699.00</h1>
                </div>
                <div className='flex mx-10 mt-10 text-center'>
                    <p className='text-2xl font-semibold  mx-2'>Select your mode of Session</p>
                    <div className=' mt-4 mx-8 w-60 flex h-0 border border-gray-400 border-opacity-50 '></div>
                </div>
                <div className='mx-14 mt-10 space-x-8 flex'>
                    <div className='border w-40 border-gray-300 p-2 text-center rounded xl'>
                        <h1 className='text-lg font-medium'>In-Clinic</h1>
                        <h1 className='text-lg text-gray-500'>45 Mins</h1>
                    </div>
                    <div className='border w-40 bg-gray-100 border-gray-300 p-2 text-center rounded xl'>
                        <h1 className='text-lg text-green-800 font-medium'>Video<span><i class="mx-4 text-white border rounded-3xl h-6 w-8 bg-green-800 fa-solid fa-check"></i></span></h1>
                        <h1 className='text-lg text-gray-500'>45 Mins</h1>
                    </div>
                    <div className='border w-40 border-gray-300 p-2 text-center rounded xl'>
                        <h1 className='text-lg font-medium'>Chat</h1>
                        <h1 className='text-lg text-gray-500'>10 Mins</h1>
                    </div>
                </div>
                <div className='flex mx-10 mt-10 items-center text-center'>
                    <p className='text-2xl font-semibold mx-2'>Pick a time Slot</p>
                    <div className=' mt-4 mx-8 w-72 flex h-0 border border-gray-400 border-opacity-50 '></div>
                    <i class="text-2xl text-gray-500 border h-10 w-10 p-1 border-gray-500 rounded-3xl fa-solid fa-calendar-days"></i>
                </div>
                <div className='mx-14 mt-10 border h-32 w-3/4 border-gray-500 rounded-2xl justify-center items-center space-x-6 flex'>
                    <i class="border  border-gray-500 rounded-3xl mx-2 h-8 p-2 w-8 fa-solid fa-less-than"></i>
                    <div className='border w-40 border-gray-300 p-2 text-center rounded xl'>
                        <h1 className='text-lg text-green-700 font-medium'>Mon,10 Oct</h1>
                        <h1 className='text-lg text-gray-500'>10 Slots</h1>
                    </div>
                    <div className='border w-40 bg-gray-100 border-gray-300 p-2 text-center rounded xl'>
                        <h1 className='text-lg text-green-800 font-medium'>Tue,10 Oct</h1>
                        <h1 className='text-lg text-gray-500'><span className='text-red-500'>02 Slots</span></h1>
                    </div>
                    <div className='border w-40 border-gray-300 p-2 text-center rounded xl'>
                        <h1 className='text-lg font-medium'>Wed,10 Oct</h1>
                        <h1 className='text-lg text-gray-500'><span className='text-yellow-500'>05 Slots</span></h1>
                    </div>
                    <i class="border mr-4 border-gray-500 rounded-3xl h-8 p-2 w-8 fa-solid fa-greater-than"></i>
                </div>
                <h1 className='text-2xl font-bold mt-10 mx-14 '>Morning</h1>
                <div className='flex mx-10 text-center space-x-6 mt-8 items-center'>
                    <h1 className='border text-lg border-gray-400 rounded-3xl items-center p-6 text-center h-20 w-32'>09:00 AM</h1>
                    <h1 className='border text-lg border-gray-400 rounded-3xl items-center p-6 text-center h-20 w-32'>09:30 AM</h1>
                    <h1 className='border text-lg border-gray-400 rounded-3xl items-center p-6 text-center h-20 w-32'>10:00 AM</h1>
                    <h1 className='border text-lg border-gray-400 rounded-3xl items-center p-6 text-center h-20 w-32'>10:30 AM</h1>
                </div>
                <div className='flex mx-10 text-center space-x-6 mt-8 items-center'>
                    <h1 className='border text-lg border-gray-400 rounded-3xl items-center p-6 text-center h-20 w-32'>10:45 AM</h1>
                    <h1 className='border text-lg border-gray-400 bg-green-700 rounded-3xl text-white items-center p-6 text-center h-20 w-32'>11:00 AM</h1>

                </div>
                <h1 className='text-2xl font-bold mt-10 mx-14 '>Evening</h1>
                <div className='flex mx-10 text-center space-x-6 mt-8 items-center'>
                    <h1 className='border text-lg border-gray-400 rounded-3xl items-center p-6 text-center h-20 w-32'>04:00 PM</h1>
                    <h1 className='border text-lg border-gray-400 rounded-3xl items-center p-6 text-center h-20 w-32'>04:30 PM</h1>
                    <h1 className='border text-lg border-gray-400 rounded-3xl items-center p-6 text-center h-20 w-32'>04:45 PM</h1>
                    <h1 className='border text-lg border-gray-400 rounded-3xl items-center p-6 text-center h-20 w-32'>05:00 PM</h1>
                </div>
                <div className='flex mx-10 text-center space-x-6 mt-8 items-center'>
                    <h1 className='border text-lg border-gray-400 rounded-3xl items-center p-6 text-center h-20 w-32'>05:15 PM</h1>

                </div>
                <button className='mt-12 mx-12 my-10 bg-green-800 font-normal text-white text-2xl border rounded-xl w-3/4 h-20'>Make An Appointment</button>
            </div>
        </div>


    )
}
