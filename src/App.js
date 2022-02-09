import React, { useState } from "react";
import "./App.css";

function App() {
  const [repeat, setRepeat] = useState(null);
  return (
    <div>
      <h1>Un repetidor</h1>
      <input
        type="text"
        placeholder="Empieza a escribir algo"
        onChange={(e) => setRepeat(e.target.value)}
      />
      <p className="repeater">{repeat}</p>
    </div>
  );
}

export default App;
