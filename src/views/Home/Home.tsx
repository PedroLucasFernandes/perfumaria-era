import React from 'react';
import Layout from '../../components/Layout/Layout';
import Card from '../../components/Card/Card';
import perfumeImage from '../../assets/perfume.webp';
import './Home.css'
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const navigate = useNavigate();

  const product = {
    image: perfumeImage,
    title: 'Floratta Red',
    price: 'R$ 199,99',
  };

  const handleContact = () => {
    navigate('/contact');
  };

  return (
    <Layout>      
      <div id='row'>
        <Card image={product.image} title={product.title} price={product.price} onClick={handleContact}/>
        <Card image={product.image} title={product.title} price={product.price} onClick={handleContact}/>
        <Card image={product.image} title={product.title} price={product.price} onClick={handleContact}/>
      </div>

      <div id='row'>
        <Card image={product.image} title={product.title} price={product.price} onClick={handleContact}/>
        <Card image={product.image} title={product.title} price={product.price} onClick={handleContact}/>
        <Card image={product.image} title={product.title} price={product.price} onClick={handleContact}/>
      </div>

      <div id='row'>
        <Card image={product.image} title={product.title} price={product.price} onClick={handleContact}/>
        <Card image={product.image} title={product.title} price={product.price} onClick={handleContact}/>
        <Card image={product.image} title={product.title} price={product.price} onClick={handleContact}/>
      </div>

    </Layout>
  );
};

export default Home;
