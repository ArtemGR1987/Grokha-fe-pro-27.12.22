import React from "react";
import ReactDOM from "react-dom";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div>
      <TodoList />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

export default App;