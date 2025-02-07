import { ListGroup } from "react-bootstrap";
import Book from "./books";

export default function BookList({ books }) {
  console.log(books);

  return (
    <ListGroup>
      {books.map((book) => (
        <ListGroup.Item key={book.id}>
          <Book book={book} />
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}