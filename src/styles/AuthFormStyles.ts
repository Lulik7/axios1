

export const formContainerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px', 
    maxWidth: '400px', 
    margin: '40px auto', 
    padding: '30px',
    border: '1px solid #ddd',
    borderRadius: '10px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
};

export const labelStyle: React.CSSProperties = {
    textAlign: 'left',
    marginBottom: '5px',
    fontWeight: 'bold',
    color: '#333',
};

export const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '10px 12px',
    margin: '0', 
    border: '1px solid #ccc',
    borderRadius: '6px',
    fontSize: '16px',
    boxSizing: 'border-box', 
};

export const buttonStyle: React.CSSProperties = {
    padding: '12px 25px',
    fontSize: '18px',
    fontWeight: 'bold',
    backgroundColor: '#4096ff',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    marginTop: '20px', // Отступ сверху от полей
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    transition: 'background-color 0.3s ease, transform 0.2s ease',
};
