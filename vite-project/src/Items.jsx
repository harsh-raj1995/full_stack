import React from "react";

function Items({ item, index, onToggle, onDelete }) {
  return (
    <div className="Card">
      <span className="card-number">{String(index + 1).padStart(2, "0")}</span>
      <div className="card-content">
        <div className={`List ${item.status ? "task-done" : ""}`}>
          {item.task}
        </div>
        <p className="discipline">{item.status ? "Complete" : "In progress"}</p>
      </div>
      <div className="buttons">
        <button
          className={item.status ? "completed" : "pending"}
          onClick={() => onToggle(item.id)}
        >
          {item.status ? "Completed" : "Pending"}
        </button>
        <button
          className="delete-btn"
          onClick={() => onDelete(item.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default Items;