import React, { useState, useEffect } from 'react';
import './estilo.css';
import { Card, CardContent, Typography, Grid, Modal, Box, CircularProgress, useMediaQuery, Button } from '@mui/material';


function Body({ selectedApi }) {
  const [data, setData] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [startIndex, setStartIndex] = useState(0);

  const apiUrl = `http://amazonia.iiap.org.pe/movil/tipo/${selectedApi}`;

  useEffect(() => {
    setIsLoading(true); // Mostrar preloader al cargar los datos

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        setData(data.especies);
        setIsLoading(false); // Ocultar preloader al completar la carga de datos
      });
  }, [apiUrl]);

  const handleCardClick = (index) => {
    setSelectedCard(index);
  };

  const handleCloseModal = () => {
    setSelectedCard(null);
  };

  const handleShowMoreData = () => {
    setStartIndex(prevIndex => prevIndex + 20);
  };

  const visibleData = data.slice(startIndex, startIndex + 12);

  return (
    <div className="body" style={{ marginTop: '70px', minHeight: 'calc(100vh - 100px)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      {isLoading ? (
        // Mostrar preloader mientras se cargan los datos
        <CircularProgress style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)' }} />
      ) : (
        <>
          <Grid container spacing={2} style={{ marginTop: '-100px', width: '80%' }}>
            {visibleData.map((item, index) => (
              <Grid item xs={12} sm={6} md={4} key={item.id}>
                <Card
                  className={`card ${selectedCard === index ? 'selected' : ''}`}
                  style={{ borderRadius:'15px', width: '100%' }}
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
            ))}
          </Grid>

          {startIndex + 20 < data.length && (
            <Button variant="contained" color="primary" onClick={handleShowMoreData} style={{ marginTop: '20px', }}>
              Mostrar más datos
            </Button>
          )}
        </>
      )}

      <Modal
        open={selectedCard !== null}
        onClose={handleCloseModal}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        BackdropProps={{
          timeout: 400,
          style: { backdropFilter: 'blur(8px)' }, // Aplicamos el efecto de desenfoque al fondo
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: useMediaQuery('(max-width: 600px)') ? '56%' : '55%', // Bajar el modal en dispositivos móviles
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: useMediaQuery('(max-width: 600px)') ? '75%' : 500, // Ajustar el ancho del modal según el tamaño de pantalla
            bgcolor: 'background.paper',
            border: '0.1px solid #ffffff',
            borderRadius: '20px',
            boxShadow: 24,
            p: 4,
          }}
        >
          {selectedCard !== null && (
            <>
              <Typography variant="h5" component="div" id="modal-title">
                {data[selectedCard].nombre}
              </Typography>
              <img
                src={`http://amazonia.iiap.org.pe/data/especie_img_high/${data[selectedCard].imagen}`}
                alt="Imagen de especie"
                width={300}
                height={400}
              />
              <Typography variant="body1" color="textSecondary" id="modal-description">
                {data[selectedCard].ncientifico}
              </Typography>
              <Typography variant="body1" color="textSecondary" id="modal-description">
                <audio controls>
                  <source src={data[selectedCard].sonido} type="audio/mp3,wav,ogg" />
                  Tu navegador no admite la reproducción de audio.
                </audio>
              </Typography>

              {/* Agrega aquí el contenido adicional que deseas mostrar en el modal */}
            </>
          )}
        </Box>
      </Modal>
    </div>
  );
}

export default Body;
