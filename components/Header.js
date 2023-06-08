import Link from 'next/link';
import { Menu } from './Menu';
import { SearchBar } from "./SearchBar";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { ProfileDropdown } from "./ProfileDropdown";
import UserDisplay from './UserDisplay';

export function Header() {
    return(
        <nav className="sticky top-0 bg-base-200 -mx-1">
            <div className="flex justify-between pt-5 items-center" >
                <Menu/>
                
                <Link href="/" className='text-2xl font-bold'>
                    Forumative&nbsp;
                </Link>
                
                <div className='flex items-center gap-2'>
                    <SearchBar/> 
                    <ThemeSwitcher/> 
                    <ProfileDropdown/> 
                </div>
                    
            </div>
            <div className="flex justify-end mb-1"> <UserDisplay/> </div>
            <hr/>
        </nav>
    )
}