import React, {Component} from "react";
import "./App.css";
import NavbarComponent from "./Components/NavbarComponent";
import Experience from "./Components/Experience";
import Formation from "./Components/Formation";
import Header from "./Components/Header";
import Contact from "./Components/Contact";
import Stack from "./Components/Stack";
import Footer from "./Components/Footer";

class App extends Component {
  state = {
      data: null
    };
  
    // componentDidMount() {
    //     // Call our fetch function below once the component mounts
    //   this.callBackendAPI()
    //     .then(res => this.setState({ data: res.express }))
    //     .catch(err => console.log(err));
    // }
    //   // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
    // callBackendAPI = async () => {
    //   const response = await fetch('/express_backend');
    //   const body = await response.json();
  
    //   if (response.status !== 200) {
    //     throw Error(body.message) 
    //   }
    //   return body;
    // };
    render() {
      return (
        <div className="App">
          <div id="header">
            <Header />
          </div>
          <NavbarComponent />
          <div id="experience" className="section">
            <Experience />
          </div>
          <div id="formation" className="section">
            <Formation />
          </div>
          <div id="stack" className="section">
            <Stack />
          </div>
          <div id="contact" className="section">
            <Contact />
          </div>
          <Footer />
        </div>
      );
    }
}

export default App;
