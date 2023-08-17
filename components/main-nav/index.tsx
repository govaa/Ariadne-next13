"use client"
import * as React from "react";
import Link from "next/link";
import LocaleSelector from "../site-header/locale-selector/page";
import { ChevronDown } from "lucide-react";
import CurrentLocale from "../site-header/locale-selector/current-locale";

export default function MainNav() {
    const [isTechDropdownVisible, setTechDropdownVisibility] = React.useState(false);
    const [isIndustryDropdownVisible, setIndustryDropdownVisibility] = React.useState(false);

    return (
        <nav className="bg-white border-gray-200 ">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
                <Link href="/" className="flex h-10">
                    <img src="/images/logo/ariadne-long-logo.png" width={140} height={100} alt="Ariadne Logo Long" />
                </Link>

                <div className="hidden w-full md:flex md:w-auto" id="navbar-dropdown">
                    <ul className="flex flex-col h-full font-medium p-4 md:p-0 mt-4 md:flex-row md:space-x-8 md:mt-0">
                        <li className="p-2 rounded-full hover:bg-gray-100">
                            <a href="/" className="block py-4 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0">Home</a>
                        </li>

                        <li className="group relative p-2 rounded-md hover:bg-gray-100"
                            onMouseEnter={() => setTechDropdownVisibility(true)}
                            onMouseLeave={() => setTechDropdownVisibility(false)}>
                            <div className="flex items-center justify-between w-full py-4 px-4 text-gray-900 rounded md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto cursor-pointer">
                                Technology  <ChevronDown size={16}/>
                            </div>
                            {isTechDropdownVisible && (
                                <div className="z-10 absolute left-0 mt-2 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44">
                                    <ul className="py-4 text-sm text-gray-700">
                                        <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Ariadne Analytics</a></li>
                                        <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Ariadne Navigation</a></li>
                                        <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Ariadne Engagement</a></li>
                                    </ul>
                                    <div className="py-1">
                                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sign out</a>
                                    </div>
                                </div>
                            )}
                        </li>

                        <li className="group relative p-2 rounded-md hover:bg-gray-100"
                            onMouseEnter={() => setIndustryDropdownVisibility(true)}
                            onMouseLeave={() => setIndustryDropdownVisibility(false)}>
                            <div className="flex items-center justify-between w-full py-4 px-4 text-gray-900 rounded md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto cursor-pointer">
                                Industry <ChevronDown size={16}/>
                            </div>
                            {isIndustryDropdownVisible && (
                                <div className="z-10 absolute left-0 mt-2 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44">
                                    <ul className="py-4 text-sm text-gray-700">
                                        <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Airports</a></li>
                                        <li><a href="/industry/retail" className="block px-4 py-2 hover:bg-gray-100">Retail</a></li>
                                        <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Shopping Malls</a></li>
                                        <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Smart Cities</a></li>
                                    </ul>
                                    <div className="py-1">
                                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sign out</a>
                                    </div>
                                </div>
                            )}
                        </li>

                        <li className="p-2 rounded-full hover:bg-gray-100">
                            <a href="/blog" className="block py-4 pl-3 pr-4 text-gray-900 rounded md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">Blog</a>
                        </li>

                        <li className="p-2 rounded-md hover:bg-gray-100">
                            <a href="#" className="block py-4 pl-3 pr-4 text-gray-900 rounded md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">Pricing</a>
                        </li>

                        <li className="p-2 rounded-md hover:bg-gray-100">
                            <a href="/contact" className="block py-4 pl-3 pr-4 text-gray-900 rounded md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">Contact</a>
                        </li>
                    </ul>
                </div>

                <div className="flex items-center space-x-4">
                    <LocaleSelector />
                    <Link href="/get-started" className="inline-block bg-ariadnepurple hover:bg-opacity-90 text-white font-bold py-2 px-4 rounded-full">
                        Get Started
                    </Link>
                </div>
            </div>
        </nav>
    );
}
