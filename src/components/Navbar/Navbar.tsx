import './Navbar.css'
import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import EditIcon from '@mui/icons-material/Edit';
import LogoutIcon from '@mui/icons-material/Logout';

const Navbar: React.FC = () => {
  const { user, setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleEditProfile = () => {
    navigate('/edit-profile');
  };

  const handleLogout = () => {
    navigate('/');
    setUser(null);
  };

  return (
    <nav className='navbar'>
      <ul>
        {user ? (
          <>
            <li>Bem vindo, {user.name}!</li>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/contact">Contato</Link></li>
            <li id='editButton' className='button' onClick={handleEditProfile}>
                <EditIcon />
            </li>
            <li className='button' onClick={handleLogout}>
                <LogoutIcon />
            </li>
          </>
        ) : (
          <>
            <li><Link to="/">Login</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;