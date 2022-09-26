import React from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      location: {},
      error: false,
      errorMessage: '',
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
      this.setState({ location: res.data[0] });
      this.setState({ lat: res.data[0] });
      this.setState({ lon: res.data[0] });

    } catch (error) {
      console.log(error);
      this.setState({ error: true });
      this.setState({ errorMessage: error.message });
    }
  }


  render() {
    return (
      <>
        <input className="p-3 mb-2 bg-secondary text-white" onChange={this.handleInput} placeholder="search for a city"></input>
        <button className="p-3 mb-2 bg-success text-white" onClick={this.handleSearch}>Explore!</button>
        {
          this.state.location.place_id &&
          <>
            <h2 className="p-3 mb-2 bg-primary text-white">The City is: {this.state.location.display_name}</h2>
            <h2 className="p-3 mb-2 bg-primary text-white">The lat is: {this.state.location.lat}</h2>
            <h2 className="p-3 mb-2 bg-primary text-white">The lon is: {this.state.location.lon}</h2>
          </>
        }
        {this.state.error &&
          <>
            <h2 class="p-3 mb-2 bg-danger text-white">Oh no! This City doesn't exist: {this.state.errorMessage}</h2>
          </>
        }
        < img src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_IQ_KEY}&center=${this.state.lat},${this.state.lon}&zoom=13`} alt="Map of City"> Look here:</img>
      </>
    );
  };
};

export default App;
