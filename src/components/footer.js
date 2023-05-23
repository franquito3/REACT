import React, { useState } from 'react';
import './estilo.css';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Backdrop from '@mui/material/Backdrop';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

function Footer() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [open, setOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleLogin = () => {
    // Aquí puedes implementar la lógica de inicio de sesión
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div className="footer-container">
      <h1 className="footer-text" style={{ textAlign: 'left' }}>
        <span>www.iiap.gob.pe</span>
        <br />
        <span>DESARROLLADO POR: FRANCO S.</span>
        <br />
        Creditos
      </h1>
      <Button
        variant="contained"
        style={{ marginLeft: 'auto', backgroundColor: 'rgb(39, 174, 160)', color: '#FFFFFF' }}
        onClick={handleOpen}
      >
        <span>INGRESAR</span>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 1000,
          style: { backdropFilter: 'blur(8px)' }, // Aplicamos el efecto de desenfoque al fondo
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: 'background.paper',
            border: '1px solid #000',
            boxShadow: 24,
            p: 4,
            borderRadius: '10px',
            width: isMobile ? '80%' : 'auto',
            maxWidth: '400px',
          }}
        >
          <Typography id="modal-title" variant="h6" component="h2">
            Ventana de inicio de sesión
          </Typography>
          <Typography id="modal-description" sx={{ mt: 2 }}>
            <TextField
              label="Nombre de usuario"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Contraseña"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              fullWidth
              margin="normal"
            />
            <Button style={{backgroundColor: 'rgb(39, 174, 160)'}} variant="contained" onClick={handleLogin}>
              Iniciar sesión
            </Button>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

export default Footer;
