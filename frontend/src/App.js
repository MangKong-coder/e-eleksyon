import {Routes, Route } from 'react-router-dom';
import { useState } from 'react'
import AddElection from './components/AddElection'
import './App.css';


function App() {
  const [titles, setTitles] = useState([{title:'Test Title'}])
  const onSubmit = (title) => {
    const newTitle = title;
    setTitles([...titles, newTitle])
    console.log(titles);
  }

  return (
    <div className="App">
      <AddElection onSubmit={onSubmit} />
    </div>
  );
}

export default App;
