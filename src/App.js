import React, { Component } from 'react';
import './App.css';
import user from './user.jpg'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import {List, ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';


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
      ],
      qas: [
        ["When shaving your ledgs it's important to have a new clean razor and shaving cream(conditionar works juat ask well. Once you've put your cream on your legs you're going to take your razor and statring at the ankle move in an upwards motions. )"],
        []
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
      <Card style={{"margin": "10px", "width": "700px", "margin-left": "500px", "padding-bottom": "10px"}}>
      <CardHeader
        title="Samantha Perez"
        avatar={user}
      />
      <form onSubmit={this.addTask}>
      <TextField
        hintText="Ask a question"
        value={this.state.askQuestion}
        onChange={this.handleTaskTyping}
      />
     <br/>
     <FlatButton label="Submit" onClick={this.addTask} secondary={true}/>
      </form>
      </Card>

        {this.renderTaskItems()}

      </div>
    )
  }

  addTask = (event) => {
      this.setState(function (previousState) {
        let newQuestions = previousState.listOfQuestions.concat([this.state.askQuestion]);
        let nqas = previousState.qas.slice();
        nqas.push([]);

        return {
          listOfQuestions: newQuestions,
          qas: nqas
        };
      });
  }

  addAnswer = (index, answer) => {
    let taskAnswers = this.state.qas[index];
    var newanswers = taskAnswers.concat([answer]);
    taskAnswers[index] = newanswers;
    this.setState({
      qas: taskAnswers
    });
  }

  renderTaskItems(){
    var taskItemHtml =
      this.state.listOfQuestions.map((question, index) => {
        return (<QuestionAnswer key={index} task={question} answers={this.state.qas[index]} onAdd={answer => this.addAnswer(index, answer)}/>);
      });
      return taskItemHtml;
  }

  handleTaskTyping = (event) => {
    this.setState({
      askQuestion: event.target.value
    });
  }
}

class QuestionAnswer extends React.Component {
  state = {
    answer: ""
  }

  handleAnswerTyping = (event) => {
    this.setState({
      answer: event.target.value
    });
  }

  onAddClick = () => {
    this.props.onAdd(this.state.answer);
    this.setState({
      answer: ""
    })
  }

  render() {
    console.log(this.props.answers);

    return (
      <div>
        <Card style={{"margin": "10px", "width": "700px", "margin-left": "500px", "padding-bottom": "10px"}}>
          <List>
            <ListItem>
            <h2>
            {this.props.task}
            </h2>
            </ListItem>

            <div>
            {this.props.answers && this.props.answers.map(ans => <li key={ans} style={{"list-style":"none"}}>{ans}</li>)}

            </div>
            <TextField
              placeholder="Answer Question"
              value={this.state.answer}
              onChange={this.handleAnswerTyping}
            />
            <RaisedButton label="Answer" secondary={true} onClick={this.onAddClick} style={{"margin-left": "100px"}} />
          </List>
        </Card>
      </div>
    );
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
      <h1> Cultre Page Coming Soon...</h1>
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
          <h1> Gallery Page Coming Soon...</h1>
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
