import React from 'react';
import {hot} from "react-hot-loader";
import './App.css';
import Input from './common/input';
import { setConfig } from 'react-hot-loader'

setConfig({
  reloadHooks: false
})

function App() {
  return (
    <div className="App">
    <Input></Input>
    <div style={{backgroundColor:'red'}}> coucou </div>
    </div>
  );
}

export default hot(module)(App);
