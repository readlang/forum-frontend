import Link from 'next/link';
import { Menu } from './Menu';
import { SearchBar } from "./SearchBar";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { ProfileDropdown } from "./ProfileDropdown";

export function Header() {
    return(
        <nav>
            <ul>
                <Menu/>
            </ul>
            
            <ul>
                <Link href="/"><h5 style={{marginBottom: "0"}}>
                    Forumative&nbsp;
                </h5></Link>
            </ul>
            
            <ul>
                <SearchBar/>
                <li><ThemeSwitcher/> </li>
                <li><ProfileDropdown/> </li>
            </ul>
        </nav>
    )
}