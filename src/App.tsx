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
import EmailComp from './components/email.comp';
import MobileNoComp from './components/mobile.comp';
import GenderComp from './components/gender.comp';
import PasswordComp from './components/password.comp';
import ProfilePage from './components/profile.comp';
export default function App() {
  const data = useSelector((c) => {
    console.log(c.show);
    return c.show;
  });

  return (
    <div>
      <h1>Welcome To Redux</h1>
      {data.name.length <= 0 ? <NameComp /> : null}
      {data.email.length <= 0 && data.name.length > 0 ? <EmailComp /> : null}

      {data.name.length > 0 &&
      data.email.length > 0 &&
      data.mobile.length <= 0 ? (
        <MobileNoComp />
      ) : null}
      {data.name.length > 0 &&
      data.email.length > 0 &&
      data.mobile.length > 0 &&
      data.gender.length <= 0 ? (
        <GenderComp />
      ) : null}

      {data.name.length > 0 &&
      data.email.length > 0 &&
      data.mobile.length > 0 &&
      data.gender.length > 0 &&
      data.password.length <= 0 ? (
        <PasswordComp />
      ) : null}

      {data.name.length > 0 &&
      data.email.length > 0 &&
      data.mobile.length > 0 &&
      data.gender.length > 0 &&
      data.password.length > 0 ? (
        <ProfilePage />
      ) : null}
    </div>
  );
}
