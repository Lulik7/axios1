import React from 'react';
import { useNavigate } from "react-router-dom";

const EnterLogin: React.FC = () => {
    const navigate = useNavigate();


    const handleLoginClick = () => {
        navigate('/authForm');
    };

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: 'calc(100vh - 128px)',
            flexDirection: 'column',
            gap: '20px'
        }}>
            <h2>Wellcome!</h2>
            <p>Press on the button to enter.</p>
            <button
                onClick={handleLoginClick}
                style={{
                    padding: '12px 24px',
                    fontSize: '18px',
                    fontWeight: 'bold',
                    backgroundColor: '#4096ff',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                    transition: 'background-color 0.3s ease, transform 0.2s ease',
                }}
            >
                Login
            </button>
        </div>
    );
}

export default EnterLogin;
