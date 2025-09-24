import { useState } from "react";
import TasksContext from "./TasksContext";

function TasksProvider({ children }) {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  return (
    <>
      <TasksContext.Provider value={{ tasks, setTasks }}>
        {children}
      </TasksContext.Provider>
    </>
  );
}

export default TasksProvider;
