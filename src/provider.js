import React, { useState } from 'react';
import Context from "./context";

const Provider = props => {
    const [mission,setMission] = useState({
        mname : "Go to russia",
        agent : "007",
        accept : "Not accepted"
    })
    return(
        // Important
        <Context.Provider
        value={{
            data : mission,
            acceptMission: ()=>{
                setMission({...mission, accept: "ACCEPTED"})
            }
        }}>
            {props.children}
        </Context.Provider>
    )
}

export default Provider;