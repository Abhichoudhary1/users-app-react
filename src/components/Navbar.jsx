import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <nav class="navbar bg-dark ">
                <div class="container-fluid">
                 
                   <Link to="/">
                   <span class="navbar-brand mb-0 h1 text-light">Users</span>
                    </Link>
                    <Link to="/about">
                    <span class="navbar-brand mb-0 h1 text-light">about</span>
                    </Link>
                </div>
            </nav>
        </div>
    )
}

export default Navbar

