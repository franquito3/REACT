import React from 'react';
import './estilo.css';
import Button from '@mui/material/Button';


function Header() {
  return (
    <header>
      <nav>
        <ul>
          <Button variant="contained"sx={{ backgroundColor: '#8b0000', color: '#FFFFFF' }}>Inicio</Button>
          <Button variant="contained"sx={{ backgroundColor: '#8b0000', color: '#FFFFFF' }}>Especies</Button>
          <Button variant="contained"sx={{ backgroundColor: '#8b0000', color: '#FFFFFF' }}>Acerca de</Button>
          <Button variant="contained"sx={{ backgroundColor: '#8b0000', color: '#FFFFFF' }}>Contacto</Button>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
