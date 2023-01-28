import { ChangeEvent, useState } from 'react'
import styles from '@/styles/Home.module.css'
import { ITask } from '@/interface'
import TodoTask from '@/components/TodoTask'



export default function Home() {

  const [task, setTask] = useState<string>("")
  const [time, setTime] = useState<number>(0)
  const [todo, setTodo] = useState<ITask[]>([])

  const handleChange = (event : ChangeEvent<HTMLInputElement>)=>{

    if (event.target.name ==="task"){
      setTask(event.target.value)
    }else{
      setTime(Number(event.target.value))
    }
  }
    const addTask = () => {
      const newTask = {taskName : task , timetaken : time}
      setTodo([...todo, newTask])
      setTask("")
      setTime(0)
    }

    const deleteTask = (taskToDelete : string) : void => {

     setTodo( todo.filter((task) => {
        return task.taskName != taskToDelete
      } ))

    }
  
  return (
    <>
   
     
        <div className='flex flex-col justify-between items-center'>
          <div>

          <input 
          type= "text" 
          placeholder='Task'
          name ="task"
          value = {task}
          onChange={handleChange}

          />

          </div>

          <div>
          <input 
          type= "number" 
          placeholder='time'
          name ="time"
          value = {time}
          onChange={handleChange}

          />

          </div>
    
        </div>


        <div>
          <button onClick={addTask}>Add task</button>
        </div>
        <div className='todoTask'>
          {todo.map((task : ITask, key : number) => {
            return < TodoTask 
            key ={key}
            task={task}
            deleteTask ={deleteTask}/>
          })}
        </div>
    
     
    </>
  )
}
