'use client'

// MUI Imports
import { createTheme } from "@mui/material";


export const muiTheme = createTheme({
    palette: {
        primary: {
            main: "#a62626",
        },
        secondary: {
            main: "#22221B",
        },
        background: "#242424",
        text: {
            primary: "#F2F2F2",
            secondary: "#9B9B9B"
        },
        common: {
            black: "#F2F2F2",
            white: "#F2F2F2"
        }
    },
    typography: {
        "fontFamily": " 'IranSansX', 'Franklin Gothic Medium' "
    },
});