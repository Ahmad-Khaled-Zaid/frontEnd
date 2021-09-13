import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import AddBooks from './AddBooks';

export class NewBook extends Component {

  constructor(props) {
    super(props);
    this.state = {
      newBooksData: [],
      showAddModal: false,
    }

  }

  
  handelAddModal = (e) => {
    e.preventDefault();

    const reqBody = {
      title: e.target.BookTitle.value,
      description: e.target.BookDescription.value,
      status: e.target.BookStatus.value,
      email: e.target.Email.value,
    }

    

    axios.post(`${process.env.REACT_APP_API_URL}/booksCollection`, reqBody).then(createdBookObject => {
      this.state.newBooksData.push(createdBookObject.data); 
      this.setState({ newBooksData: this.state.newBooksData }); 
      this.handelDisplayAddModal(); 
    }).catch(() => alert("Something went wrong!"));
  }

  handelDeleteBook = (BookId) => {

  

    axios.delete(`${process.env.REACT_APP_API_URL}/booksCollection/${BookId}`).then(deleteResponse => {
      if (deleteResponse.data.deletedCount === 1) {
        const newBookArr = this.state.newBooksData.filter(book => book._id !== BookId);
        
        this.setState({ newBooksData: newBookArr });
      }
    }).catch(() => alert("something went wrong"));
  }

 
  handelDisplayAddModal = () => {
    this.setState({ showAddModal: !this.state.showAddModal });
  }

  componentDidMount = () => {
  

    axios.get(`${process.env.REACT_APP_API_URL}/booksCollection`).then((BookResponse) => {

      this.setState({ newBooksData: BookResponse.data });
    }).catch(error => alert(error.message));


  }

  render() {
    return (
      <div>
        <Button onClick={this.handelDisplayAddModal}>
          Show Add Book Modal Form
        </Button>
        
        {
          this.state.showAddModal &&
          <>
            <AddBooks
              show={this.state.showAddModal}
              handelAddModal={this.handelAddModal}
              handelDisplayAddModal={this.handelDisplayAddModal}
            />
          </>
        }

        {
          this.state.newBooksData.length > 0 &&
          <>
            {
              this.state.newBooksData.map(book => {
                return (
                  <>
                    <Card style={{ width: '18rem' }}>
                      
                      <Card.Body>
                        <Card.Title>{book.title}</Card.Title>
                        <Card.Text>
                          {book.description}
                        </Card.Text>
                        <Card.Text>
                          {book.status}
                        </Card.Text>
                        <Card.Text>
                          {book.email}
                        </Card.Text>
                        <Button variant="danger" onClick={() => this.handelDeleteBook(book._id)}>Delete Book</Button>
                      </Card.Body>
                    </Card>
                  </>
                )
              })
            }
          </>
        }
      </div>
    )
  }
}

export default NewBook
