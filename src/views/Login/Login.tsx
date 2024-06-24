import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { validateEmail, validateName } from '../../utils/validations';
import { AuthContext } from '../../contexts/AuthContext';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import Layout from '../../components/Layout/Layout';

const Login: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!name || !validateName(name)) {
      alert('Por favor, preencha o seu nome, ele deve conter apenas letras e espaços.');
      return;
    }

    if (!email || !validateEmail(email)) {
      alert('Por favor, preencha um e-mail válido.');
      return;
    }

    setUser({ name, email });
    navigate('/home');
  };

  return (
    <Layout>
      <div>
        <h2>Faça seu login!</h2>
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button type="submit">Login</Button>
        </form>
      </div>
    </Layout>
  );
};

export default Login;