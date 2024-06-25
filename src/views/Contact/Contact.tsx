import React, { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import Layout from '../../components/Layout/Layout';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import './Contact.css';

const Contact: React.FC = () => {
  const { user, setUser } = useContext(AuthContext);
  const [name, setName] = useState(user?.name || '');
  const [email, setEmail] = useState(user?.email || '');
  const [message, setMessage] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert(`Nome: ${name}\nEmail: ${email}\nMensagem: ${message}`);
  };

  return (
    <Layout>
        <h2>Contato</h2>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Nome</label>
            <Input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <Input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Mensagem</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <Button type="submit">Enviar</Button>
        </form>
    </Layout>
  );
};

export default Contact;