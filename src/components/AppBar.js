import { Link } from 'react-router-dom';
import { UserMenu } from './userMenu';
import { useSelector } from 'react-redux';

export const AppBar = () => {
  const isLoggedIn = useSelector(state => state.user.isLoggedIn);
  return (
    <header
      style={{
        display: 'flex',
        justifyContent: 'spase-between',
        padding: 8,
        borderBottom: '1px solid black',
        marginBottom: 12,
      }}
    >
      <nav>
        {!isLoggedIn && <Link to="/login">Log in</Link>}
        {isLoggedIn && <Link to="/dashboard">Dashboard</Link>}
      </nav>
      {isLoggedIn && <UserMenu />}
    </header>
  );
};
