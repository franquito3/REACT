import React, { useState, useEffect } from 'react';
import './estilo.css';
import { Card, CardContent, Typography, Grid, Modal, Box } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';

function Body({ selectedApi }) {
  const [data, setData] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);

  const apiUrl = `http://amazonia.iiap.org.pe/movil/tipo/${selectedApi}`;

  useEffect(() => {
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => setData(data.especies));
  }, [apiUrl]);

  const handleCardClick = (index) => {
    setSelectedCard(index);
  };

  const handleCloseModal = () => {
    setSelectedCard(null);
  };

  return (
    <div className="body" style={{ marginTop: '110px', display: 'flex', justifyContent: 'center' }}>
      <Grid container spacing={2} style={{ marginTop: '-100px', width: '80%' }}>
        {data.length > 0 ? (
          data.slice(0, 20).map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={item.id}>
              <Card
                className={`card ${selectedCard === index ? 'selected' : ''}`}
                style={{ width: '100%' }}
                onClick={() => handleCardClick(index)}
              >
                <CardContent style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <img src={`http://amazonia.iiap.org.pe/data/especie_img_high/${item.imagen}`} alt="Imagen de especie" width={150} height={200} />
                  <Typography variant="h5" component="div">
                    {item.nombre}
                  </Typography>
                  <Typography variant="body1" color="textSecondary">
                    {item.ncientifico}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))
        ) : (
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <InfoIcon style={{ marginRight: '10px' }} />
            <Typography variant="body1" color="textSecondary">
              No hay datos disponibles
            </Typography>
          </div>
        )}

        <Modal
          open={selectedCard !== null}
          onClose={handleCloseModal}
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
        >
          <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 500, bgcolor: 'background.paper', border: '2px solid #000', borderRadius: '20px', boxShadow: 24, p: 4 }}>
            {selectedCard !== null && (
              <>
                <Typography variant="h5" component="div" id="modal-title">
                  {data[selectedCard].nombre}
                </Typography>
                <img src={`http://amazonia.iiap.org.pe/data/especie_img_high/${data[selectedCard].imagen}`} alt="Imagen de especie" width={300} height={400} />
                <Typography variant="body1" color="textSecondary" id="modal-description">
                  {data[selectedCard].ncientifico}
                </Typography>
                {/* Agrega aquí el contenido adicional que deseas mostrar en el modal */}
              </>
            )}
          </Box>
        </Modal>
      </Grid>
    </div>
  );
}

export default Body;
