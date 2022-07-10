import {useContext} from 'react'
import { ThoughtContent } from '../context/content'

export const useMessage = () => {
   
    const context = useContext(ThoughtContent)
    console.log("auth test", context)
    if(!context){
        console.log("context don't exist!")
    }
    return context   
}

