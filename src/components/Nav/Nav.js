import './Nav.css';
import { Link } from 'react-scroll';

const Nav = () => {
    return (
        <div className="Nav"> 
            <Link className='nav-link' to='header' smooth={true} duration={800} activeClass='active' spy={true}>HOME -</Link>
            <Link className='nav-link' to='about' smooth={true} duration={800} activeClass='active' spy={true}>ABOUT -</Link>
            <Link className='nav-link' to='portfolio' smooth={true} duration={800} activeClass='active' spy={true}>PORTFOLIO -</Link>
            <Link className='nav-link' to='contact' smooth={true} duration={800} activeClass='active' spy={true}>CONTACT -</Link>
        </div>
    )
}

export default Nav;
