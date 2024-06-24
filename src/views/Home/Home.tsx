import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import Layout from '../../components/Layout/Layout';
import Card from '../../components/Card/Card';
import EditIcon from '@mui/icons-material/Edit';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';
import perfumeImage from '../../assets/perfume.webp';
import './Home.css'

const Home: React.FC = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const product = {
    image: perfumeImage,
    title: 'Floratta Red',
    price: 'R$ 199,99',
  };

  const handleEditProfile = () => {
    navigate('/edit-profile');
  };

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <Layout>
      <div id='row'>
        <h2>Bem-vindo, {user?.name}!</h2>
        <div id='editButton' className='button' onClick={handleEditProfile}>
          <EditIcon />
        </div>
        <div className='button' onClick={handleLogout}>
          <LogoutIcon />
        </div>
      </div>
      
      <h3>Você está logado como: {user?.email}</h3>

      <div id='row'>
        <Card image={product.image} title={product.title} price={product.price} />
        <Card image={product.image} title={product.title} price={product.price} />
        <Card image={product.image} title={product.title} price={product.price} />
      </div>

      <div id='row'>
        <Card image={product.image} title={product.title} price={product.price} />
        <Card image={product.image} title={product.title} price={product.price} />
        <Card image={product.image} title={product.title} price={product.price} />
      </div>

      <div id='row'>
        <Card image={product.image} title={product.title} price={product.price} />
        <Card image={product.image} title={product.title} price={product.price} />
        <Card image={product.image} title={product.title} price={product.price} />
      </div>

    </Layout>
  );
};

export default Home;
