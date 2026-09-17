import React, { useState, useRef, useEffect } from "react";

function Items(props){
  const [status,setStatus]= useState(props.item.status);
  const [d,setDelete]= useState(false);
  console.log(props.item.id);
  if(d){
    return <></>;
  }else{
    
  return (
    <div className={`task-item-card ${item.status ? "is-completed" : ""}`} id={`task-${item.id}`}>
      <div className="task-item-left">
        {/* Toggle Status Checkbox Button */}
        <button
          type="button"
          className="btn-toggle-check"
          onClick={() => onToggle(item.id)}
          aria-label={item.status ? "Mark as pending" : "Mark as completed"}
          title={item.status ? "Mark as pending" : "Mark as completed"}
          id={`toggle-${item.id}`}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </button>

        {/* Task Details or Edit Form */}
        {isEditing ? (
          <form className="task-edit-form" onSubmit={handleSaveEdit}>
            <input
              ref={editInputRef}
              type="text"
              className="task-edit-input"
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <button type="submit" className="btn-icon-save" title="Save changes">
              Save
            </button>
            <button
              type="button"
              className="btn-icon-cancel"
              onClick={() => {
                setEditText(item.task);
                setIsEditing(false);
              }}
              title="Cancel"
            >
              Cancel
            </button>
          </form>
        ) : (
          <div className="task-content-details">
            <span
              className="task-title-text"
              onDoubleClick={() => setIsEditing(true)}
              title="Double click to edit"
            >
              {item.task}
            </span>
            <div className="task-meta-tags">
              {item.priority && (
                <span className={`badge-tag ${priorityClass}`}>
                  ● {item.priority}
                </span>
              )}
              {item.category && (
                <span className={`badge-tag ${categoryClass}`}>
                  {item.category}
                </span>
              )}
              {item.createdAt && (
                <span className="task-created-time">
                  {item.createdAt}
                </span>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Action Buttons: Edit & Delete */}
      {!isEditing && (
        <div className="task-actions-group">
          <button
            type="button"
            className="btn-task-action btn-edit"
            onClick={() => setIsEditing(true)}
            aria-label="Edit task"
            title="Edit task"
            id={`edit-${item.id}`}
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
              <path d="m15 5 4 4" />
            </svg>
          </button>
          <button
            type="button"
            className="btn-task-action btn-delete"
            onClick={() => onDelete(item.id)}
            aria-label="Delete task"
            title="Delete task"
            id={`delete-${item.id}`}
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 6h18" />
              <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
              <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
              <line x1="10" x2="10" y1="11" y2="17" />
              <line x1="14" x2="14" y1="11" y2="17" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}

export default React.memo(Items);