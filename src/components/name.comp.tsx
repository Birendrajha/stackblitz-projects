import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  saveName,
  saveEmail,
  saveGender,
  savePassword,
  saveMobile,
  getData,
} from '../features/reducers';

export default function NameComp() {
  const dispatch = useDispatch();

  const data = useSelector((c) => {
    console.log(c.show);
    return c.show;
  });
  const [name, setName] = React.useState('');
  return (
    <div>
      <h1>Enter your Name To Proceed</h1>

      <form action="/action_page.php">
        <label for="fname">Name:</label>
        <input
          type="text"
          id="fname"
          name="fname"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <br></br>
        <div style={{ marginTop: '20px' }}>
          <button
            onClick={() => {
              dispatch(saveName(name));
            }}
          >
            Proceed
          </button>
        </div>
      </form>
    </div>
  );
}
