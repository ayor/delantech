import Link from 'next/link';
import NavStyles from '../../styles/Navbar.module.css';
import { useSelector } from "react-redux";

const Navbar = ({ showBackground, page }) => {
    const cartLength = useSelector((state) => state.cart.value.length);
    

    return (
        <div className="container">
            <nav className={showBackground ? "navbar navbar-expand-sm navbar-light fixed-top " + NavStyles.NavBar : "navbar navbar-expand-sm navbar-light fixed-top p-3"}>
                <a className="navbar-brand " href="#">DelanTech</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto " >
                        <li className="nav-item mr-2">
                            <Link href="/">
                                <a className="nav-link " > <span className={ page === "Home" ? NavStyles.Active : ""} >Home</span></a>
                            </Link>
                        </li>
                        <li className="nav-item mr-2">
                            <Link href="/#product">
                                <a className="nav-link " > <span className={ page === "prod" ? NavStyles.Active : ""}>Products</span></a>
                            </Link>
                        </li>
                        <li className="nav-item mr-2">
                            <Link href="/#services">
                                <a className="nav-link " > <span className={ page === "serv" ? NavStyles.Active : ""}>Services</span></a>
                            </Link>
                        </li>
                        <li className="nav-item mr-2">
                            <Link href="/#team">
                                <a className="nav-link " > <span className={ page === "team" ? NavStyles.Active : ""}>Team</span></a>
                            </Link>
                        </li>

                    </ul>
                    <div>
                        <Link href="/carts" passHref>
                            <div>
                                <i className="fas fa-shopping-cart "></i><span className={" mx-2   " + NavStyles.Cart}>{cartLength}</span>
                            </div>
                        </Link>
                    </div>
                </div>

            </nav>
        </div>
    )
}

export default Navbar;