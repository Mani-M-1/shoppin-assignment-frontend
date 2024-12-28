import { Link } from 'react-router-dom';
import './index.css';

const Header = () => (
  <header>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/cart">Cart</Link>
    </nav>
  </header>
);

export default Header;
