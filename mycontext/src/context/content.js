import {createContext, useState} from 'react'

//i have pass on variable create context
export const ThoughtContent = createContext()

export const ContextProvider = ({children}) => {
    const [count, setCount] = useState(2)
    console.log('test counte', count)   
    return (
    <ThoughtContent.Provider value={{count,setCount}} >
        {children}
    </ThoughtContent.Provider>
    )
} 