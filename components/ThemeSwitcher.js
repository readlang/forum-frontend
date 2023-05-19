"use client"

export function ThemeSwitcher() {
    return(
        <input type="checkbox" id="switch" name="switch" role="switch"
            onClick={() => 
                document.getElementsByTagName("html")[0].dataset.theme==="light" ? 
                document.getElementsByTagName("html")[0].dataset.theme = 'dark' : 
                document.getElementsByTagName("html")[0].dataset.theme = 'light'
            } 
        />
    )
}