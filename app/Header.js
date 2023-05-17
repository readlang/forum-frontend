import { ThemeSwitcher } from "./ThemeSwitcher";
import { BsPersonCircle, BsList } from "react-icons/bs";

export function Header() {

    return(
        <nav>
            <ul>
                <li><a href="#" className="secondary">
                    <BsList size="2em"/>
                </a></li>
            </ul>
            
            <ul>
                <li><strong>Forumative</strong>  </li>
            </ul>
            
            <ul>
                <input type="search" id="search" name="search" placeholder="Search" 
                    style={{height: "1em", width: "150px", marginBottom: "0"}}/>
                <li><ThemeSwitcher/> </li>
                <li><a href="#" className="secondary"> 
                    <BsPersonCircle size="1.5em" />
                </a></li>
            </ul>
        </nav>
    )
}