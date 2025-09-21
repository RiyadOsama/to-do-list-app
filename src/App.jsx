import TasksProvider from "./context/TasksProvider";
import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <>
      <TasksProvider>
        <MainLayout />
      </TasksProvider>
    </>
  );
}

export default App;
