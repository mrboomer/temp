import React, { useState } from "react";
import comp from "./comp.png";

const Instructions = () => {
  const [instructionsVisible, setInstructionsVisible] = useState(true);
  const toggleInstructions = () => setInstructionsVisible(!instructionsVisible);

  const instructions = (
    <div id="instructions">
      <h2>Background</h2>
      <p>
        We have a project that is already in progress, and you are tasked with
        picking up new tickets to complete.
      </p>
      <ul>
        <li>1 - Fetch the data needed from the service to populate the Event component.</li>
        <li>2 - Fix the timestamp to display a human readable time per the comp.</li>
        <li>3 - Create the filter component.</li>
        <li>4 - Filter events based on price filter selection</li>
      </ul>
      <h2>Comp</h2>
      <img src={comp} alt="comp" />
      <h2>API</h2>
      <table>
        <tbody>
          <tr>
            <td>&nbsp;</td>
            <td>HTTP Method</td>
            <td>Endpoint</td>
          </tr>
          <tr>
            <td>Events</td>
            <td>GET</td>
            <td>/events</td>
          </tr>
        </tbody>
      </table>
    </div>
  );

  return (
    <>
      <br />
      <button onClick={toggleInstructions}>Toggle Instructions</button>
      {instructionsVisible ? instructions : null}
    </>
  );
};

export default Instructions;
