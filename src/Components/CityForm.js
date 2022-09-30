import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';

class CityForm extends React.Component {
  render() {
    return (
      <div className="background-color: rgba(255,0,0,0.1);border border-info rounded my-2 mx-3 text-center mx-auto 200 text-center w-25 d-flex flex-row">
        <Container className="mw-75">
          <Form onSubmit={this.props.handleSearch} className="p-3 mb-2 bg-secondary text-white border border-info rounded text-center" onChange={this.handleInput}>
            <Form.Group className="mb-3">
              <Form.Control onChange={this.props.handleInput} value={this.props.searchQuery} type="text" placeholder="Enter a city name:" />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
            <Button className="p-3 mb-2 bg-success text-white border border-info rounded text-center mx-auto 200 d-flex" onClick={this.props.handleSearch}>Search! 🔎</Button>
          </Form>
        </Container>
        </div>
        )
  }
}

        export default CityForm;