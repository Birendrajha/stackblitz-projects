import { createContext } from 'react';
import * as React from 'react';
import './style.css';

export const DataContext = createContext<{
  email: string;
  name?: string;
  gender?: string;
}>({
  email: 'birendraha@gmail.com',
  //   name: 'Birendra',
  //   gender: 'Male',
});

export const DataProvider = ({ ...props }) => {
  return (
    <DataContext.Provider
      value={{
        email: 'anandjha@gmail.com',
        name: 'Anand',
        gender: 'Male',
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};
