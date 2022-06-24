import React,{useContext, createContext} from 'react'


//practice little bit about context to improve about this thread
const KindBuild = createContext()


const Moreh1 = () => {
   const value =  useContext(KindBuild)
   return (<>
    <p>adding more value here {value} </p>
    <h1>practice always more and more always in the life !!</h1>
    </>)
}


const CreateCode = () => {
  const phase = "hi learning about create context"
    return (<>
        <KindBuild.Provider value={phase}>
            <Moreh1 />
        </KindBuild.Provider>

    </>)
}

export default CreateCode