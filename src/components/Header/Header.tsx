import Menu from "../../UI/Menu/Menu.tsx";
import "./header.scss"
import Logo from "../Logo/Logo";
import logo from "../../assets/react.svg"

const Header = () => {
    return (
        <header>
            <div className="container header-container">
                <Logo logo={logo}/>
                <Menu classes="header-menu"/>
            </div>
        </header>
    );
};

export default Header;
