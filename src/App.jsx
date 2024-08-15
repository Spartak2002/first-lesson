// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useState } from 'react'
import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App


export default function App() {
  const [count, setCount] = useState(1)
  const [people, setPeople] = useState([
    { id: 101, name: "Tiko", surname: "Harutyunyan", salary: 200000 },
    { id: 102, name: "Ano", surname: "Davtyan", salary: 350000 },
    { id: 103, name: "Gago", surname: "Tigranyan", salary: 102000 },
    { id: 104, name: "Maro", surname: "Melqonyan", salary: 120000 },
    { id: 105, name: "Saro", surname: "Harutyunyan", salary: 75000 },
    { id: 106, name: "Varo", surname: "Mnacakanyan", salary: 820000 },
  ])

  const handleSalaryUp = (id) => {
    let tmp = [...people]
    let index = tmp.findIndex(item => item.id == id)
    tmp[index].salary += 57_000
    setPeople(tmp)
  }

  const handleSalaryDown = (id) => {
    let tmp = [...people]
    let index = tmp.findIndex(item => item.id == id)
    tmp[index].salary -= 57_000
    if (tmp[index].salary <= 0){
      setPeople(tmp[index].salary = 0) 
    }
    setPeople(tmp)
  }

  const remove = (id) => {
    let tmp = [...people]
    let index = tmp.findIndex(item => item.id == id)
    tmp[index] = remove
    setPeople(tmp)
  }

  return <>
    <h1>Barev {count}</h1>
    <button onClick={() => setCount(count + 1)}>LevelUp</button>
    {
      people.map(item => <div key={item.id}>
        <p>{item.name} {item.surname}</p>
        <strong>{item.salary} AMD</strong>
        <button onClick={() => handleSalaryUp(item.id)}>SalaryUp</button>
        <button onClick={() => handleSalaryDown(item.id)}>SalaryDown</button>
        <button onClick={() => remove(item.id)}>Remove</button>
      </div>)
    }
  </>
}