import './footer.scss'
import Menu from "../../UI/Menu/Menu.tsx";
import Logo from "../Logo/Logo";
import logo from "../../assets/react-white.svg"

const Footer = () => {
    return (
        <footer>
            <div className="container footer-container">
                <Logo logo={logo} />
                <Menu classes="footer-menu" />
            </div>
        </footer>
    );
};

export default Footer;
