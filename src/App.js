import React from "react";
import axios from "axios";
import Weather from "./Weather";
import 'bootstrap/dist/css/bootstrap.css';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      location: "",
      error: false,
      errorMessage: '',
      lat: "",
      lon: "",
    };
  }

  handleInput = (e) => {
    e.preventDefault();
    this.setState({ searchQuery: e.target.value });
    console.log(this.state.searchQuery);
  }

  handleSearch = async (e) => {
    try {
      const API = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_IQ_KEY}&q=${this.state.searchQuery}&format=json`
      const res = await axios.get(API);
      console.log(res.data);
      this.setState({ location: res.data[0].display_name });
      this.setState({ lat: res.data[0].lat });
      this.setState({ lon: res.data[0].lon });

    } catch (error) {
      console.log(error);
      this.setState({ error: true });
      this.setState({ errorMessage: error.message });
    }
  }


  render() {
    return (
      <>
      <h1 className= "fw-bold text-center position-relative align-middle d-flex flex-column mx-5 my-3"> City-Explorer!🌆</h1>
      <div className="height: 25px; background-color: rgba(255,0,0,0.1);border border-info rounded my-2 mx-3 text-center mx-auto 200 text-center w-25 d-flex flex-row ">
          <input className="p-3 mb-2 bg-secondary text-white border border-info rounded my-5 mx-3 text-center mx-auto 200" onChange={this.handleInput} placeholder="search for a city"></input>
          <button className="p-3 mb-2 bg-success text-white border border-info rounded my-5 text-center mx-auto 200" onClick={this.handleSearch}>Search! 🔎 </button>
          </div>
        {this.state.location &&
          <>
            <h2 className="p-3 mb-2 bg-primary text-white border border-info rounded d-flex flex-column mx-3 text-center w-50 p-3 mx-auto 200">The City is: {this.state.location}</h2>
            <h2 className="p-3 mb-2 bg-primary text-white border border-info rounded d-flex flex-column mx-3 text-center w-50 p-3 mx-auto 200">The lat is: {this.state.lat}</h2>
            <h2 className="p-3 mb-2 bg-primary text-white border border-info rounded d-flex flex-column mx-3 text-center w-50 p-3 mx-auto 200">The lon is: {this.state.lon}</h2>
          </>
        }
        {this.state.error &&
          <>
            <h2 class="p-3 mb-2 bg-danger text-white border border-info rounded d-flex flex-column mx-3 text-center w-50 mx-auto 200">Oh no! This City doesn't exist: {this.state.errorMessage}</h2>
          </>
        }
        <Weather/>
        {this.state.lat &&
          <img className="border border-info rounded  d-flex flex-column mx-auto 200" src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_IQ_KEY}&center=${this.state.lat},${this.state.lon}&zoom=13`} alt="Map of City"></img>
        }
        <footer className="fw-bold text-center position-relative align-middle d-flex flex-column mx-5">
          <p> &copy; EmoBurritto <a href="https://github.com/JoseGonzalez1394"> Hit the Link: Github </a>
            <a href="https://www.linkedin.com/in/jose-armando-gonzalez/"> Hit the Link: Linkedin </a> </p>
        </footer>
      </>
    );
  };
};

export default App;
