import React from 'react'
import { useMessage } from './hoock/useContext'


const AnotheButton = ({TradePhase}) => {
   const AddingPhase = ['life better ?','improve life', 'grop up be away']
    
   const {count, setCount} = useMessage()
   console.log('teste count',count)
   
   const HandGropup = () => {
      setCount(count+2)
   }
    
  return(<>
         
     <button  onClick={()=> TradePhase(AddingPhase[0]) } >1</button>
     <button onClick={() => TradePhase(AddingPhase[1])} >2</button>
     <button onClick={() => TradePhase(AddingPhase[2])}  >3</button>
     <div>
      <h1>Adding more code to thing about create hoock personalites</h1>

      <h4>My Counter is {count} </h4>
      <button onClick={HandGropup} >+ two</button>
     </div>
  </>)
}

export default AnotheButton