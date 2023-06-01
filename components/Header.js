import Link from 'next/link';
import { Menu } from './Menu';
import { SearchBar } from "./SearchBar";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { ProfileDropdown } from "./ProfileDropdown";
import UserDisplay from './UserDisplay';

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
            
            <div style={{paddingTop: "10px"}}>
                <ul>
                    <SearchBar/>
                    <li><ThemeSwitcher/></li>
                    <li><ProfileDropdown/></li>
                </ul>
                <UserDisplay/>
            </div>
        </nav>
    )
}