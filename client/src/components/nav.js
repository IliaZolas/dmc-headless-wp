import { Link } from 'react-router-dom';
import './nav.scss';

const Nav = () => {

    return (
        <div className="navbar">
            <div className="nav-contents">
                <div className="logo">
                    <Link to="/" className="item">
                        <strong>DMC</strong>
                    </Link>
                </div>
                <div className="nav-items">
                    <div className="nav-item">
                        <Link to="/#" className="item">
                            Solutions
                        </Link>
                    </div>
                    <div className="nav-item">
                        <Link to="/#" className="item">
                            Services
                        </Link>
                    </div>
                    <div className="nav-item">
                        <Link to="/#" className="item">
                            Case Studies
                        </Link>
                    </div>
                    <div className="nav-item nav-cta">
                        <Link to="/#" className="item">
                            Request Access
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Nav;