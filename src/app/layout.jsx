// Next Imports
import { Inter } from "next/font/google";

// Css Imports
import "./globals.css";

// MUI Imports
import { ThemeProvider } from "@mui/material";

// Theme Imports
import { muiTheme } from "@/theme/themeConfig";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "دیوار",
  description: "وب سایت دیوار",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">

      <ThemeProvider theme={muiTheme}>

        <body className={inter.className}>{children}</body>

      </ThemeProvider>

    </html>
  );
}
