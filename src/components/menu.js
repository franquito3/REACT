import React, { useState } from 'react';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import { Link } from 'react-router-dom';

function MenuComponent({ onApiChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const [showMenuIcon, setShowMenuIcon] = useState(window.innerWidth <= 750);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  window.addEventListener('resize', () => {
    setShowMenuIcon(window.innerWidth <= 750);
  });

  const handleApiChange = (apiType) => {
    onApiChange(apiType);
    handleClose();
  };

  return (
    <>
      <Toolbar
        sx={{
          backgroundColor: '#8b0000',
          justifyContent: 'flex-start',
          marginTop: showMenuIcon ? '90px' : '0', // Ajustar el margen superior según showMenuIcon
          zIndex: 1000,
        }}
      >
        {showMenuIcon && (
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleOpen}
            sx={{ marginRight: 'auto' }}
          >
            <MenuIcon />
          </IconButton>
        )}
      </Toolbar>
      <Drawer anchor="left" open={isOpen} onClose={handleClose}>
        <div role="presentation" onClick={handleClose} onKeyDown={handleClose}>
          <Button
            component={Link}
            to="/"
            fullWidth
            sx={{ marginTop: '100px', paddingTop: '70px' }}
          >
            Aves
          </Button>
          <Button fullWidth sx={{ paddingTop: '13px' }} onClick={() => handleApiChange(1)}>
            Mamíferos
          </Button>
          <Button fullWidth sx={{ paddingTop: '13px' }} onClick={() => handleApiChange(2)}>
            Reptiles
          </Button>
          {/* Agrega aquí más botones para otros tipos */}
        </div>
      </Drawer>
    </>
  );
}

export default MenuComponent;
