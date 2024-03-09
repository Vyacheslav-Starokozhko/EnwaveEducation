import React from 'react';
import {Link} from "react-router-dom";
interface MenuProps {

}

const Menu: React.FC<MenuProps> = ({}) => {

    return (
        <ul className="menu">
            <li><Link to='/'>Home</Link></li>
        </ul>
    );
};

export default Menu;