import { useEffect, useState } from 'react';
import Header from '../components/Header/Header';
import Products from '../components/Products/Index';
import Services from '../components/Services/Services';
import Team from '../components/Team/Team';

export default function Home() {
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
  return (
    <>
      <Header navBackgroundState={showNav} />
      <Products />
      <Services/>
      <Team/>
    </>
  )
}
