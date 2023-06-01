import Context from "@/components/Context"
import { Header } from "@/components/Header"

export const metadata = {
  title: 'Forumative',
  description: 'Amazing site for forums',
}

export default function RootLayout({ children }) { 
  
  return (
    <html lang="en" data-theme="light">
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico@1/css/pico.min.css"/>
      </head>
      <body className="container" >
        <Context>
          <Header/> 
          <hr/>
          <main>{children}</main>
          <section/>
          <hr/>
          <footer>Created by Forumative, 2023</footer>
        </Context>
      </body>
    </html>
  )
}
