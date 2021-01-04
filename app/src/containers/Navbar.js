import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { PageContext } from '../contexts/Page';
import Routes from '../pages/constants';

import './navbar.scss';

const Navbar = () => {
  const { url } = useContext(PageContext);

  return (
    <div className="navbar">
      <div className="routes">
        {Object.entries(Routes).filter(([, value]) => !!value.title).map(([, route]) =>
          <Link key={route.path} className={route.path === url ? 'active' : null} to={route.path}>
            {route.title}
          </Link>)
        }
      </div>
    </div>
  );
};

export default Navbar;
