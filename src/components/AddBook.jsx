import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function AddBook() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBookTitle">
        <Form.Control type="text" placeholder="Enter book title" />
        <Form.Text className="text-muted">
          Type title of the book you want to add to the list.
        </Form.Text>
      </Form.Group>

      
      <Button variant="primary" type="submit">
        Add Book
      </Button>
    </Form>
  );
}

export default AddBook;