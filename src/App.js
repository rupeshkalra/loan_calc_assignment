import React,{useState} from 'react'

import './App.css';
import Heading  from "./components/head";
import Input from "./components/input";
import Display from "./components/display";

function App() {
  const [userValues, setUserValues] = useState({
    amount: '',
    interest: '',
    months: '',
    EMI:'',
    totalPayment:'',
    totalInterest:'',
    display:''
  });

  return (
    <div className="App">
    <Heading/>
    <Input userValues={userValues} setUserValues={setUserValues}/>
    <Display userValues={userValues} />
    </div>
  );
}

export default App;
