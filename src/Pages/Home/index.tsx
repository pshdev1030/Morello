import Menubar from 'Layout/Menubar/Menubar';
import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { RootState } from 'reducer';

const Home = () => {
  const user = useSelector<RootState>((state) => state.user.user);

  if (!user) {
    return <Redirect to="/Login" />;
  }
  return (
    <Menubar>
      <div>hi</div>
    </Menubar>
  );
};

export default Home;
