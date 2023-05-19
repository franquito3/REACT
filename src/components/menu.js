import React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

function MenuComponent() {
  return (
    <Toolbar sx={{ backgroundColor: '#8b0000', justifyContent: 'center' }}>
      <Button variant="contained" sx={{ mx: 1, backgroundColor: '#8b0000', color: '#FFFFFF' }}>
        Inicio
      </Button>
      <Button variant="contained" sx={{ mx: 1, backgroundColor: '#8b0000', color: '#FFFFFF' }}>
        Especies
      </Button>
      <Button variant="contained" sx={{ mx: 1, backgroundColor: '#8b0000', color: '#FFFFFF' }}>
        Acerca de
      </Button>
      <Button variant="contained" sx={{ mx: 1, backgroundColor: '#8b0000', color: '#FFFFFF' }}>
        Contacto
      </Button>
    </Toolbar>
  );
}

export default MenuComponent;
