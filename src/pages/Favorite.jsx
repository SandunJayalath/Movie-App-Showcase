import NavBar from "../components/NavBar";
import "../css/Favorites.css"

function Favorite(){
    return(
        <>
        <NavBar/>
        <div className="favorites-empty">
            <h2>No Favorite Movies yet!</h2>
            <p>Start adding the movies to your favorites then they will appear here!</p>
            <a href="/">
                <button>Look for movies</button>
            </a>
        </div>
        </>
    );
}
export default Favorite;
