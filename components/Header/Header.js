import HeaderStyles from '../../styles/Header.module.css';
import Navbar from '../Navbar/Navbar';
import Btn from '../Btn/Btn';
import Link from 'next/link';
import BtnStyles from "../../styles/Btn.module.css";

const Header = () => (
    <section className="container-fluid p-0">
        <header className={HeaderStyles.Header}>
            <div className="row vh-100">
                <div className="col h-100 d-flex justify-content-end align-items-center">
                    <div className={HeaderStyles.Banner}>
                        <small className=""> Luxury & Automation</small>
                        <h1 className="text-light">Smarter, Secure & Safer Homes For You!</h1>
                        <Link href="mailto:info@delantech.com.ng" passHref>
                           
                                <a className={"btn  " + BtnStyles.Btn}> <span className="mr-2 ">Make An Order </span><i className="fas fa-paper-plane"></i></a>
                               
                            
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    </section>
);

export default Header;