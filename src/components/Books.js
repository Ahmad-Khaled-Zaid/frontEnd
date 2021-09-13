import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
// import Button from 'react-bootstrap/Button'

export class Books extends Component {

    constructor(props) {
        super(props);
        this.state = {
            BooksData: []
        }

    }



    componentDidMount = () => {


        axios.get(`${process.env.REACT_APP_API_URL}/booksCollection`).then((bookResponse) => {

            this.setState({ BooksData: bookResponse.data });
        }).catch(error => alert(error.message));


    }

    render() {
        return (
            <div>
                {
                    this.state.BooksData.length > 0 &&
                    <>
                        {
                            this.state.BooksData.map(book => {
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

export default Books
