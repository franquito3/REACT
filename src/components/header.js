import React, { useState } from 'react';
import './estilo.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function Header() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    const { value } = event.target;
    setSearchTerm(value);
    // Aquí puedes realizar las acciones de búsqueda según el término actualizado
    // por ejemplo, llamar a una función para filtrar los resultados en el cuerpo de la página.
    // onSearch(value);
  };

  return (
    <header style={{ height: '60px', padding: '10px' }}>
      <nav>
        <ul style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <h1 style={{ color: '#ffffff', fontSize: '24px', margin: 0 }}>AMAZONÍA</h1>
          <TextField
            label="Buscar"
            variant="outlined"
            value={searchTerm}
            onChange={handleSearchChange}
            style={{ backgroundColor: '#FFFFFF', marginLeft: '10px' }}
          />
        </ul>
      </nav>
    </header>
  );
}

export default Header;
