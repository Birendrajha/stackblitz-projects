import { useContext } from 'react';
import { DataContext } from './src/dataprovider';
import * as React from 'react';
export const ProfilePage = () => {
  const value = useContext(DataContext);

  return (
    <>
      <h1>{value.name}</h1>
      <p>{value.email}</p>
      <p>{value.gender}</p>
    </>
  );
};
