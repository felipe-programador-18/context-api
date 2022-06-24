
import React, {useContext, useState, createContext} from 'react'
import AnotheButton from './AnotherButton';
import AnotherSlif from './anothersliif';
import "./App.css"
import ChangeState from './changestatesliff';
import CreateCode from './Content';
import PractForm from './form';
import Sliff from './sliff';
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
  
  const[message, setmessage]= useState('')
  const HandlingMessage =(msg) => {
    setmessage(msg)
  }
  
  const [otherphase, setphase] = useState('')
  const TradePhase = (phase) =>{
    setphase(phase)
  }

  
  return (
    <manageAll.Provider value={another} >
      <Thought/>
      <div className="App">
        App
       <Other/>
       <Tired/>
       </div>
       <CreateCode/>
       <PractForm/>

       <Sliff  msg={message}  />
       <ChangeState  HandlingMessage={HandlingMessage}  />
       
       <AnotherSlif phase={otherphase}  />
       <AnotheButton TradePhase={TradePhase}  />
    </manageAll.Provider>
  );
}

export default App;
