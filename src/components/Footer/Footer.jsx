import { Component } from "react";
import "./Footer.css";
import ItemStatusFilter from "./ItemStatusFilter/ItemStatusFilter";

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <span className="todo-count">{this.props.left} items left</span>
        <ItemStatusFilter />
        <button className="clear-completed">Clear completed</button>
      </footer>
    );
  }
}
