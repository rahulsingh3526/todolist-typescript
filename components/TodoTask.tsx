import { ITask } from '@/interface'
import React from 'react'

interface Props{
    task : ITask;
    deleteTask(taskToDelete : string) : void;
}

export default function todoTask({task, deleteTask} : Props) {
  return (
    <>
    <div>
        <span>{task.taskName}</span>
        <span>{task.timetaken}</span>
    </div>
    <button onClick={() =>deleteTask(task.taskName)}>X</button>
    </>
  )
}
