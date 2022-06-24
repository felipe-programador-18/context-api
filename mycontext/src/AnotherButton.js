import React from 'react'

const AnotheButton = ({TradePhase}) => {
   const AddingPhase = ['life better ?','improve life', 'grop up be away']


  return(<>
     
     <button  onClick={()=> TradePhase(AddingPhase[0]) } >1</button>
     <button onClick={() => TradePhase(AddingPhase[1])} >2</button>
     <button onClick={() => TradePhase(AddingPhase[2])}  >3</button>
  
  </>)
}

export default AnotheButton