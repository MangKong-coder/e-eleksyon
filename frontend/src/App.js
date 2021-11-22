import { useState } from 'react'
import { Routes, Route, Link } from "react-router-dom";
import AddElection from './components/AddElection'
import Success from './components/Success'


function App() {
  const [titles, setTitles] = useState([{title:'Test Title'}])
  const onSubmit = (title) => {
    const newTitle = title;
    setTitles([...titles, newTitle])
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AddElection onSubmit={onSubmit} />}/>
        <Route path="/success" element={<Success />}/>
      </Routes>
        
    </div>
  );
}

export default App;
