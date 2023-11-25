import { Header } from './components/Header.tsx'
import { Footer } from './components/Footer.tsx'
import { SetStateAction, useState } from 'react'

export function App() {
  const [input, setInput] = useState("");
  const [list, setList] = useState(['Aivin', 'Alvin', 'Peter', 'Grace', 'James']);
  const [done, setDone] = useState([false, false, false, false, false]);

  function handleInputChange(event: { target: { value: SetStateAction<string>; }; }) {
    setInput(event.target.value);
  }
  function handleAddName() {
    if (input == "") {
      return;
    }
    const copy = [...list];
    copy.push(input);
    setList(copy);
  }
  function handleDelete(index: number) {
    const copy = [...list];
    copy.splice(index, 1);
    setList(copy);
  }
  function handleMarkDone(index: number) {
    const copy = [...done];
    copy[index] = false;
    setDone(copy);
  }
  function handleUnmarkDone(index: number) {
    const copy = [...done];
    copy[index] = true;
    setDone(copy);
  }
  return (
    <div>
      {/* <Header name="World" age={4192928927} isRegistered/>
      <Footer name="World"/> */}
      <h1>To Do List</h1>
      {list.map((value, index) => {
        return (
          <>
          {done[index] ? 
          <s>{value} <button onClick={() => handleDelete(index)}>Delete</button> <button onClick={() => handleMarkDone(index)}>Unmark as done</button></s> :
          <p>{value} <button onClick={() => handleDelete(index)}>Delete</button> <button onClick={() => handleUnmarkDone(index)}>Mark as done</button></p>
          }
          <p></p>
          </>
        )
      })}
      <input type="text" value={input} onChange={handleInputChange}/>
      <button onClick={handleAddName}>Add</button>
    </div>
  )
}


