import { NavStyle } from "../styles/Navigation.style"
import { NavLink } from "react-router-dom"

function Navigation() {
    return (
        <NavStyle>
            <NavLink to='/'  activeClassName="active" >Home</NavLink>
            <NavLink to='/add' activeClassName="active">Add Game</NavLink>
        </NavStyle>
    )
}

export default Navigation