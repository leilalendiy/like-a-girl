import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

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
  constructor(props){
    super(props);
    this.state = {
      askQuestion: '',
      listOfQuestions: [
        'How do you shave your legs..? Asking for a friend',
        'WHAT DO YOU DO WHEN YOU GET YOUR PERIOD!!!???'
      ]

    };
  }
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
      <Card>
      <CardHeader
        title="URL Avatar"
        subtitle="Subtitle"
        avatar="images/jsa-128.jpg"
      />
      <form onSubmit={this.addTask}>
        <input type="text"
          value={this.state.askQuestion}
          onChange={this.handleTaskTyping} />
        <button> Ask Question</button>
      </form>
      </Card>

      <ul>
        {this.renderTaskItems()}
      </ul>
      </div>
    )
  }

  addTask = (event) => {
      event.preventDefault();
      this.setState(function (previousState){
        previousState.listOfQuestions.push(previousState.askQuestion);
        return{
          listOfTask: previousState.listOfTask,
          askQuestion: ''
        };
      });
  }

  renderTaskItems(){
    var  taskItemHtml =
      this.state.listOfQuestions.map((task, index) => {
        return (
          <li>
            {task}
          </li>
        );
      });
      return taskItemHtml;
  }

  handleTaskTyping = (event) => {
    this.setState({
      askQuestion: event.target.value
  });

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
      <MuiThemeProvider>
      <Router>
        <div>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/ask" component={Ask}/>
          <Route path="/culture" component={Culture}/>
          <Route path="/gallery" component={Gallery}/>
        </div>
      </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
