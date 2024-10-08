import './globals.css'
import type { Metadata } from 'next'
import { Inter , Poppins } from 'next/font/google'
import Navbar from './component-ohu/Navbar'

const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins({ subsets: ['latin'] , weight : ['100','200' , '300' , '400' , '500' , '600' , '700'] })

export const metadata: Metadata = {
  title: 'OHU TEC',
  description: 'OHU TEC ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar/>
        {children}
      </body>
      
    </html>
  )
}
