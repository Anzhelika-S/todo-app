import { useState } from "react";
import "./App.css";

import Header from "./components/Header";
import TaskList from "./components/TaskList/TaskList";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <TaskList />
      <Footer />
    </>
  );
}

export default App;
