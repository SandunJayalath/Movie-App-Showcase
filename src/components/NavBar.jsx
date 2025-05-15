import {Link} from 'react-router-dom'
import "../css/Navbar.css"

function NavBar(){
    return(
        <>
        <nav className="navbar">
            <div className="nav-container">
            <div className="nav-bar-brand">
                <Link to="/" className='brand-text' style={{display: "flex", alignItems: "center", gap: "5px"}}>
                    <img src="Logo.svg" alt="brand-logo"/>
                    Movie App
                </Link>
            </div>
            <div className="nav-bar links">
                <Link to="/" className='nav-link'>Home</Link>
                <Link to="/Favorite" className='nav-link'>Favorite</Link>
            </div>
            </div>
        </nav>
        </>
    );
}
export default NavBar;
