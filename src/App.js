import React, {useState} from 'react'
import './App.css'

function App() {

  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState('');
  const [message, setMessage] = useState('');

  const calcBmi = (event) => {
    //prevent submission
  event.preventDefault();
  if (weight === 0 || height === 0) {
    alert('Please enter a valid weight and height');
  } else {
    const bmi = (weight / (height * height) * 703);
    setBmi(bmi.toFixed(1));
    if (bmi < 18.5) {
      setMessage('You are underweight');
    } else if (bmi >= 18.5 && bmi < 24.9) {
      setMessage('You are a healthy weight');
    } else {
      setMessage('You are overweight');
    }
  }
}


  const reload = () => {
    window.location.reload();
  }

  return (
    <div className="app">
      <h2>BMI Calculator</h2>
      <form onSubmit={calcBmi}>
        <div>
        <label>Weight (lbs)</label>
        <input value = {weight} onChange={(event) => {setWeight(event.target.value)}}/>
        </div>
        <div>
        <label>Height (inches)</label>
        <input value = {height} onChange={(event) => {setHeight(event.target.value)}}/>
        </div>
        <button className = 'submit' type = 'submit'>Submit</button>
        <button className = 'reload' type = 'submit' onClick={reload}>Reload</button>
        <div className='result'>
         <p> Your BMI is: {bmi} </p>
          <p>{message}</p>
        </div>
      </form>
    </div>
  );
}

export default App;
