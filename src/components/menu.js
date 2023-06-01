import React, { useState, useEffect } from 'react';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import Stack from '@mui/material/Stack';
import './estilo.css';

const MenuComponent = ({ onApiChange }) => {
  // eslint-disable-next-line
  const [anchorEl, setAnchorEl] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [activeButton, setActiveButton] = useState(1); // Estado para guardar el botón activo

  const handleMenuClose = () => {
    setAnchorEl(null);
    setDrawerOpen(false);
  };

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleButtonClick = (apiType) => {
    onApiChange(apiType);
    setActiveButton(apiType);
    handleMenuClose();
  };

  const getButtonIcon = (apiType) => {
    switch (apiType) {
      case 1:
        return <BirdIcon />;
      case 2:
        return <MammalIcon />;
      case 3:
        return <ReptileIcon />;
      case 4:
        return <AmphibianIcon />;
      case 5:
        return <FishIcon />;
      case 6:
        return <InsectIcon />;
      case 7:
        return <TreeIcon />;
      case 8:
        return <PalmTreeIcon />;
      default:
        return null;
    }
  };

  const BirdIcon = () => <span>🐦</span>; // Ejemplo de icono personalizado
  const MammalIcon = () => <span>🦔</span>; // Ejemplo de icono personalizado
  const ReptileIcon = () => <span>🐍</span>; // Ejemplo de icono personalizado
  const AmphibianIcon = () => <span>🐸</span>; // Ejemplo de icono personalizado
  const FishIcon = () => <span>🐠</span>; // Ejemplo de icono personalizado
  const InsectIcon = () => <span>🐞</span>; // Ejemplo de icono personalizado
  const TreeIcon = () => <span>🌳</span>; // Ejemplo de icono personalizado
  const PalmTreeIcon = () => <span>🌴</span>; // Ejemplo de icono personalizado

  const handleFullScreenChange = () => {
    const isFullScreen =
      document.fullscreenElement ||
      document.mozFullScreenElement ||
      document.webkitFullscreenElement ||
      document.msFullscreenElement;
    setIsFullScreen(!!isFullScreen);
  };

  useEffect(() => {
    document.addEventListener('fullscreenchange', handleFullScreenChange);
    document.addEventListener('mozfullscreenchange', handleFullScreenChange);
    document.addEventListener(
      'webkitfullscreenchange',
      handleFullScreenChange
    );
    document.addEventListener('msfullscreenchange', handleFullScreenChange);

    return () => {
      document.removeEventListener(
        'fullscreenchange',
        handleFullScreenChange
      );
      document.removeEventListener(
        'mozfullscreenchange',
        handleFullScreenChange
      );
      document.removeEventListener(
        'webkitfullscreenchange',
        handleFullScreenChange
      );
      document.removeEventListener(
        'msfullscreenchange',
        handleFullScreenChange
      );
    };
  }, []);

  useEffect(() => {
    const handleWindowResize = () => {
      if (drawerOpen && window.innerWidth >= 750) {
        setDrawerOpen(false);
      }
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [drawerOpen]);

  return (
    <div  style={{ marginTop: '80px' }}>
      
      <Toolbar>
        {!isFullScreen && (
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerToggle}
            style={{ marginRight: '10px' }}
            sx={{
              display: { xs: 'block', md: 'none' },
              '&:hover': {
                transform: 'rotate(360deg)',
                transition: 'transform 0.8s ease',
              },
            }}
          >
            <MenuIcon />
          </IconButton>
        )}
        <Drawer
          anchor="left"
          open={drawerOpen}
          onClose={handleDrawerToggle}
          PaperProps={{
            style: {
              width: '200px',
            },
          }}
          sx={{
            '@media (max-width: 750)': {
              display: isFullScreen ? 'none' : 'block',
            },
          }}
        >
          <Stack
          
            spacing={2}
            justifyContent="left"
            sx={{
              marginTop: '130px',
              '.MuiButton-root': {
                color: 'black',
                textAlign: 'left',
              },
            }}
          >
            <div class="rain">
        <div class="drop"></div>
        <div class="drop"></div>
        <div class="drop"></div>
        <div class="drop"></div>
        <div class="drop"></div>
      </div>
            <Button
            className={activeButton === 1 ? 'active-button' : ''}
              startIcon={getButtonIcon(1)}
              onClick={() => handleButtonClick(1)}
            >
              Aves
            </Button>
            <Button
            className={activeButton === 2 ? 'active-button' : ''}
              startIcon={getButtonIcon(2)}
              onClick={() => handleButtonClick(2)}
            >
              Mamíferos
            </Button>
            <Button
            className={activeButton === 3 ? 'active-button' : ''}
              startIcon={getButtonIcon(3)}
              onClick={() => handleButtonClick(3)}
            >
              Reptiles
            </Button>
            <Button
            className={activeButton === 4 ? 'active-button' : ''}
              startIcon={getButtonIcon(4)}
              onClick={() => handleButtonClick(4)}
            >
              Anfibios
            </Button>
            <Button
            className={activeButton === 5 ? 'active-button' : ''}
              startIcon={getButtonIcon(5)}
              onClick={() => handleButtonClick(5)}
            >
              Peces
            </Button>
            <Button
            className={activeButton === 6 ? 'active-button' : ''}
              startIcon={getButtonIcon(6)}
              onClick={() => handleButtonClick(6)}
            >
              Insectos
            </Button>
            <Button
            className={activeButton === 7 ? 'active-button' : ''}
              startIcon={getButtonIcon(7)}
              onClick={() => handleButtonClick(7)}
            >
              Árboles
            </Button>
            <Button
            className={activeButton === 8 ? 'active-button' : ''}
              startIcon={getButtonIcon(8)}
              onClick={() => handleButtonClick(8)}
            >
              Palmeras
            </Button>
          </Stack>
        </Drawer>
        <Stack
          direction="row"
          spacing={{ xs: 1, sm: 2, md: -1, lg: 7 }}
          justifyContent="left"
          alignItems="center"
          sx={{
            width:'auto',
            display: { '.MuiButton-root': {
              color: 'black',
              textAlign: 'left',
            },xs: 'none', md: 'flex' },
            marginLeft: 'auto',
            marginRight:'auto',
          }}
        >
          <Button
          className={activeButton === 1 ? 'active-button' : ''} // Agrega la clase CSS al botón activ
            startIcon={getButtonIcon(1)}
            onClick={() => handleButtonClick(1)}
          >
            Aves
          </Button>
          <Button
            className={activeButton === 2 ? 'active-button' : ''}
            startIcon={getButtonIcon(2)}
            onClick={() => handleButtonClick(2)}
            
          >
            Mamíferos
          </Button>
          <Button
          className={activeButton === 3 ? 'active-button' : ''}
            startIcon={getButtonIcon(3)}
            onClick={() => handleButtonClick(3)}
          >
            Reptiles
          </Button>
          <Button 
          className={activeButton === 4 ? 'active-button' : ''}
            startIcon={getButtonIcon(4)}
            onClick={() => handleButtonClick(4)}
          >
            Anfibios
          </Button>
          <Button
          className={activeButton === 5 ? 'active-button' : ''}
            startIcon={getButtonIcon(5)}
            onClick={() => handleButtonClick(5)}
          >
            Peces
          </Button>
          <Button
          className={activeButton === 6 ? 'active-button' : ''}
            startIcon={getButtonIcon(6)}
            onClick={() => handleButtonClick(6)}
          >
            Insectos
          </Button>
          <Button
          className={activeButton === 7 ? 'active-button' : ''}
            startIcon={getButtonIcon(7)}
            onClick={() => handleButtonClick(7)}
          >
            Árboles
          </Button>
          <Button
          className={activeButton === 8 ? 'active-button' : ''}
            startIcon={getButtonIcon(8)}
            onClick={() => handleButtonClick(8)}
          >
            Palmeras
          </Button>
        </Stack>
      </Toolbar>
    </div>
  );
};

export default MenuComponent;
