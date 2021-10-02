import NavStyles from '../../styles/Navbar.module.css';

const Menu = ({clicked}) => { 
    return (
        <div className={NavStyles.Menu} onClick={clicked}>
    <i className="fas fa-bars"></i>
    </div>) 
};

export default Menu;