import "./App.css";
import { AddTasks } from "./AddTasks";
import { TasksList } from "./TasksList";
import { AppContext } from "./AppContext";

function App() {
  return (
    <div className="App">
      <AppContext>
        <AddTasks />
        <TasksList />
      </AppContext>
    </div>
  );
}

export default App;
