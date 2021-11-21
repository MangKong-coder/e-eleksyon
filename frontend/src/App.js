import { useState } from 'react'
import AddElection from './components/AddElection'



function App() {
  const [titles, setTitles] = useState([{title:'Test Title'}])
  const onSubmit = (title) => {
    const newTitle = title;
    setTitles([...titles, newTitle])
  }

  return (
    <div className="App">
        <AddElection onSubmit={onSubmit} />
    </div>
  );
}

export default App;
