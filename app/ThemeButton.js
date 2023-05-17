"use client"

export function ThemeButton() {
    return(
        <button onClick={()=> 
          document.getElementsByTagName("html")[0].dataset.theme==="light" ? 
          document.getElementsByTagName("html")[0].dataset.theme='dark' : 
          document.getElementsByTagName("html")[0].dataset.theme='light'} > toggle darkmode
        </button>
    )
}