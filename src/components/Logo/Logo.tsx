import React from 'react';
import {Link} from "react-router-dom";
import './logo.scss'

interface LogoProps {
    logo: string
}

const Logo: React.FC<LogoProps> = ({logo}) => {
    return (
        <Link to='/' className="logo-link">
            <img src={logo} alt="logo"/>
        </Link>
    );
};

export default Logo;
