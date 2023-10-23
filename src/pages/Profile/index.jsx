import React from 'react';
import { Container, Paper, Avatar, Typography, Button } from '@mui/material';
import './style.css';

const ProfilePage = () => {
  return (
    <div className="profile-container">
      <Container maxWidth="sm">
        <Paper elevation={3} className="profile-paper">
          <Avatar
            alt="Foto de Perfil"
            src="url_da_foto_de_perfil.jpg"
            className="profile-avatar"
          />
          <Typography variant="h5" component="div" className="profile-name">
            Nome do Usuário
          </Typography>
          <Typography variant="body2" color="textSecondary" className="profile-info">
            Email: exemplo@email.com
          </Typography>
          <Typography variant="body2" color="textSecondary" className="profile-info">
            Outros Dados: Dados do perfil
          </Typography>
          <Button variant="contained" color="primary" className="profile-button">
            Editar Perfil
          </Button>
        </Paper>
      </Container>
    </div>
  );
};

export default ProfilePage;
