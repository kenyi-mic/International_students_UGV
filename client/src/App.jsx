import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Profile from "./components/Profile";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import FAQ from "./components/Faq";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Footer from "./components/Footer";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apiResponse: "",
    };
  }
  callAPI() {
    fetch("http://localhost:9000/testAPI")
      .then((res) => res.text())
      .then((res) => this.setState({ apiResponse: res }));
  }

  componentWillMount() {
    this.callAPI();
  }

  render() {
    return (
      <div className="bg-transparent">
        {/* <p className="p-5 m-5 bg-gray-900 text-white">
          // {this.state}
        </p> */}
        <Router>
          <Header />
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/gallery">
              <Gallery />
            </Route>
            <Route path="/faq">
              <FAQ />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
