import React from 'react';
import './estilo.css';
import myImage from './logo.png';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";

function Body() {
  const data = [
    { id: 1, name: "Flor 1", category: "Tropical" },
    { id: 2, name: "Flor 2", category: "Exótica" },
    { id: 3, name: "Flor 3", category: "Endémica" },
    // Agrega más datos según sea necesario
  ];

  return (
    <div className="body">
      <h1>AMAZONÍA</h1>
      <p>GUIA ILUSTRADA DE FLORA Y FAUNA</p>
      <img src={myImage} width={150} height={150}/>
      
      <TableContainer component={Paper} style={{ maxHeight: '1500px', overflow: 'auto' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>NOMBRE</TableCell>
              <TableCell>CATEGORIA</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.category}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Body;
