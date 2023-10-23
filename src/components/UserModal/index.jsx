import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function UserModal(props) {
  return (
    <div>
      <Modal
        open={true} // Abre o modal quando for clicado no marcador
        onClose={props.onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Detalhes do Usuário
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <p>id: {props.id}</p>
            <p>name: {props.name}</p>
            <p>latitude: {props.latitude}</p>
            <p>longitude: {props.longitude}</p>
          </Typography>
          <Button onClick={props.onClose}>Fechar</Button>
        </Box>
      </Modal>
    </div>
  );
}
