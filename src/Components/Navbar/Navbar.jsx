import "./Navbar.css";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
export default function Navbar (){
    return(
    <nav className="navbar">
        <div className="logo">
        <img src="/logo.png" alt="PulseUI Mini Logo" className="logoImg" />
        <span>PulseUI Mini</span>
        </div>

    <ul className="navLinks">
        <li><a href="#branding">Branding</a></li>
        <li><a href="#colors">Color Palette</a></li>
        <li><a href="#typography">Typography</a></li>
        <li><a href="#components">Components</a></li>
        <li><a href="#glassmophorism">Glassmophorism</a></li>
        <li><a href="#themes">Multi-Themes</a></li>
    </ul>
    <ThemeToggle />
    </nav>
    );
}