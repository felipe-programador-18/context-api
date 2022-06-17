
import React, {useContext} from 'react'
import { createContext } from 'react';
import "./App.css"
 


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
      <div className="App">
        App
       <Other/>
       </div>
      
    </manageAll.Provider>
  );
}

export default App;
