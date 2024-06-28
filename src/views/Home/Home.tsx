import React, { useState, useMemo, useTransition, useEffect, useRef } from 'react';
import Layout from '../../components/Layout/Layout';
import Card from '../../components/Card/Card';
import Input from '../../components/Input/Input';
import './Home.css';
import { useNavigate } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import { animated } from 'react-spring';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('spider-man');
  const [searchResults, setSearchResults] = useState<any>(null);
  const [isPending, startTransition] = useTransition();
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, []);

  const fetchResults = async (query: string) => {
    try {
      const response = await fetch(`/api/?apikey=2e9642f6&s=${query}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      setSearchResults(data);
    } catch (error) {
      console.error('Error fetching data:', error);
      setSearchResults(null);
    }
  };

  useEffect(() => {
    fetchResults(searchQuery);
  }, [searchQuery]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    startTransition(() => {
      setSearchQuery(event.target.value);
    });
  };

  const handleContact = () => {
    navigate('/contact');
  };

  const content = useMemo(() => {
    if (!searchResults) {
      return <div>Loading...</div>;
    } else if (searchResults.Error) {
      return <div>Error: {searchResults.Error}</div>;
    } else if (searchResults.Search && searchResults.Search.length > 0) {
      return (
        <div className="movies-list">
          {searchResults.Search.map((item: any) => (
            <animated.div key={item.imdbID}>
              <Card
                image={item.Poster}
                title={item.Title}
                year={item.Year}
                onClick={handleContact}
              />
            </animated.div>
          ))}
        </div>
      );
    } else {
      return <div>No movies found.</div>;
    }
  }, [searchResults]);

  return (
    <Layout>
      <div>
        <label htmlFor="name">Nome do filme:</label>
        <Input
          type="text"
          id="name"
          required
          value={searchQuery}
          onChange={handleChange}
          ref={searchInputRef}
        />
        {content}
      </div>
    </Layout>
  );
};

export default Home;