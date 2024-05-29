import { useContext, createContext } from "react";

export const myTodos = createContext({
  todos: [
    {
      id: 1,
      task: "first task",
      completed: false
    }
  ],
  addTodo: (todo) => { },
  updateTodo: (id, task) => { },
  delTodo: (id) => { },
  toggleComplete: (id) => { }
})

export const GetContext = () => useContext(todos)

export const TodoProvider = todos.Provider