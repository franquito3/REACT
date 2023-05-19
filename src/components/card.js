import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

function Example() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Card style={{ width: '300px', height: '300px' }}>
        <CardContent>
          <Typography variant="h5" component="div">
            Título de la tarjeta
          </Typography>
          <Typography variant="body2">
            Contenido de la tarjeta. 
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default Example;
