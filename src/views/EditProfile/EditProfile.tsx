import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import Layout from '../../components/Layout/Layout';
import { validateEmail, validateName } from '../../utils/validations';

const EditProfile: React.FC = () => {
  const navigate = useNavigate();
  const { user, setUser } = useContext(AuthContext);
  const [name, setName] = useState(user?.name || '');
  const [email, setEmail] = useState(user?.email || '');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setUser({ ...user!, name, email });

    event.preventDefault();
    if (!name || !validateName(name)) {
      alert('Por favor, preencha o seu nome, ele deve conter apenas letras e espaços.');
      return;
    }

    if (!email || !validateEmail(email)) {
      alert('Por favor, preencha um e-mail válido.');
      return;
    }

    navigate('/home');
  };

  return (
    <Layout>
      <div>
        <h2>Editar Perfil</h2>
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
          <Button type="submit">Salvar</Button>
        </form>
      </div>
    </Layout>
  );
};

export default EditProfile;