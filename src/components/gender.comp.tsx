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

export default function GenderComp() {
  const data = useSelector((c) => {
    console.log(c.show);
    return c.show;
  });
  const dispatch = useDispatch();
  const [gender, setGender] = React.useState('');

  return (
    <div>
      <h1>Enter your Gender</h1>
      <div style={{ marginBottom: '20px' }}>
        <label for="fname">Name:</label>
        <input type="text" disabled id="fname" name="fname" value={data.name} />
      </div>

      <div style={{ marginBottom: '20px' }}>
        <label for="fname">Email:</label>
        <input
          type="text"
          disabled
          id="fname"
          name="fname"
          value={data.email}
        />
      </div>

      <div style={{ marginBottom: '20px' }}>
        <label for="fname">Mobile:</label>
        <input
          type="text"
          disabled
          id="fname"
          name="fname"
          value={data.mobile}
        />
      </div>

      <form action="/action_page.php">
        <label for="fname">Gender:</label>
        <input
          type="text"
          id="fname"
          name="fname"
          onChange={(e) => {
            setGender(e.target.value);
          }}
        />
        <br></br>
      </form>
      <div style={{ marginTop: '20px' }}>
        <button
          onClick={() => {
            dispatch(saveGender(gender));
          }}
        >
          Proceed
        </button>
      </div>
    </div>
  );
}
