import {Link} from "react-router-dom";


const Header=()=>{
    return (

        <nav className="nav-container" style={{
            display: 'flex',
            gap: '15px',
            padding: '10px 20px',
            backgroundColor: '#007bff',
            borderBottom: '1px solid #ddd',
            justifyContent: 'center',
            alignItems: 'center',
            height: '64px'
        }}>

            <Link to="/" className="button-link" style={{ textDecoration: 'none', color: '#ffffff', fontWeight: 'bold' }}>Home</Link>

        </nav>
    );
};

export default Header;
