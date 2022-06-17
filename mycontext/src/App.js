
import React, {useContext} from 'react'
import { createContext } from 'react';
import "./App.css"
import Thought from './teste';
 


const salesman = createContext()


const Another = () => {
  const sall = useContext(salesman)
  return(<>
   <h1> Another {sall}</h1>
  </>)
}

const Tired = () => {
  const phase = 'Living here floripa, is beautiful'
  return (<>
      <salesman.Provider value={phase} >
       <Another/>
      </salesman.Provider>
  </>)
}




//practice little bit about contextapi!!
const manageAll  = createContext()

const Other = () => {
  // This case const save
  const save = useContext(manageAll)
  return <div> teste {save} </div>

}

function App() {
  const another = "programmer Felipe 18"
  
  return (
    <manageAll.Provider value={another} >
      <Thought/>
      <div className="App">
        App
       <Other/>
       <Tired/>
       </div>
      
    </manageAll.Provider>
  );
}

export default App;
