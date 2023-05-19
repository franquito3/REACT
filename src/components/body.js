import React from 'react';
import './estilo.css';
import myImage from './logo.png';
import { DataGrid } from '@mui/x-data-grid';

function Body() {
  const data = [
    { id: 1, name: "Flor 1", category: "Tropical" },
    { id: 2, name: "Flor 2", category: "Exótica" },
    { id: 3, name: "Flor 3", category: "Endémica" },
    // Agrega más datos según sea necesario
  ];

  const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'name', headerName: 'NOMBRE', width: 200 },
    { field: 'category', headerName: 'CATEGORIA', width: 200 },
  ];

  return (
    <div className="body" style={{ marginTop: '100px' }}>
      <h1>AMAZONÍA</h1>
      <p>GUIA ILUSTRADA DE FLORA Y FAUNA</p>
      <img src={myImage} width={150} height={150} alt="Logo de Amazonía" />
      
      <div style={{ height: 500, width: '100%', marginTop: '20px'}}>
        <DataGrid rows={data} columns={columns} pageSize={10} />
      </div>
    </div>
  );
}

export default Body;
