import { Link } from "react-router-dom";
import "../styles/Nav.css"

function Nav() {
    // const [showHome, setShowHome] = useState(true)

    return (
        <nav className="nav">
            <ul className="unor-list">
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/Articles">Articles</Link></li>
                <li><Link to="/About">About</Link></li>
                <li><Link to="/Contact">Contact</Link></li>
                <li><Link to="/Calculator">Simple Calculator</Link></li>
            </ul>
        </nav>
    );
}

export default Nav;