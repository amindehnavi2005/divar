// React Imports
import React from 'react'

// MUI Imports
import { Typography } from '@mui/material'

// Component Imports
import Header from '@/components/common/Header'
import BottomAppbar from '@/components/horizontal/BottomAppbar'

const Landing = () => {
    return (
        <div className='bg-background text-textPrimary'>
            <Header />
            <div className='lg:hidden block'>
                <BottomAppbar />
            </div>
        </div>
    )
}

export default Landing