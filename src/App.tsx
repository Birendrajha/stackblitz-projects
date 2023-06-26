import * as React from 'react';
import { ProfilePage } from '../profile.page';
import { DataProvider } from './dataprovider';
import './style.css';

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Welcome To Context Provider</p>

      <DataProvider>
        <ProfilePage />
      </DataProvider>
    </div>
  );
}
