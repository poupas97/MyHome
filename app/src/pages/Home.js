import React from 'react';
import { useHistory } from 'react-router-dom';

export const HOME_ROUTE = '/';

const Home = () => {
  const history = useHistory();

  return (
    <>
      <h3>
        Hello, My Home
      </h3>
      <button onClick={() => history.push('/sensors')}>Sensors List</button>
    </>
  );
};

export default Home;
