import React, { useContext, useState, useMemo, useEffect, useRef } from 'react';
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
  const nameInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (nameInputRef.current) {
      nameInputRef.current.focus();
    }
  }, []);

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

  const validateAndSetEmail = useMemo(() => {
    return (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
  }, []);

  const validateAndSetName = useMemo(() => {
    return (e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value);
  }, []);

  return (
    <Layout>
      <div>
        <h2>Faça seu login!</h2>
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Nome"
            value={name}
            onChange={validateAndSetName}
            ref={nameInputRef}
          />
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={validateAndSetEmail}
          />
          <Button type="submit">Login</Button>
        </form>
      </div>
    </Layout>
  );
};

export default Login;