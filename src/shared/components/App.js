import React from 'react'; // eslint-disable-line
import { Route, Link } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { routes } from '../routes/syncRoutes';

const App = () => (
  <div className="wrapper">
    <header>
      <nav>
        <ul className="primary_navigation">
          <li className="primary_navigation__item">
            <Link className="primary_navigation__link" to="/">Home</Link>
          </li>

          <li className="primary_navigation__item">
            <Link className="primary_navigation__link" to="/portfolio">Portfolio</Link>
          </li>

          <li className="primary_navigation__item">
            <Link className="primary_navigation__link" to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>

    <main>
      {renderRoutes(routes) }
    </main>

    <footer>
      <ul className="secondary_navigation">
        <li className="secondary_navigation__item">
          <Link className="secondary_navigation__link" to="#">Twitter</Link>
        </li>

        <li className="secondary_navigation__item">
          <Link className="secondary_navigation__link" to="#">Facebook</Link>
        </li>

        <li className="secondary_navigation__item">
          <Link className="secondary_navigation__link" to="/#">Instagram</Link>
        </li>
      </ul>
    </footer>
  </div>
);

export default App;
