"use client"

import { usePathname } from 'next/navigation';

export default function Navbar() {
    const pathname = usePathname();

    return(
        <body>
        <nav className="bg-white">
            <div className="flex justify-center">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                        <a href="/" className="flex items-center"><div>
                            <p className="text-[#008fcf] font-extrabold">bloggie - your only blogs source.</p>
                        </div></a>
                        <div className="hidden sm:block sm:ml-6">
                            <div className="flex space-x-4">
                                <a href="/" className={`bg-[#0071a7] text-[#effaff] hover:bg-[#008fcf] hover:text-[#effaff] px-3 py-2 rounded-[40px] text-sm font-medium ${pathname !== '/' ? 'bg-[#FFFFFF] text-gray-300' : ''}`}>Dashboard</a>
                                <a href="/discover" className={`text-gray-300 hover:bg-[#008fcf] hover:text-[#effaff] px-3 py-2 rounded-[40px] text-sm font-medium ${pathname === '/discover' ? 'bg-[#0071a7] text-white' : ''}`}>Discover</a>
                                <a href="/about" className={`text-gray-300 hover:bg-[#008fcf] hover:text-[#effaff] px-3 py-2 rounded-[40px] text-sm font-medium ${pathname === '/about' ? 'bg-[#0071a7] text-white' : ''}`}>About us</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
        </body>
    );
}
