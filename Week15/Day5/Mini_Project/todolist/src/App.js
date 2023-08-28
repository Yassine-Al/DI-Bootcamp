import logo from './logo.svg';
import './App.css';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

function App() {
  return (
    <div className="App">
      <h1>Todo</h1>  
      <TodoForm/>
      <TodoList Tasks/>
      
    </div>
  );
}

export default App;
