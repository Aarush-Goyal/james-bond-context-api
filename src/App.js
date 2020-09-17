
import React, { useState, Fragment } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Context from "./context";
import Provider from "./provider"

// Important
const AgentBond = () => {
  return(
  <Context.Consumer>
    {
      (context) => (
        <Fragment>
          <h3> Agent Info :</h3>
          <p><b>Mission Name :</b> {context.data.mname}</p>
          <p><b>Agent Name :</b> {context.data.agent}</p>
          <p><b>Status :</b> {context.data.accept}</p>
          
          <button onClick={context.acceptMission} >Click to accept mission</button>          
        </Fragment>
      )
    }
  </Context.Consumer>
  );
}
// 
const AgentChild = () => {
  return(<AgentBond />);
}

const Agents = () => {
  return(<AgentChild />);
}

function App() {
  
  return (
    <div className="App">
      <Navbar />
      <Provider>
        <Agents />
      </Provider>
    </div>
  );
}

// TODO: createContext
  //     Context.Provider => value
  //     Context.Consumer

export default App;
