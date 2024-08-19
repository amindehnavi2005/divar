import { Button } from '@mui/material'
import React from 'react'

const CustomButton = ({ children, variant, color = "primary", onClick, fullWidth }) => {
    return (
        <Button variant={variant} color={color} onClick={onClick} fullWidth={fullWidth}>
            <p className='flex items-center gap-2'>{children.text} {children.icon}</p>
        </Button>
    )
}

export default CustomButton