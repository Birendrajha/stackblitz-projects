import * as React from 'react';
//import { Button } from 'react-native/types';
import { useDispatch, useSelector } from 'react-redux';
import './style.css';
import { increment, incrementByValue } from './features/showSlice';
export default function App() {
  const data = useSelector((c) => {
    console.log(c.show.value);
    return c.show.value;
  });
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Value from Redux Store {data}</h1>
      <p>Start editing to see some magic happen :)</p>

      <button onClick={() => dispatch(increment())}>Click Me</button>

      <button onClick={() => dispatch(incrementByValue(10))}>Click Me</button>
    </div>
  );
}
