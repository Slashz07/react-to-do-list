import { useEffect, useState } from 'react'
import { TodoProvider } from './contexts/ToDos.js'
import './App.css'
import { Todoitems,TodoForm } from './components/index.js'
function App() {
  const [todos, setTodos] = useState([])

   useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])

  useEffect(() => {
    const todoList = JSON.parse(localStorage.getItem("todos"))
    if (todoList && todoList.length != 0) {
      setTodos(todoList)
    }
  },[])
 
  const addTodo = (todo) => {
    setTodos((arr) => [{
      id:arr.length+1,
      task: todo ,
      completed:false,
    },...arr])
  }
  const updateTodo = (id, todo) => {
    setTodos((prevArr) => prevArr.map((todoObj) => todoObj.id === id ? {
      ...todoObj,
      task:todo,
    }:todoObj))
  }
  const delTodo = (id) => {
    setTodos((prevArr)=>prevArr.confirm((todoObj)=>todoObj.id!=id))
  }
  const togglecomplete= (id) => {
    setTodos((prevArr) => prevArr.map((todoObj) => todoObj.id == id ? {
      ...todoObj,
      completed:!todoObj.completed,//here spread operator breaks the object elements and then the "completed" key's value is overwritten
    }:todoObj))
  }

  return (
    <TodoProvider value={{todos,addTodo,updateTodo,delTodo,togglecomplete}}>
   <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                    <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
            {todos.map((todoObj) => (
              <div key={todoObj.id} className='w-full'>
              <Todoitems todo={todoObj} />
              </div>
            ))}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App
