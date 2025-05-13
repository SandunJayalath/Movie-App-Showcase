import {Link} from 'react-router-dom'
import "../css/Navbar.css"

function NavBar(){
    return(
        <>
        <nav className="navbar"> 
            <div className="nav-bar brand">
                <Link to="/">Movie App</Link>
            </div>
            <div className="nav-bar links">
                <Link to="/" className='nav-link'>Home</Link>
                <Link to="/Favorite" className='nav-link'>Favorite</Link>
            </div>
        </nav>
        </>
    );
}
export default NavBar;
