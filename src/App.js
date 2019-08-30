import React from "react";

// Components
import {
  AppBar,
  Hero,
  BunchaCards,
  Benefits,
  ScheduleForm
} from "./components";

import "./App.css";

function App() {
  return (
    <div className="App">
      <AppBar />
      <Hero />
      <BunchaCards />
      <Benefits />
      <ScheduleForm />
    </div>
  );
}

export default App;
