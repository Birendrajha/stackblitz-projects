import * as React from 'react';
import { useSelector } from 'react-redux';

export default function ProfilePage() {
  const data = useSelector((c) => {
    return c.show;
  });

  return (
    <div>
      <h1>Your Profile</h1>
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

      <div style={{ marginBottom: '20px' }}>
        <label for="fname">Gender:</label>
        <input
          type="text"
          disabled
          id="fname"
          name="fname"
          value={data.gender}
        />
      </div>

      {/* <form action="/action_page.php">
        <label for="fname">Password:</label>
        <input
          type="text"
          id="fname"
          name="fname"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <br></br>
      </form> */}
      {/* <div style={{ marginTop: '20px' }}>
        <button
          onClick={() => {
            dispatch(savePassword(password));
          }}
        >
          Proceed
        </button>
      </div> */}
    </div>
  );
}
