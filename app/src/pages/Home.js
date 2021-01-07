import { object } from 'prop-types';
import React from 'react';

export const HOME_ROUTE = '/';

const Home = ({ history }) => (
  <>
    <h3>
      Hello, My Home
    </h3>
    <button onClick={() => history.push('/sensors')}>Sensors List</button>
  </>
);

Home.propTypes = {
  history: object,
};

export default Home;
