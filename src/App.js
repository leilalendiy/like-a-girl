import React, { Component } from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


class About extends Component {
  render() {
    return (
      <div className="App">
      <header className="App-header">
        <h1> <Link className="App-title-bar" to="/"> LIKE A GIRL </Link> </h1>
        <h1> <Link className="App-about-bar" to="/about"> ABOUT US </Link> </h1>
        <h1> <Link className="App-ask-bar" to="/ask"> ANONYMOUS ASKING </Link> </h1>
        <h1> <Link className="App-culture-bar" to="/culture"> FEMALE CULTURE </Link>  </h1>
        <h1> <Link className="App-gallery-bar" to="/culture"> GIRLS GALLERY </Link>  </h1>
      </header>
      </div>
    )
  }
}

class Ask extends Component {
  render() {
    return (
      <div className="App">
      <header className="App-header">
        <h1> <Link className="App-title-bar" to="/"> LIKE A GIRL </Link> </h1>
        <h1> <Link className="App-about-bar" to="/about"> ABOUT US </Link> </h1>
        <h1> <Link className="App-ask-bar" to="/ask"> ANONYMOUS ASKING </Link> </h1>
        <h1> <Link className="App-culture-bar" to="/culture"> FEMALE CULTURE </Link>  </h1>
        <h1> <Link className="App-gallery-bar" to="/culture"> GIRLS GALLERY </Link>  </h1>
      </header>
      </div>
    )
  }
}

class Culture extends Component {
  render() {
    return (
      <div className="App">
      <header className="App-header">
        <h1> <Link className="App-title-bar" to="/"> LIKE A GIRL </Link> </h1>
        <h1> <Link className="App-about-bar" to="/about"> ABOUT US </Link> </h1>
        <h1> <Link className="App-ask-bar" to="/ask"> ANONYMOUS ASKING </Link> </h1>
        <h1> <Link className="App-culture-bar" to="/culture"> FEMALE CULTURE </Link>  </h1>
        <h1> <Link className="App-gallery-bar" to="/culture"> GIRLS GALLERY </Link>  </h1>
      </header>
      </div>
    )
  }
}

class Gallery extends Component {
  render() {
    return (
      <div className="App">
      <header className="App-header">
        <h1> <Link className="App-title-bar" to="/"> LIKE A GIRL </Link> </h1>
        <h1> <Link className="App-about-bar" to="/about"> ABOUT US </Link> </h1>
        <h1> <Link className="App-ask-bar" to="/ask"> ANONYMOUS ASKING </Link> </h1>
        <h1> <Link className="App-culture-bar" to="/culture"> FEMALE CULTURE </Link>  </h1>
        <h1> <Link className="App-gallery-bar" to="/culture"> GIRLS GALLERY </Link>  </h1>
      </header>
      </div>
    )
  }
}

class Home extends Component {
  render() {
    return (<div className="App">
        <h1 className="App-title"> LIKE A GIRL </h1>
        <hr/>
        <h1><Link className="App-about" to="/about">ABOUT US</Link> </h1>
        <h1><Link className="App-anonymous" to="/ask"> ANONYMOUS ASKING</Link> </h1>
        <h1><Link className="App-culture" to="/culture"> FEMALE CULTURE</Link> </h1>
        <h1><Link className="App-gallery" to="/gallery"> GIRLS GALLERY</Link> </h1>
      </div>
    )
  }

}


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/ask" component={Ask}/>
          <Route path="/culture" component={Culture}/>
          <Route path="/gallery" component={Gallery}/>
        </div>
      </Router>
    );
  }
}

export default App;
