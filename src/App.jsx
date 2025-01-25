import Button from 'react-bootstrap/Button';

import './App.css';
import BookList from './components/BookList';
import { defaultBooks } from "./data";


function App() {
  console.log(defaultBooks);

  return (
    <div className="container">
      <h1>Book List for 2025</h1>
      <Button variant="primary">Add Book</Button>
      <BookList books={defaultBooks} />
    </div>
      
  )
}

export default App;
