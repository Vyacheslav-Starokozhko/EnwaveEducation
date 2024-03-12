import React from 'react';
import {Link} from "react-router-dom";
interface MenuProps {
    classes: string
}

const Menu: React.FC<MenuProps> = ({classes}) => {

    const container_classes = ['menu',classes]

    return (
        <ul className={container_classes.join(' ')}>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/blog'>Blog</Link></li>
            <li><Link to='/counters'>Counters</Link></li>
            <li><Link to='/forms'>Forms</Link></li>
        </ul>
    );
};

export default Menu;
