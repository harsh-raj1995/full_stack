import { useState, useEffect, useMemo } from 'react'
import './App.css'
import Items from './Items'

const DEFAULT_TASKS = [
  {
    id: "task-1",
    task: "Review and deploy the new UI redesign",
    status: false,
    priority: "high",
    category: "work",
    createdAt: "Today, 10:30 AM"
  },
  {
    id: "task-2",
    task: "Design glassmorphic dashboard components",
    status: true,
    priority: "medium",
    category: "ideas",
    createdAt: "Today, 9:15 AM"
  },
  {
    id: "task-3",
    task: "Buy organic groceries & fresh produce",
    status: false,
    priority: "low",
    category: "personal",
    createdAt: "Yesterday"
  }
];

function App() {
  const [tasks, setTasks] = useState(() => {
    try {
      const saved = localStorage.getItem("taskflow_items");
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (err) {
      console.error("Failed to load tasks from localStorage", err);
    }
    return DEFAULT_TASKS;
  });

  const [input, setInput] = useState("");
  const [priority, setPriority] = useState("medium");
  const [category, setCategory] = useState("work");
  const [filter, setFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Persist tasks to localStorage
  useEffect(() => {
    try {
      localStorage.setItem("taskflow_items", JSON.stringify(tasks));
    } catch (err) {
      console.error("Failed to save tasks to localStorage", err);
    }
  }, [tasks]);

  // Form submit handler
  const handleForm = (e) => {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed) return;

    const newTask = {
      id: "task-" + Date.now() + "-" + Math.random().toString(36).substring(2, 7),
      task: trimmed,
      status: false,
      priority,
      category,
      createdAt: "Just now"
    };

    setTasks([newTask, ...tasks]);
    setInput("");
  };

  // Toggle item status
  const handleToggle = (id) => {
    setTasks(prev =>
      prev.map(item =>
        item.id === id ? { ...item, status: !item.status } : item
      )
    );
  };

  // Delete item
  const handleDelete = (id) => {
    setTasks(prev => prev.filter(item => item.id !== id));
  };

  // Edit task text
  const handleEdit = (id, newText) => {
    setTasks(prev =>
      prev.map(item =>
        item.id === id ? { ...item, task: newText } : item
      )
    );
  };

  // Batch actions
  const handleClearCompleted = () => {
    setTasks(prev => prev.filter(item => !item.status));
  };

  const handleMarkAllComplete = () => {
    const allCompleted = tasks.every(item => item.status);
    setTasks(prev => prev.map(item => ({ ...item, status: !allCompleted })));
  };

  // Statistics
  const totalCount = tasks.length;
  const completedCount = tasks.filter(item => item.status).length;
  const pendingCount = totalCount - completedCount;
  const progressPercent = totalCount === 0 ? 0 : Math.round((completedCount / totalCount) * 100);

  // Filter and search logic
  const filteredTasks = useMemo(() => {
    return tasks.filter(item => {
      // Filter by status tab
      if (filter === "active" && item.status) return false;
      if (filter === "completed" && !item.status) return false;

      // Filter by search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesTask = item.task.toLowerCase().includes(query);
        const matchesCategory = item.category?.toLowerCase().includes(query);
        return matchesTask || matchesCategory;
      }

      return true;
    });
  }, [tasks, filter, searchQuery]);

  const todayDateString = new Intl.DateTimeFormat('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric'
  }).format(new Date());

  return (
    <div className="app-wrapper">
      <main className="app-container">
        {/* Header Bar */}
        <header className="app-header">
          <div className="brand-section">
            <div className="brand-icon-wrapper">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
            </div>
            <div className="brand-text">
              <h1>
                TaskFlow
                <span className="brand-badge">Pro</span>
              </h1>
              <p className="brand-subtitle">Streamline your daily focus &amp; elevate productivity</p>
            </div>
          </div>
          <div className="header-date-badge">
            <span className="date-indicator-dot"></span>
            <span>{todayDateString}</span>
          </div>
        </header>

        {/* Productivity & Progress Stats Card */}
        <section className="stats-card" aria-label="Task progress summary">
          <div className="stats-top">
            <span className="stats-title">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
              </svg>
              Weekly Progress
            </span>
            <span className="stats-percentage">{progressPercent}%</span>
          </div>
          <div className="progress-track" role="progressbar" aria-valuenow={progressPercent} aria-valuemin="0" aria-valuemax="100">
            <div className="progress-fill" style={{ width: `${progressPercent}%` }}></div>
          </div>
          <div className="stats-metrics-grid">
            <div className="metric-box">
              <span className="metric-num">{totalCount}</span>
              <span className="metric-label">Total</span>
            </div>
            <div className="metric-box">
              <span className="metric-num" style={{ color: '#10b981' }}>{completedCount}</span>
              <span className="metric-label">Completed</span>
            </div>
            <div className="metric-box">
              <span className="metric-num" style={{ color: '#f59e0b' }}>{pendingCount}</span>
              <span className="metric-label">Pending</span>
            </div>
          </div>
        </section>

        {/* Add Task Input Form Card */}
        <section className="task-form-card" aria-label="Add new task">
          <form onSubmit={handleForm} id="task-create-form">
            <div className="form-main-row">
              <div className="input-container">
                <span className="input-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="8" x2="12" y2="16" />
                    <line x1="8" y1="12" x2="16" y2="12" />
                  </svg>
                </span>
                <input
                  id="task-input-field"
                  className="task-input"
                  value={input}
                  name="task"
                  placeholder="What needs to get done today?"
                  onChange={(e) => setInput(e.target.value)}
                  autoComplete="off"
                />
              </div>
              <button type="submit" className="btn-add" id="btn-add-task">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
                Add Task
              </button>
            </div>

            <div className="form-options-row">
              <div className="form-select-group">
                <label className="select-pill-wrapper" htmlFor="select-priority">
                  <span>Priority:</span>
                  <select
                    id="select-priority"
                    value={priority}
                    onChange={(e) => setPriority(e.target.value)}
                  >
                    <option value="high">High</option>
                    <option value="medium">Medium</option>
                    <option value="low">Low</option>
                  </select>
                </label>

                <label className="select-pill-wrapper" htmlFor="select-category">
                  <span>Category:</span>
                  <select
                    id="select-category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    <option value="work">Work</option>
                    <option value="personal">Personal</option>
                    <option value="ideas">Ideas</option>
                    <option value="urgent">Urgent</option>
                  </select>
                </label>
              </div>
              <span className="form-hint">Press Enter ↵ to quickly add</span>
            </div>
          </form>
        </section>

        {/* Toolbar: Search, Filters & Bulk Actions */}
        <section className="toolbar-card" aria-label="Task filters and search">
          <div className="toolbar-row">
            {/* Search Input */}
            <div className="search-box">
              <span className="search-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </span>
              <input
                id="search-tasks-input"
                className="search-input"
                placeholder="Search tasks or categories..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <button
                  type="button"
                  className="search-clear-btn"
                  onClick={() => setSearchQuery("")}
                  title="Clear search"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              )}
            </div>

            {/* Filter Tabs */}
            <nav className="filter-tabs" aria-label="Filter tasks">
              <button
                type="button"
                id="filter-all"
                className={`filter-btn ${filter === "all" ? "active" : ""}`}
                onClick={() => setFilter("all")}
              >
                All
                <span className="filter-count-badge">{totalCount}</span>
              </button>
              <button
                type="button"
                id="filter-active"
                className={`filter-btn ${filter === "active" ? "active" : ""}`}
                onClick={() => setFilter("active")}
              >
                Active
                <span className="filter-count-badge">{pendingCount}</span>
              </button>
              <button
                type="button"
                id="filter-completed"
                className={`filter-btn ${filter === "completed" ? "active" : ""}`}
                onClick={() => setFilter("completed")}
              >
                Completed
                <span className="filter-count-badge">{completedCount}</span>
              </button>
            </nav>
          </div>

          {/* Batch Actions */}
          {totalCount > 0 && (
            <div className="batch-actions-row">
              <button
                type="button"
                className="btn-secondary-action"
                onClick={handleMarkAllComplete}
                id="btn-toggle-all"
              >
                {completedCount === totalCount ? "Mark All as Pending" : "Mark All as Done"}
              </button>
              {completedCount > 0 && (
                <button
                  type="button"
                  className="btn-secondary-action"
                  onClick={handleClearCompleted}
                  id="btn-clear-completed"
                >
                  Clear Completed ({completedCount})
                </button>
              )}
            </div>
          )}
        </section>

        {/* Tasks List */}
        <section className="tasks-container" aria-label="Task items list">
          {filteredTasks.length > 0 ? (
            filteredTasks.map((item) => (
              <Items
                key={item.id}
                item={item}
                onToggle={handleToggle}
                onDelete={handleDelete}
                onEdit={handleEdit}
              />
            ))
          ) : (
            <div className="empty-state-card" id="empty-state">
              <div className="empty-state-icon-wrapper">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
              <h2 className="empty-state-title">
                {searchQuery
                  ? "No matching tasks found"
                  : filter === "completed"
                  ? "No completed tasks yet"
                  : filter === "active"
                  ? "No active tasks right now"
                  : "All caught up!"}
              </h2>
              <p className="empty-state-subtitle">
                {searchQuery
                  ? "Try searching for a different keyword or category."
                  : filter === "completed"
                  ? "Finish pending tasks to see them archived here."
                  : "Enjoy your free time or add a new task above to stay on top of your goals."}
              </p>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
