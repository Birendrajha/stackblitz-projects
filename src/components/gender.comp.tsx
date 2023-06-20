import * as React from 'react';

export default function GenderComp() {
  return (
    <div>
      <h1>React Redux</h1>

      <form action="/action_page.php">
        <label for="fname">Gender:</label>
        <input type="text" id="fname" name="fname" />
        <br></br>
      </form>
    </div>
  );
}
