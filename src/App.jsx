import { useState } from "react";
import "./App.css";

import Header from "./components/Header";
import TaskList from "./components/TaskList/TaskList";
import Footer from "./components/Footer/Footer";

function App() {
  const tasks = [{ state: "completed" }, { state: "editing" }, { state: null }];
  return (
    <>
      <Header />
      <TaskList tasks={tasks} />
      <Footer />
    </>
  );
}

export default App;
