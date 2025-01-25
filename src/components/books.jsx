import "./books.css";

import { Button } from "react-bootstrap";

export default function Book({ book }) {
  return (
    <div className="book">
      <p className={book.completed ? "book-title-completed " : ""}>
        {book?.title}
      </p>
      <div className="btn-group">
        <Button variant="secondary">
          {book.completed ? "Undo" : "Complete"}
        </Button>
        <Button variant="danger">Delete</Button>
      </div>
    </div>
  );
}