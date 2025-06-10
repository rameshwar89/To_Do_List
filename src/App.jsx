import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'

function App() {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])
  const handleEdit = ()=>{

  }
  const handleDelete = ()=>{

  }
  const handleAdd = ()=>{
    setTodos([...todos, {todo, isCompleted: false}])
    setTodo("")
  }
  const handlechange = (e)=>{
    setTodo(e.target.value)
  }

  return (
    <>
    <Navbar/>
      <div className="container mx-auto rounded-xl my-5 p-5 bg-violet-200">
        <div className='addtodo my-5'>
          <h2 className="text-lg font-bold">Add a todo</h2>
          <input onChange={handlechange} value={todo} type="text" className='w-1/2 bg-amber-50'/>
            <button onClick={handleAdd} className='cursor-pointer bg-violet-700 hover:bg-violet-900 px-4 py-1 text-sm font-bold text-white rounded-md mx-6' >Add</button>
        </div>
        <h2 className='text-lg font-bold'>Your Todos</h2>
        <div className="todos">
          {todos.map(item=>{
          return <div className='todo flex'>
            <div className={item.isComplete?"":"line-through"}>{item.todo}</div>
            <div className="buttons">
              <button onClick={handleEdit} className='cursor-pointer bg-violet-700 hover:bg-violet-900 px-2 py-1 text-sm font-bold text-white rounded-md mx-6' >Edit</button>
              <button onClick={handleDelete} className='cursor-pointer bg-violet-700 hover:bg-violet-900 px-2 py-1 text-sm font-bold text-white rounded-md mx-6' >Delete</button>
            </div>
          </div>
          })
        }
        </div>
      </div>
    </>
  )
}

export default App
