import { useState } from 'react'
import Navbar from './components/Navbar'
import { v4 as uuid4 } from 'uuid';

function App() {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])
  const handleEdit = ()=>{

  }
  const handleDelete = ()=>{
    let id = e.ta
  }
  const handleAdd = ()=>{
    // Generate unique uuid : npm i uuid
    // anfn for function 
    setTodos([...todos, {id: uuid4(),todo, isCompleted: false}])
    setTodo("")
  }
  const handlechange = (e)=>{
    setTodo(e.target.value)
  }
  const handleCheckbox = (id) => {
    // We need a useCallback(guiding func) inside findindex
    let index = todos.findIndex(item=>{
      return item.id === id;
    })
    let newTodos = [...todos]; // Shallow copy
    newTodos[index].isCompleted = !newTodos[index].isCompleted;// togglig rqd todo
    setTodos(newTodos)
  }
  // const handleCheckbox = (id) => {
  // setTodos((todos) =>
  //   todos.map(todo =>
  //     todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
  //   ));
  // };
  

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
        
        <div className="todos items-center flex flex-col gap-2 justify-center my-3">
          {todos.map(item=>{
          return <div key={item.id} className='todo flex w-1/2 justify-between'>
            {/* To pass something arrow function is needed */}
            <input onChange={() => handleCheckbox(item.id)} type="checkbox" checked={item.isCompleted} name={item.id}/>
            <div className={item.isCompleted?"line-through":""}>{item.todo}</div>
            <div className="buttons flex align-middle gap-5">
              <button onClick={handleEdit} className='cursor-pointer bg-violet-700 hover:bg-violet-900 px-2 py-1 text-sm font-bold text-white rounded-md' >Edit</button>
              <button onClick={handleDelete} className='cursor-pointer bg-violet-700 hover:bg-violet-900 px-2 py-1 text-sm font-bold text-white rounded-md' >Delete</button>
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
