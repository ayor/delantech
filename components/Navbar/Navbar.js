import Link from 'next/link';
import NavStyles from '../../styles/Navbar.module.css';
import { useSelector } from "react-redux";

const Navbar = ({ showBackground }) => {
    const cart = useSelector((state) => state.cart.value);

    return (
        <div className="container">
            <nav className={showBackground ? "navbar navbar-expand-sm navbar-light fixed-top " + NavStyles.NavBar : "navbar navbar-expand-sm navbar-light fixed-top p-3"}>
                <a className="navbar-brand text-light " href="#">DelanTech</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto " >
                        <li className="nav-item mr-2">
                            <Link href="/">
                                <a className="nav-link " > <span className={NavStyles.Active} >Home</span></a>
                            </Link>
                        </li>
                        <li className="nav-item mr-2">
                            <Link href="#products">
                                <a className="nav-link text-light" > <span >Products</span></a>
                            </Link>
                        </li>
                        <li className="nav-item mr-2">
                            <Link href="#services">
                                <a className="nav-link text-light" > <span >Services</span></a>
                            </Link>
                        </li>
                        <li className="nav-item mr-2">
                            <Link href="/">
                                <a className="nav-link text-light" > <span >Team</span></a>
                            </Link>
                        </li>

                    </ul>
                    <div>
                        <Link href="/carts" passHref>
                            <i className="fas fa-shopping-cart text-light"></i><span className={" mx-2 text-light  " + NavStyles.Cart}>{cart.length}</span>
                        </Link>
                    </div>
                </div>

            </nav>
        </div>
    )
}

export default Navbar;