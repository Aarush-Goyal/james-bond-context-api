/*
import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';

const  GrandChild = props => (
  <div>
    <h3>Grand child :</h3>
    <Child brand={props.brandname}/>
  </div>
)

const Child = props => (
  <div>
    <h2>Child : {props.brand}</h2>
  </div>
);

// Here we have to use props two times and is unnceccesary
// Thus we use context apis to handle such situations

function App() {
  const [brand] = useState("Amazon")
  return (
    <div className="App">
      <Navbar />
      <GrandChild brandname={brand} />
    </div>
  );
}

// TODO: createContext
  //     Context.Provider => value
  //     Context.Consumer

export default App;
*/