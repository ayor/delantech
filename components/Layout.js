import Navbar from "./Navbar/Navbar";
import Footer from './Footer/Footer';
const Layout = props => (
<>
{props.children}
<Footer/>
</>
); 

export default Layout; 