// React Imports
import React from 'react'

// Next Imports
import Link from 'next/link'

// MUI Imports
import { Box } from '@mui/material'

// ThirdParty Imports
import { Icon } from '@iconify/react'

// Data Imports
import { navbarItems } from '@/data/navbarItems'

// Component Imports
import CustomButton from '../custom/CustomButton'

const Navbar = () => {
    return (
        <Box display={"flex"} gap={5} justifyContent={"space-between"}>
            {
                navbarItems.map(item => (
                    <Link href={item.link}>
                        <CustomButton
                            children={{ icon: item.text, text: <Icon icon={item.icon} /> }}
                            color={"grey"}
                            variant={'contained'}
                        />
                    </Link>
                )
                )
            }
        </Box>
    )
}

export default Navbar