import { useState } from "react"
import List from "./List"

type Task = {
    id: number
    task: string
    status: "in-progress" | "completed" | "failed"
}

const Form = () => {

    const [newTask, setNewTask] = useState<string>("")

    const [list, setList] = useState<Task[]>([])

    function handleSubmit(e: React.SubmitEvent): void {
        e.preventDefault()
        if(!newTask) return

        const submitTask: Task = {
            id: Date.now(),
            task: newTask,
            status: "in-progress"
        }

        setList([...list, submitTask])

        setNewTask("")
    }

    function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
        setNewTask(() => e.target.value)
    }

  return (
    <form action="#" onSubmit={handleSubmit} className="bg-white p-2 min-h-60 rounded-xl">
        <div className="flex items-center justify-between gap-6">
            <input
                type="text" 
                placeholder="Your Task...?" 
                className="focus:outline-none"
                value={newTask}
                onChange={handleChange}
            />
            <button className="bg-green-400 py-1 px-6 rounded-sm cursor-pointer text-white">Add</button>
        </div>
        <div className="mt-2.5">
            <List add={list}/>
        </div>
    </form>
  )
}

export default Form
