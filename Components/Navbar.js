import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
    return (
        <div>
            <div className="w-full bg-white shadow-md sticky top-0 z-50 h-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
                    <div className="flex justify-between items-center h-full">
                        <Link
                            href="/"
                            className="text-2xl md:text-3xl font-bold text-primary hover:text-primary-dark transition-colors"
                        > 
<div className="flex items-center space-x-2">
                        <Image
                                    src={"/logo.jpg"}
                                    alt="Description"
                                    width={80}
                                    height={80}
                                   
                        
                                  /> <h1>Food Share</h1></div>
                        </Link>

                        {/* Desktop Navigation */}
                        <nav className="hidden lg:block">
                            <ul className="flex space-x-4 xl:space-x-6 items-center">
                                <li><Link href="/" className=" hover:font-semibold hover:underline hover:text-blue-500 ">Home</Link></li>
                                <li><Link href="/About" className=" hover:font-semibold hover:underline hover:text-blue-500 ">About</Link></li>
                                <li><Link href="/Donate" className=" hover:font-semibold hover:underline hover:text-blue-500">Donate Food</Link></li>
                                <li><Link href="/Volunteer" className=" hover:font-semibold hover:underline hover:text-blue-500">Volunteer</Link></li>
                                <li><Link href="/Needy" className=" hover:font-semibold hover:underline hover:text-blue-500">Get Food</Link></li>
                                <li><Link href="/Contact" className=" hover:font-semibold hover:underline hover:text-blue-500">Contact</Link></li>

                            </ul>
                        </nav>

                        {/* Mobile Menu Button */}
                        <button className="lg:hidden p-2 text-gray-600 hover:text-primary transition-colors">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Navbar


