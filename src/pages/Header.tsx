
import {Link} from "react-router-dom";

const Header=()=>{
    return (
        <nav className="nav-container" style={{
            display: 'flex',
            gap: '15px',
            padding: '10px 20px',
            backgroundColor: '#f0f0f0',
            borderBottom: '1px solid #ddd',
            justifyContent: 'center',
            alignItems: 'center',
            height: '64px'
        }}>
            <Link to="/" className="button-link" style={{ textDecoration: 'none', color: '#007bff', fontWeight: 'bold' }}>Home</Link>
            <Link to="/enterLogin" className="button-link" style={{ textDecoration: 'none', color: '#007bff', fontWeight: 'bold' }}>EnterLogin</Link>
            <Link to="/authForm" className="button-link" style={{ textDecoration: 'none', color: '#007bff', fontWeight: 'bold' }}>AuthForm</Link>
            <Link to="*" className="button-link" style={{ textDecoration: 'none', color: '#007bff', fontWeight: 'bold' }}>PageNotFound</Link>

        </nav>
    );
};

export default Header;
