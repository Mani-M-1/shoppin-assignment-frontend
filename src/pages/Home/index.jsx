import { Link } from 'react-router-dom';
import './index.css';

const Home = () => (
  <div>
    <p>
      Apple Watch Studio
    </p>

    <h1>
      Choose a case.
      <br/>
      Pick a band.
      <br/>
      Create your own style.
    </h1>
    <Link className='get-started-btn' to="/product/1">Get Started</Link>
  </div>
);

export default Home;
