import React from "react";
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class Movies extends React.Component {

  render() {

    return (
      <>
        {this.props.displayMovies &&
          <Container className= "p-3 mb-2 bg-info text-black border border-info rounded  mx-3 text-center w-50 p-3 mx-auto 200 w-50">
            <h3> Movies in this City </h3>
            <div>
              {this.props.movieData.map((movie, index) => {
                return (
                  <div key={index}>
                  <p>Title: {movie.title}</p>
                  </div>
                )
              })}
            </div>
          </Container>
        }
      </>
    )
  }
}

export default Movies;