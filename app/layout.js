import Context from "@/components/Context"
import { Header } from "@/components/Header"
// import Script from "next/script";  // added to use Script
import './globals.css';  // needed for tailwind

export const metadata = {
  title: 'Forumative',
  description: 'Amazing site for forums',
}

export default function RootLayout({ children }) { 
  
  return (
    <html lang="en" data-theme="light">
      <head>
        {/* <Script src="https://cdn.tailwindcss.com"></Script>  added to try out tailwind */}
        <link href="https://cdn.jsdelivr.net/npm/daisyui@3.0.2/dist/full.css" rel="stylesheet" type="text/css" /> {/* added to try out daisy UI */}
      </head>
      <body className="container mx-auto px-4 " >
        <Context>
          <Header/> 
          <main>{children}</main>
          <section/>
          <br/>
          <hr/>
          <footer>Created by Forumative, 2023</footer>
        </Context>
      </body>
    </html>
  )
}
