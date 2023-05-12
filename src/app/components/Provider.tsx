"use client"
import { ThemeProvider } from 'next-themes'

const Provider = ({children} : { children: React.ReactNode}) => {
  return (
    <ThemeProvider enableSystem={true} defaultTheme='system' attribute='class'>
        {children}
    </ThemeProvider>
  )
}

export default Provider