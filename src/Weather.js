import React from "react";
import axios from "axios";

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.props = {
      searchQuery: '',
      location: "",
      error: false,
      errorMessage: '',
      lat: "",
      lon: "",
    };
  }

  handleSearch = async (e) => {
    try {
      const API = `http://localhost:3000/?key=${process.env.REACT_APP_LOCATION_IQ_KEY}&q=${this.props.searchQuery}&format=json`
      const res = await axios.get(API);

  } catch(error) {
    console.log(error);
    this.setState({ error: true });
    this.setState({ errorMessage: error.message });
  }
};

render() {

  return (
    <>
      <h1> Weather</h1>
    </>
  )
};
};
export default Weather;