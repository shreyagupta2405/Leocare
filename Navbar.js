import './Styles/Navbar.css';
import im from "./images/logo.jpeg"

const Navbar = () => (
    <header className='navbar'>
        <img src={im} width={50} height={50} style={{marginLeft: '0.8rem'}} alt="leocare logo"/>
        <div className='navbar__title navbar__item' style={{fontWeight: 'bold', fontSize:'2rem'}}>Leocare</div>
        <div className='navbar__item'>Home</div>
        <div className='navbar__item'>About Us</div>
        <div className='navbar__item'>Causes</div>
        <div className='navbar__item'>Gallery</div>
        <div className='navbar__item'>Contact</div>
        <div className='navbar__item' style={{fontWeight: 'bold'}}>Login</div>
        <div className='navbar__item' style={{fontWeight: 'bold'}}>Sign Up</div>
        <div className='navbar__item'>Help</div>        
    </header>
);

export default Navbar;