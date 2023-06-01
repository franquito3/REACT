import React, { useState, useEffect } from 'react';
import './estilo.css';
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Modal,
  Box,
  useMediaQuery,
  Button,
} from '@mui/material';

function Body({ selectedApi, searchTerm }) {
  const [data, setData] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [startIndex, setStartIndex] = useState(0);

  const apiUrl = `http://amazonia.iiap.org.pe/movil/tipo/${selectedApi}`;

  useEffect(() => {
    setIsLoading(true); // Mostrar preloader al cargar los datos

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
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

  const handlePageChange = (newIndex) => {
    setStartIndex(newIndex);
  };

  const cardsPerPage = 12;
  const totalPages = Math.ceil(data.length / cardsPerPage);

  const renderPageButton = (pageIndex) => {
    return (
      <Button
        key={pageIndex}
        variant={startIndex / cardsPerPage === pageIndex ? 'contained' : 'outlined'}
        color="primary"
        onClick={() => handlePageChange(pageIndex * cardsPerPage)}
        style={{ backgroundColor: 'rgb(0, 134, 183)', marginRight: '5px' }}
      >
        {pageIndex + 1}
      </Button>
    );
  };

  const renderPaginationButtons = () => {
    const currentPage = Math.floor(startIndex / cardsPerPage);
    const visiblePages = [];

    if (currentPage < 2) {
      for (let i = 0; i < 3; i++) {
        visiblePages.push(renderPageButton(i));
      }
    } else {
      visiblePages.push(renderPageButton(currentPage - 1));
      visiblePages.push(renderPageButton(currentPage));
      visiblePages.push(renderPageButton(currentPage + 1));
    }

    if (currentPage < totalPages - 1) {
      visiblePages.push(
        
      );
    }

    return visiblePages;
  };

  const renderCards = () => {
    if (isLoading) {
      return Array.from({ length: cardsPerPage }, (_, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card className="card skeleton-card">
            <CardContent className="skeleton-content">
              <div className="skeleton-thumbnail"></div>
              <div className="skeleton-title"></div>
              <div className="skeleton-subtitle"></div>
            </CardContent>
          </Card>
        </Grid>
      ));
    }

    let visibleData = data.slice(startIndex, startIndex + cardsPerPage);

    if (searchTerm) {
      visibleData = visibleData.filter((item) =>
        item.nombre.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return visibleData.map((item, index) => (
      <Grid item xs={12} sm={6} md={4} key={item.id}>
        <Card
          className={`card ${selectedCard === index ? 'selected' : ''}`}
          style={{ borderRadius: '15px', width: '100%' }}
          onClick={() => handleCardClick(index)}
        >
          <CardContent style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img
              src={`http://amazonia.iiap.org.pe/data/especie_img_high/${item.imagen}`}
              alt="Imagen de especie"
              width={150}
              height={200}
            />
            <Typography variant="h5" component="div">
              {item.nombre}
            </Typography>
            <Typography variant="body1" color="textSecondary">
              {item.ncientifico}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    ));
  };

  return (
    <div className="body" style={{ marginTop: '70px', minHeight: 'calc(100vh - 100px)', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <Grid container spacing={2} style={{ marginTop: '-100px', width: '80%' }}>
        {renderCards()}
      </Grid>

      {totalPages > 1 && (
        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          {renderPaginationButtons()}
        </Box>
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
