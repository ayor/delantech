import Navbar from "./Navbar/Navbar";
import Footer from './Footer/Footer';
import { useEffect, useState } from 'react';

const Layout = props => {
    const [showNav, setShowNav] = useState(false);

    useEffect(() => {
      const handleNav = () => {
        const val = window.scrollY;
        if (val > 1) {
          setShowNav(true);
        }else{
          setShowNav(false);
        }
      }
      document.addEventListener("scroll", handleNav);
  
      return () => { document.removeEventListener("scroll", handleNav) }
    })
    
    return(
    <>
        <Navbar showBackground={ showNav} />
        {props.children}
        <Footer />
    </>
)};

export default Layout;