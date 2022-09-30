import React from "react";
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';
import Weather from "./Components/Weather";
import Movies from "./Components/Movies"
import 'bootstrap/dist/css/bootstrap.css';

class App extends React.Component {

  render() {
    return (
      // eslint-disable-next-line react/style-prop-object
      <div className="has-bg-img w-100 p-3 mx-auto 200">
        <Header />
        <img className="bg-img" src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGV4cGxvcmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60 w-50 p-3 200" alt="city"></img>
        <Main />
        <Weather />
        <Movies />
        <Footer />
      </div>
    );
  };
};


export default App;
