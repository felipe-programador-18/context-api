import React from 'react'

const ChangeState = ({ HandlingMessage}) => {
 const messages = ['hi there', 'how are you ?', 'how old are you ?']


 return (<>
  
  <button onClick={ () => HandlingMessage(messages[0])} >1</button>
  <button onClick={ () => HandlingMessage(messages[1]) } >2</button>
  <button onClick={ () => HandlingMessage(messages[2]) } >3</button>
 </>)

}

export default ChangeState