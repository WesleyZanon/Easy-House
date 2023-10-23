import React, { useState } from 'react';
import { Container, Paper, TextField, Button } from '@mui/material';

const RegistrationPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '', // Campo de confirmação de senha
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
      // As senhas não coincidem, exiba uma mensagem de erro
      alert('A senha e a confirmação de senha não coincidem. Por favor, tente novamente.');
    }
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} style={{ padding: '20px' }}>
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
  );
};

export default RegistrationPage;
