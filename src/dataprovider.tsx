import { createContext } from 'react';
import * as React from 'react';
import './style.css';

export const DataContext = createContext<{
  email: string;
  name?: string;
  gender?: string;
}>({
  email: undefined//'birendraha@gmail.com',
  //   name: 'Birendra',
  //   gender: 'Male',
});

export const DataProvider = ({ ...props }) => {
  const [data, setData] = React.useState();
  React.useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  return (
    <DataContext.Provider
      value={{
        email: data?.title, //'anandjha@gmail.com',
        name: 'Anand',
        gender: 'Male',
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};
