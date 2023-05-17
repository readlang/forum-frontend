// "use client"

import { ThemeButton } from "./ThemeButton"

export const metadata = {
  title: 'Forumative',
  description: 'Amazing site for forums',
}

export default function RootLayout({ children }) {
  

  return (
    <html lang="en" data-theme="light">
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico@1/css/pico.min.css"/>
        <title>Forumative</title>
      </head>
      <body>
        <h1>layout file</h1>
        {/* <button onClick={()=> theme==="light" ? setTheme("dark") : setTheme("light")} >light/dark</button> */}

        <ThemeButton />

        {/* <button onClick={()=> 
          document.getElementsByTagName("html")[0].dataset.theme==="light" ? 
          document.getElementsByTagName("html")[0].dataset.theme='dark' : 
          document.getElementsByTagName("html")[0].dataset.theme='light'} > light/dark
        </button> */}

        

        {children}
      </body>
    </html>
  )
}
