import NavStyles from '../../styles/Navbar.module.css';

const PageNav = ({ pageName }) => (<div className={NavStyles.PageNav}>{pageName}</div>);

export default PageNav;