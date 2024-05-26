import { NavLink } from "react-router-dom"
import "../styles/Header.css"

function Header() {
    return (
        <header>
            <h1>Resume Builder</h1>
            <nav>
                <NavLink to={"/cv-generator"}>View</NavLink>
                <NavLink to={"/cv-generator/form"}>Edit</NavLink>
            </nav>
        </header>
    )
}

export default Header