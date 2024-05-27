// import React from 'react';
import DestinationBody from './DestinationBody';
// import DestinationNav from './DestinationNav';
import NavBar from '../../NavBar/NavBar';
import React from 'react';
// import { Route, BrowserRouter, Routes } from 'react-router-dom';

interface NavItems {
  home: string;
  destination: string;
  crew: string;
  technology: string;
  // routings: string;
}

const DestinationView: React.FC<NavItems> = () => {
  return (
    <>
      {/* <DestinationNav /> */}
      <NavBar
        home=""
        destination="destination"
        crew="crew"
        technology="technology"
        index={1}
      />
      <DestinationBody />
    </>
  );
};

export default DestinationView;
