import React from "react";
import ReactDOM from "react-dom";
import Metronome from "./Metronome";
import registerServiceWorker from "./registerServiceWorker";
import "./App.css";

ReactDOM.render(<Metronome />, document.getElementById("root"));
registerServiceWorker();

export default App;
