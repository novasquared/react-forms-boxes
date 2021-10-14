import React from "react";
import BoxList from "./BoxList";

/** Simple app that just shows the form to add boxes and 
 *  the list of boxes. 
 * 
 * Properties:
 * - none
 * 
 * State: 
 * - none
 * 
 * App -> BoxList
 * */

function App() {
  return (
      <div className="App">
        <BoxList />
      </div>
  );
}

export default App;
