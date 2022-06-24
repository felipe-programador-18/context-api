import React, { useState } from 'react'


const uf = ['RS','RJ','SC', 'SP']
const PractForm = () => {
 const [form, setform] = useState({ name:'', email:'', subscribe:false ,uf:'' })
 
 const [show, setshow]= useState(true)

 const OnchangeSomethigs = evt =>{
   const value = evt.target.name
   const thinkForm = evt.target.type === 'checkbox' ?  evt.target.checked  : evt.target.value  
    
   setform((curr) => {
    return {
        ...curr,
        [value]: thinkForm
    } 
   })   
 }

 const errors = {
    name:false,
    email: false
 }

 if(form.name === ''){
    errors.name = true
 }
 if(form.email === '' || form.email.indexOf("@") <0){
    errors.email = true
 }
    
 const HasErrorsHere = Object.keys(errors).reduce((one, two) => one || errors[two],false)

 
 const Getvalue = () => {
    console.log(form)
 }

 
 return(<>

    <h1> testing somethings here!! {JSON.stringify(HasErrorsHere)} </h1>
          
   { show && <input name='name' type='text' value={form.name}  onChange={OnchangeSomethigs}  /> }
    {errors.name && <p>Please field fill!!</p>}
    
   { show &&  <input name='email' type='email' value={form.email} onChange={OnchangeSomethigs}   /> }
    {errors.email && <p>Please filed fill here</p>} 
          
    <input name='subscribe' type='checkbox'  value={form.subscribe} onChange={OnchangeSomethigs} />
    { form.subscribe  && <p>Thanks for subscribe, every week go send any kids of threads for you!!!</p>  }

    <select name='uf' value={form.uf} onChange={OnchangeSomethigs}  >
      {uf.map((ufs ) => <option key={ufs}> {ufs} </option> )}    
    </select>     

      <button onClick={Getvalue} disabled={HasErrorsHere} >Get Form</button>          
      <button onClick ={()=> setshow(curr => !curr) } > Hide Value </button>

    </>)
}

export default PractForm