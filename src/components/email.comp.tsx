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

export default function EmailComp() {
  const data = useSelector((c) => {
    console.log(c);
    return c.show;
  });
  const dispatch = useDispatch();
  const [email, setEmail] = React.useState('');
  return (
    <div>
      <h1>Enter your Email</h1>
      <div style={{ marginBottom: '20px' }}>
        <label for="fname">Name:</label>
        <input type="text" disabled id="fname" name="fname" value={data.name} />
      </div>
      <form action="/action_page.php">
        <label for="fname">Email:</label>
        <input
          type="text"
          id="fname"
          name="fname"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <br></br>
      </form>
      <div style={{ marginTop: '20px' }}>
        <button
          onClick={() => {
            dispatch(saveEmail(email));
          }}
        >
          Proceed
        </button>
      </div>
    </div>
  );
}
