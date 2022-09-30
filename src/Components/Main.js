import React from "react";
import axios from 'axios';
import CityCard from "../Components/CityCard";
import CityForm from "../Components/CityForm";
import Weather from '../Components/Weather';


class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      location: "",
      error: false,
      errorMessage: '',
      lat: "",
      lon: "",
      displayCard: false,
      cityMap: '',
      weatherData: [],
      displayWeather: false,
    };
  }

  handleInput = (e) => {
    e.preventDefault();
    this.setState({ searchQuery: e.target.value });
  }
  handleWeather = async () => {
    try {
      const API = `http://localhost:3001/weather?searchQuery=${this.state.searchQuery}&lat=${this.state.location.lat}&lon=${this.state.location.lon}`;
      const weatherRes = await axios.get(API);
      this.setState({
        weatherData: weatherRes.data,
        displayWeather: true,
      });
    } catch (error) {
      this.setState({error: true,
        displayWeather: false});
        this.setState({ displayCard: false, });
        this.setState({ errorMessage: error.response.status + error.message + ""});
    }
  }
  
  handleSearch = async (e) => {
    e.preventDefault();
    this.setState({ error: false });
    try {
      const API = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_IQ_KEY}&q=${this.state.searchQuery}&format=json`
      const res = await axios.get(API);
      console.log(res.data);
      this.setState({ location: res.data[0].display_name });
      this.setState({ lat: res.data[0].lat });
      this.setState({ lon: res.data[0].lon });
      this.setState({ cityMap: `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_IQ_KEY}&center=${res.data[0].lat},${res.data[0].lon}&zoom=12` });
      this.setState({ displayCard: true });
      this.setState({ searchQuery: '' });
      this.handleWeather();
      
    } catch (error) {
      console.log(error)
      this.setState({ error: true });
      this.setState({ errorMessage: error.response.status + error.message + ""});
      this.setState({ displayCard: false, });
      this.handleWeather();
    }
  }
    
    render() {
      return (
      <>
        <CityForm
          handleInput={this.handleInput}
          handleSearch={this.handleSearch}
          errorMessage={this.state.errorMessage}
          error={this.state.error}
          searchQuery={this.state.searchQuery}
          />
        <CityCard
          displayCard={this.state.displayCard}
          cityName={this.state.location}
          cityLon={this.state.lon}
          cityLat={this.state.lat}
          cityMap={this.state.cityMap}
          errorMessage={this.state.errorMessage}
          error={this.state.error}
        />
        <Weather
          weatherData={this.state.weatherData}
          displayWeather={this.state.displayWeather}
          errorMessage={this.state.errorMessage}
          error={this.state.error}
        />
      </>
    );
  }
}

export default Main;