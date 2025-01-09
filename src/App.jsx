import { useState } from "react";
import "./App.css";

import Header from "./components/Header";
import TaskList from "./components/TaskList/TaskList";
import Footer from "./components/Footer/Footer";

function App() {
  const tasks = [
    { state: "completed", edit: false },
    { state: "editing", edit: true },
    { state: null, edit: false },
  ];
  return (
    <>
      <Header />
      <TaskList tasks={tasks} />
      <Footer />
    </>
  );
}

export default App;
