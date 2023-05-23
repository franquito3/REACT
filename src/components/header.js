import React, { useState } from 'react';
import './estilo.css';
import TextField from '@mui/material/TextField';
import myImage from './logo.png';
import myImaage from './splash.png';

function Header() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    const { value } = event.target;
    setSearchTerm(value);
  };

  return (
    <header className="header">
      <nav>
        <ul className="header-content">
          <div className="logo-container">
            <img src={myImage} width={70} height={70} alt="Logo de Amazonía" style={{ marginLeft: '-30px' }}/>
            <img src={myImaage} width={200} height={70} alt="Logo de Amazonía" />
          </div>
          <TextField
            label="Buscar"
            variant="outlined"
            value={searchTerm}
            onChange={handleSearchChange}
            style={{ backgroundColor: '#FFFFFF', marginRight: '50px' }}
          />
        </ul>
      </nav>
    </header>
  );
}

export default Header;
