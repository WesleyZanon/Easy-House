import React, { useState } from 'react';
import { Container, Paper, TextField, Button } from '@mui/material';
import './style.css';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
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
    // Faça algo com os dados do formulário, como autenticação
    console.log('Dados do formulário:', formData);
  };

  return (
    <div className="login-container">
      <Container maxWidth="sm">
        <Paper elevation={3} className="login-paper">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
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
            <Button type="submit" variant="contained" color="primary">
              Entrar
            </Button>
          </form>
        </Paper>
      </Container>
    </div>
  );
};

export default LoginPage;
