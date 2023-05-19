import Link from 'next/link';
import { Modal } from './Modal';
import { SearchBar } from "./SearchBar";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { ProfileDropdown } from "./ProfileDropdown";

export function Header() {
    return(
        <nav>
            <ul>
                <Modal/>
            </ul>
            
            <ul>
                <li><strong>
                    <Link href="/"> 
                            Forumative
                    </Link>
                </strong>  </li>
            </ul>
            
            <ul>
                <SearchBar/>
                <li><ThemeSwitcher/> </li>
                <li><ProfileDropdown/> </li>
            </ul>
        </nav>
    )
}