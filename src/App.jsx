import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';

import './App.css';
import BookList from './components/BookList';
import { listOfBooks } from "./data";
import AddBook from './components/AddBook';


function App() {
  console.log(listOfBooks);

  return (
    <Stack gap={2}>
      <div className="p-2">
        <h1>Book List for 2025</h1>
      </div>
      <div className="p-2">
        <AddBook />
      </div>
      <div className="p-2">
        <p>Current List of Books to Read in 2025</p>
        <BookList books={listOfBooks} />
      </div>
  </Stack>
      
  )
}
export default App;
