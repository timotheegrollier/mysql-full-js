import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
    render() {
        return (
            <div id='navbar'>
                <nav>
                    <ul>
                        <li>
                            <Link className='navLink' to="/">Home</Link>
                        </li>
                        <li>
                            <Link className='navLink' to="/list">List</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Nav;