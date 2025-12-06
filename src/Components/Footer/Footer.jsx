import "./Footer.css";

export default function Footer() {
    return (
    <footer className="footer">
        <div className="footerContainer">
        <div className="footerColumn">
            <h3 className="appTitle">PulseUI Mini</h3>
            <p className="appDescription">
            A compact design system with big ideas.
            </p>
        </div>

        <div className="footerColumn">
            <h4 className="footerHeading">Design</h4>
            <ul className="footerList">
            <li>Branding</li>
            <li>Typography</li>
            <li>Colors</li>
            </ul>
        </div>

        <div className="footerColumn">
            <h4 className="footerHeading">Components</h4>
            <ul className="footerList">
            <li>Showcase</li>
            <li>Glassmorphism</li>
            <li>Themes</li>
            </ul>
        </div>

        <div className="footerColumn">
            <h4 className="footerHeading">About</h4>
            <ul className="footerList">
            <li>React + Tailwind CSS</li>
            <li>MUI + Glassmorphism</li>
            <li>v1.0.0</li>
            </ul>
        </div>
        </div>
    </footer>
    );
}
