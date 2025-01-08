import "./Task.css";

export default function Task() {
  return (
    <li className="completed">
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
        />
        <label>
          <span className="description">Completed task</span>
          <span className="created">created 17 seconds ago</span>
        </label>
        <button className="icon icon-edit"></button>
        <button className="icon icon-destroy"></button>
      </div>
    </li>
  );
}

{
  /* <li class="completed">
            <div class="view">
              <input
                class="toggle"
                type="checkbox"
              />
              <label>
                <span class="description">Completed task</span>
                <span class="created">created 17 seconds ago</span>
              </label>
              <button class="icon icon-edit"></button>
              <button class="icon icon-destroy"></button>
            </div>
          </li>
          <li class="editing">
            <div class="view">
              <input
                class="toggle"
                type="checkbox"
              />
              <label>
                <span class="description">Editing task</span>
                <span class="created">created 5 minutes ago</span>
              </label>
              <button class="icon icon-edit"></button>
              <button class="icon icon-destroy"></button>
            </div>
            <input
              type="text"
              class="edit"
              value="Editing task"
            />
          </li>
          <li>
            <div class="view">
              <input
                class="toggle"
                type="checkbox"
              />
              <label>
                <span class="description">Active task</span>
                <span class="created">created 5 minutes ago</span>
              </label>
              <button class="icon icon-edit"></button>
              <button class="icon icon-destroy"></button>
            </div>
          </li> */
}

// <span className="todo-list-item">
//   <span
//     className="todo-list-item-label"
//     style={style}
//   >
//     {label}
//   </span>

//   <button
//     type="button"
//     className="btn btn-outline-success btn-sm float-end"
//   >
//     <i className="fas fa-solid fa-exclamation"></i>
//   </button>

//   <button
//     type="button"
//     className="btn btn-outline-danger btn-sm float-end"
//   >
//     <i className="fas fa-solid fa-trash-can" />
//   </button>
// </span>
