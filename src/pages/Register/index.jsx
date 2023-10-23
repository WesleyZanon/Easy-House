import React, { useState } from 'react';
import { Container, Paper, TextField, Button } from '@mui/material';
import './style.css'

const RegistrationPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password === formData.confirmPassword) {
      // As senhas coincidem, você pode prosseguir com o envio ou autenticação
      console.log('Dados do formulário:', formData);
    } else {
      alert('A senha e a confirmação de senha não coincidem. Por favor, tente novamente.');
    }
  };

  return (
    <div className="registration-container">
      <Container maxWidth="sm">
        <Paper elevation={3} className="registration-paper">
          <h2>Cadastro</h2>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Nome de Usuário"
              variant="outlined"
              fullWidth
              margin="normal"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              margin="normal"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <TextField
              label="Senha"
              variant="outlined"
              fullWidth
              margin="normal"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            <TextField
              label="Confirmar Senha"
              variant="outlined"
              fullWidth
              margin="normal"
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            <Button type="submit" variant="contained" color="primary">
              Cadastrar
            </Button>
          </form>
        </Paper>
      </Container>
    </div>
  );
};

export default RegistrationPage;
