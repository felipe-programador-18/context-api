
import React,{createContext, useContext} from 'react'

const outcomeAll = createContext()

const Other = () => {
   const caught =  useContext(outcomeAll)
   return (<>
    <h1>Other {caught} </h1>
    </>)
}

const Thought = () => {
    const message ='Programer Floripa'
    return (<>
      <outcomeAll.Provider value={message}>
       <Other/> 
       <h1>Create another context to put in inside context</h1>
      </outcomeAll.Provider>   
    </>)
}

export default Thought