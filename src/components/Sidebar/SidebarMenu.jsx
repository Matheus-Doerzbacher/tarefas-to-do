import { Search, SunMedium, ShoppingCart, Home as HomeIcon } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export default function SidebarMenu({ nome, href, icon, onClick, selecionado, esconderMenu}) {

    return (
        <>
            <Link key={nome} href={href} onClick={onClick}
                className={`flex items-center h-11 hover:bg-[#323130] 
                ${selecionado === href ? 'bg-[#3b3a39] hover:bg-[#3b3a39]': ''}`
            }>
                
                <div className={`h-full w-0.5 border-2 rounded-full border-[#55a4f0] bg-[#55a4f0] 
                    ${selecionado === href ? 'visible': 'invisible'}`} ></div>
                <div className='flex items-center px-5 gap-4'>
                    {icon}
                {esconderMenu ? "" : <span className='text-sm text-white hidden sm:flex'>{nome}</span> }
                </div>
            </Link>
        </>
    )
}