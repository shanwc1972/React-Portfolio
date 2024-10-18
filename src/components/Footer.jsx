import React from 'react';

export default function Footer() {
  return (
    <footer style={footerStyle}>
      <div className="container">
      <a href="https://www.linkedin.com/in/warren-shan-12284060/" target="_blank" rel="noopener noreferrer">
          <img src="assets/images/linkedin.png" alt="LinkedIn" style={{ width: '30px', marginRight: '10px' }} />
        </a>
        <a href="https://github.com/shanwc1972" target="_blank" rel="noopener noreferrer">
          <img src="assets/images/github-logo.png" alt="GitHub" style={{ width: '30px' }} />
        </a>
      </div>
    </footer>
  );
}

const footerStyle = {
    backgroundColor: '#ffffff',
    color: '#ffffff',
    padding: '20px',
    textAlign: 'center',
    marginTop: 'auto',
    position: 'relative',
    bottom: 0,
    width: '100%',
  };