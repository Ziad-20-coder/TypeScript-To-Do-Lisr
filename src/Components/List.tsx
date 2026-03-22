type Task = {
    id: number
    task: string,
}

interface listProps {
    add: Task[]
}

const List = ({add}: listProps) => {
  return (
    <ul className="flex flex-col items-start justify-between gap-1.5">
        {add.map((item) => (
            <li>{item.task}</li>
        ))}
    </ul>
  )
}

export default List
