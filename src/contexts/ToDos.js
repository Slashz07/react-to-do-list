import { useContext, createContext } from "react";

export const myTodos = createContext({
  todos: [],
  addTodo: (todo) => { },
  updateTodo: (id, task) => { },
  delTodo: (id) => { },
  toggleComplete: (id) => { }
})

export const GetContext = () => useContext(myTodos)

export const TodoProvider = myTodos.Provider