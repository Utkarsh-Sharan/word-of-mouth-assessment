import "./Navbar.css";
import ReactImage from "../../assets/react.svg";
import { Heart, Search, ShoppingBasket, User } from "lucide-react";

function Navbar() {
  return (
    <nav className="navbar">
        <div className="nav-left-content">
            <img src={ReactImage} alt="logo" />

            <ul className="nav-list-content">
                <li>Home</li>
                <li>Blogs</li>
                <li>Track My Order</li>
                <li>Contact</li>
            </ul>
        </div>

        <ul className="nav-list-content">
            <li><Search /></li>
            <li><User /></li>
            <li><Heart /></li>
            <li><ShoppingBasket /></li>
        </ul>
    </nav>
  )
}

export default Navbar