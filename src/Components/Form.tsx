
const Form = () => {

  return (
    <form action="#" onSubmit={(e) => e.preventDefault()} className="bg-white p-2 min-h-60 flex flex-col items-center justify-between gap-6 rounded-xl">
        <div className="flex items-center justify-between gap-2">
            <input type="text" placeholder="Your wishes...?"/>
            <button className="bg-green-300 py-1 px-6 rounded-sm">Add</button>
        </div>
    </form>
  )
}

export default Form