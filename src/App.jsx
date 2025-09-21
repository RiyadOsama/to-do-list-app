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
