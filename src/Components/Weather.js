import React from "react";
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class Weather extends React.Component {

  render() {

    return (
      <>
        {this.props.displayWeather &&
          <Container className= "p-3 mb-2 bg-info text-black border border-info rounded  mx-3 text-center w-50 p-3 mx-auto 200 w-50">
            <h3> Weather Forecast☁️</h3>
            <div>
              {this.props.weatherData.map((event, index) => {
                return (
                  <>
                    <p key={index}>Date: {event.date}</p>
                    <p>Forecast: {event.description}</p>
                  </>
                )
              })}
            </div>
          </Container>
        }
      </>
    )
  }
}

export default Weather;