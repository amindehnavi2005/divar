// React Imports
import React from 'react'

// Next Imports
import Link from 'next/link'

// MUI Imports
import { Divider } from '@mui/material'
import { Typography } from '@mui/material'

// ThirdParty Imports
import { Icon } from '@iconify/react'

// Component Imports
import Logo from './Logo'
import Navbar from '../horizontal/Navbar'
import CustomButton from '../custom/CustomButton'

const Header = () => {
    return (
        <div className='fixed flex justify-between items-center p-5 border-b-secondary border-b-2 w-full bg-background text-textPrimary'>
            <div className='flex gap-5 items-center'>
                <Logo />
                <Divider orientation='vertical' color='white' flexItem />
                <div className='flex gap-2 items-center cursor-pointer'>
                    <Icon icon={"ri-map-pin-fill"} />
                    <Typography>نیشابور مثلا</Typography>
                </div>
                <CustomButton
                    children={{ text: "دسته ها", icon: <Icon icon={"ri-arrow-down-wide-fill"} /> }}
                    color='secondary'
                    variant={'contained'}
                />
            </div>
            <div className='lg:flex hidden gap-5 items-center'>
                <Navbar />
                <Link href={"/add-advertisement"}>
                    <CustomButton
                        children={{ text: "ثبت آگهی" }}
                        variant={'contained'}
                    />
                </Link>
            </div>
        </div>
    )
}

export default Header