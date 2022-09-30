import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert'

class CityCard extends React.Component {
  render() {
    return (
      <>
        {this.props.displayCard &&
          <Container >
            <Card className= "p-3 mb-2 bg-primary text-white border border-info rounded d-flex flex-column mx-3 text-center w-50 p-3 mx-auto 200">
              <Card.Body>
                <Card.Title>City Name: {this.props.cityName}</Card.Title>
                <Card.Text>
                  Latitude: {this.props.cityLat} 
                  <br/>
                  Longitude: {this.props.cityLon}
                </Card.Text>
                <Card.Img variant="top" src={this.props.cityMap} />
              </Card.Body>
            </Card>
          </Container>
        }
    {this.props.error &&
      <Container>
        <Alert variant="danger" className="p-3 mb-2 bg-danger text-white border border-info rounded flex-column mx-3 text-center w-50 mx-auto 200">
          <Alert.Heading>
            <>
              <h5>Sorry! 😔 : {this.props.errorMessage}</h5>
            </>
          </Alert.Heading>
        </Alert>
      </Container>
    }
      </>
    )
  }
}

export default CityCard;