// React Imports
import React from 'react'

// Next Imports
import Link from 'next/link'

// ThirdParty Imports
import { Icon } from '@iconify/react'

// Data Imports
import { navbarItems } from '@/data/navbarItems'

const BottomAppbar = () => {
    return (
        <div className='grid grid-cols-4 gap-5 bg-background'>
            {navbarItems.map(item => (
                <Link href={item.link}>
                    <div className='flex justify-center items-center transition-all duration-200 hover:text-primary border-b-primary border-b-2 py-2'>
                        <Icon icon={item.icon} />
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default BottomAppbar