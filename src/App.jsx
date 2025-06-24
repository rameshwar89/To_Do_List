import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Typer from './components/Typer'
import { v4 as uuid4 } from 'uuid';

import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDeleteOutline } from "react-icons/md";
// visit website-React icons: npm i react-icons --save
function App() {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])
  const [showFinished, setshowFinished] = useState(true)
  
  const saveToLS= () => {
    localStorage.setItem("todos", JSON.stringify(todos)) // It is like key value pair
  }
  useEffect(()=>{
    if (localStorage.getItem("todos")){
      let todos = JSON.parse(localStorage.getItem("todos"))
      setTodos(todos)
    }
  }, [])
  const handleDelete = (id)=>{
    let index = todos.findIndex(item=>{
      return item.id === id;
    })
    let newTodos = todos.filter(item=>{
      return item.id !== id;
    })
    setTodos(newTodos)
    saveToLS()
  }
  const handleEdit = (id) => {
    let t = todos.filter(i=>i.id===id) // returns object
    setTodo(t[0].todo)
    let newTodos= todos.filter(item => item.id !== id)
    setTodos(newTodos)
    saveToLS()
  }
  const handleAdd = ()=>{
    // Generate unique uuid : npm i uuid
    // anfn for function 
    setTodos([...todos, {id: uuid4(),todo, isCompleted: false}])
    setTodo("")
    saveToLS()
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
    saveToLS()
    //Other way
    // const handleCheckbox = (id) => {
    // setTodos((todos) =>
    //   todos.map(todo =>
    //     todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
    //   ));
    // };
  }
  

  return (
    <>
    <div className="min-h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('./🦋.jpg')" }}>
    <Navbar/>
      <div className="container mx-auto rounded-xl my-20 p-5 backdrop-blur-sm bg-[rgba(242,225,225,0.42)] w-9/10 md:w-4/5 lg:w-1/2 min-h-[80vh] shadow-xl shadow-black shadow-">
      <div className="heading flex justify-center items-center gap-2">
        <h1 className='font-bold text-2xl text-center relative'>iTask - </h1>
        <Typer/>
      </div>
        <div className='addtodo my-5'>
          <h2 className="text-xl font-bold">Save you Todos Here</h2>
          <input autoFocus={true} onChange={handlechange} value={todo} type="text" className='w-full h-7 rounded-md bg-amber-50 my-3 border-0 outline-0 p-2'/>
            <button onClick={handleAdd} disabled={todo.length < 4} className='w-full cursor-pointer bg-violet-700 hover:bg-violet-900 py-1 text-sm font-bold text-white rounded-md disabled:bg-gray-500'>Save</button>
        </div>

        <div className='h-[2px] bg-black opacity-15 w-[90%] mx-auto my-2'></div>
        
        <div className="header flex justify-between">
          <h2 className='text-lg font-bold'>Your Todos</h2>
          <div className='flex gap-2 items-center'>
            <input onChange={()=>{setshowFinished(!(showFinished))}} type="checkbox" checked={showFinished} />
            <label className='mx-2'>Show Finished</label>
          </div>
        </div>
        
        <div className="todos items-center flex flex-col gap-2 justify-center my-3 p-2">
          {todos.length === 0 && <div className='m-5'> No Todos to Display </div>}
          {todos.map(item=>{
          return (showFinished || !item.isCompleted) && <div key={item.id} className='todo flex w-full justify-between'>
            <div className='flex items-center gap-3 wrap break-all text-white text-shadow-2xs text-shadow-[rgb(0,0,0)]' >
            {/* To pass something arrow function is needed */}
              <input className='w-3.5 h-3.5 bg-fuchsia-50 border-0 rounded outline-0 transition duration-100 ease-in-out cursor-pointer hover:scale-110' onChange={() => handleCheckbox(item.id)} type="checkbox" checked={item.isCompleted} name={item.id}/>
              <div className={item.isCompleted?"line-through":""}>{item.todo}</div>
            </div>
            <div className="buttons flex items-center gap-3 mx-3">
              <button onClick={()=>handleEdit(item.id)} className='p-2 rounded-xl cursor-pointer bg-violet-200 hover:scale-120 transition-all duration-200 ease-in-out' >
                <FaRegEdit className='text-xl text-sky-700' />
              </button>
              <button onClick={() => handleDelete(item.id)} className='p-2 rounded-full cursor-pointer bg-red-200 hover:scale-120 transition-all duration-200 ease-in-out'>
                <MdOutlineDeleteOutline className='text-xl text-red-600 ' />
              </button>
            </div>
          </div>
          })
        }
        </div>
      </div>
      </div>
    </>
  )
}

export default App
