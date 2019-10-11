import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = (props) => {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/paint">Paint</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default NavBar