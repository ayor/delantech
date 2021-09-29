import Navbar from "./Navbar/Navbar";
import Footer from './Footer/Footer';
import { useEffect, useState } from 'react';

const Layout = props => {
    const [showNav, setShowNav] = useState(false);
    const [page, setPage] = useState("Home");
    useEffect(() => {
        const handleNav = () => {

            const val = window.scrollY;
            if (val > 1) {
                setShowNav(true);
            }else{
                setShowNav(false);
            }

            if (val >= 185 && val <= 1700) {
                setPage("prod");
            }
            else if (val >= 1700 && val <= 2200) {
                setPage("serv");
            }
            else if (val > 2200) {
                setPage("team");

            } else {
                setPage("Home");
                
            }
        }
        document.addEventListener("scroll", handleNav);

        return () => { document.removeEventListener("scroll", handleNav) }
    })

    return (
        <>
            <Navbar showBackground={showNav} page={page} />
            {props.children}
            <Footer />
        </>
    )
};

export default Layout;