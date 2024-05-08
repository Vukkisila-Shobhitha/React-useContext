import { useContext } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import DataContext from "./context/DataContext";

const Navbar = () => {
    const { listenCartBtn, cartCount } = useContext(DataContext);

    return (
        <nav className="navbar border-bottom border-body sticky-top " data-bs-theme="dark"
            style={{ backgroundColor: "black" }}>
            <div className="container-fluid ">
                <Link to={"/"} className='text-decoration-none navbar-brand ms-4'>
                    <h3 className="mb-0">Online Shopping</h3>
                </Link>
                <Link to={"/cart"} className='me-4 text-decoration-none' onClick={listenCartBtn}>
                    <div className="position-relative me-4">
                        <FaCartShopping type="submit"
                            style={{ color: "#ffffff", height: "25px", width: "25px" }} />
                        <span className="cart-count">{cartCount}</span>
                    </div>
                </Link>
            </div>
        </nav>
    )
}

export default Navbar