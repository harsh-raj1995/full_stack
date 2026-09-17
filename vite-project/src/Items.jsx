import React from "react";

function Items({ item, onToggle, onDelete }) {
  return (
    <div className="Card">
      <div className={`List ${item.status ? "task-done" : ""}`}>
        {item.task}
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