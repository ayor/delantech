import Link from 'next/link';
import NavStyles from '../../styles/Navbar.module.css';
import { useSelector } from "react-redux";
import MenuBar from './HamburgerMenu';
import { useEffect, useState } from 'react';

const Navbar = ({ showBackground, page }) => {
    const cartLength = useSelector((state) => state.cart.items.length);
    const [toggleBar, setToggleState] = useState(false);
    const [classNames, setClassNames] = useState(NavStyles.Links)

    useEffect(()=>{
       if(window.screen["width"] >= 565){
           setToggleState(true);
       }
    },[setToggleState])

    return (
        <div className="container">
            <nav className={ "navbar navbar-expand-sm navbar-light fixed-top p-3 " + NavStyles.NavBar }>
                <Link href="/" passHref>
                <a className="navbar-brand " >DelanTech</a>
                </Link>
                {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button> */}
                <MenuBar clicked={() => setToggleState(!toggleBar)} />
                {toggleBar ? <div className={"collapse navbar-collapse d-flex justify-content-between "+ NavStyles.Links} id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto " >
                        <li className="nav-item mr-2" >
                            <Link href="/">
                                <a className="nav-link " > <span className={page === "Home" ? NavStyles.Active : ""} >Home</span></a>
                            </Link>
                        </li>
                        <li className="nav-item mr-2" >
                            <Link href="/#product">
                                <a className="nav-link " > <span className={page === "prod" ? NavStyles.Active : ""}>Products</span></a>
                            </Link>
                        </li>
                        <li className="nav-item mr-2" >
                            <Link href="/#services">
                                <a className="nav-link " > <span className={page === "serv" ? NavStyles.Active : ""}>Services</span></a>
                            </Link>
                        </li>
                       
                    </ul>
                    <div>
                        <Link href="/carts" passHref >
                            <div >
                                <i className="fas fa-shopping-cart "></i><span className={" mx-2   " + NavStyles.Cart}>{cartLength}</span>
                            </div>
                        </Link>
                    </div>
                </div>
                    : null}
            </nav>
        </div>
    )
}

export default Navbar;