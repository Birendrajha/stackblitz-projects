import * as React from 'react';
import './style.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  saveName,
  saveEmail,
  saveGender,
  savePassword,
  saveMobile,
  getData,
} from './features/reducers';
import NameComp from './components/name.comp';
export default function App() {
  return (
    <div>
      <h1>React Redux</h1>
      <NameComp />
    </div>
  );
}
