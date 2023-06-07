import Context from "@/components/Context"
import { Header } from "@/components/Header"
import './globals.css';  // needed for tailwind

export const metadata = {
  title: 'Forumative',
  description: 'Amazing site for forums',
}

export default function RootLayout({ children }) { 
  
  return (
    <html lang="en" data-theme="light">
      <head>
        
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
