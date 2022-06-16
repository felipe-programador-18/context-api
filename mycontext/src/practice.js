import React from 'react'

//practice little bit about contextapi

const Create = ({props}) => {
 return(<>
 <h1>create here {props} </h1>
 </>)
}
const CreateAnother = ({props}) => {
 
 return(<>
 <h1>Create another and practice about props drilled!! </h1>
 <Create value={props.name} />
  
 </>)
}


export default CreateAnother