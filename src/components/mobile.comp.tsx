import * as React from 'react';
import './style.css';

export default function MobileNoComp() {
  return (
    <div>
      <h1>React Redux</h1>

      <form action="/action_page.php">
        <label for="fname">Mobile:</label>
        <input type="text" id="fname" name="fname" />
        <br></br>
      </form>
    </div>
  );
}
