import HeaderStyles from '../../styles/Header.module.css';
import Navbar from '../Navbar/Navbar';
import Btn from '../Btn/Btn';

const Header = ({navBackgroundState}) => (
    <section className="container-fluid p-0">
        <header className={HeaderStyles.Header}>
            <Navbar showBackground={navBackgroundState} />
            <div className="row vh-100">
                <div className="col h-100 d-flex justify-content-end align-items-center">
                    <div className={HeaderStyles.Banner}>
                        <small className=""> Luxury & Automation</small>
                        <h1 className="text-light">Smarter, Secure & Safer Homes For You!</h1>
                        <Btn title={"Contact Us"} iconName={"paper-plane"} />
                    </div>
                </div>
            </div>
        </header>
    </section>
);

export default Header;