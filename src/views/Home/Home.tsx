import React, { useMemo } from 'react';
import Layout from '../../components/Layout/Layout';
import Card from '../../components/Card/Card';
import './Home.css';
import { useNavigate } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const { loading, error, value } = useFetch('/api/?apikey=2e9642f6&t=spider-man', "mode");

  const handleContact = () => {
    navigate('/contact');
  };

  const content = useMemo(() => {
    if (loading) {
      return <div>Loading...</div>;
    } else if (error) {
      return <div>Error: {JSON.stringify(error)}</div>;
    } else if (value) {
      const { Title, Year, Poster } = value;
      return (
        <Card
          image={Poster}
          title={Title}
          year={Year}
          onClick={handleContact}
        />
      );
    }
    return null;
  }, [loading, error, value]);

  return (
    <Layout>
      <div>
        {content}
      </div>
    </Layout>
  );
};

export default Home;