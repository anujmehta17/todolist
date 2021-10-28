import React from "react";
import "./App.css";

function Todo({ todo, index, completeTodo, removeTodo, Edittask }) {
  return (
    
    <div
      className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
      className="Edittask"    
    >
      
      {todo.text}
      <div>
        <button onClick={() => completeTodo(index)}>Complete</button>
        <button onClick={() => removeTodo(index)}>X</button>
        <button onClick={() => Edittask(index)}>Edit</button>
      </div>
    </div>
  );
}

function TodoForm({ addTodo }) {
  const [value, setValue] = React.useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </form>
  );
}

function App() {
  const [todos, setTodos] = React.useState([
    
    
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  }

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  }

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }
  
  const Edittask=(index) => {
      alert("Please press OK and type the changes you want and then press OK ")
    //  const newTodos = [...todos];
    //   newTodos.splice(index, 1);
    //   setTodos(newTodos);
    //   console.log("edit"+ index);


      const foo=prompt("enter new value");
        //const index = state.list.findIndex((todo) => todo.id === action.id);                                                        
        const newTodos = [...todos];
         newTodos[index].text =  foo;
         setTodos(newTodos);
         console.log(newTodos);
         
        
  }
  
  return (
    <div className="app">
            <div><h1>TODO-LIST</h1></div>

      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
            Edittask={Edittask}
          />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
        }    

export default App;