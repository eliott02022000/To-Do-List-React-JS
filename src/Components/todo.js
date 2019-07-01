import React, { Component } from 'react';
import '../styles/todo.css';


export default class todo extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      todolist_input: "",
      myitems: [],
    };
  }

  eraseclick(event) {
    event.currentTarget.style.backgroundColor = 'black';
    event.currentTarget.style.display = 'none';
  }

  onChange = (event) => {
    this.setState({ todolist_input: event.target.value });
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.setState({
      todolist_input: "",
      myitems: [...this.state.myitems, this.state.todolist_input]
    });
  }


  render() {
    return (
      <div>

        <form className="App" onSubmit={this.onSubmit}>

          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="inputGroup-sizing-default">To Do</span>
            </div>
            <input type="text" className="form-control" value={this.state.todolist_input} onChange={this.onChange}  aria-label="Default" aria-describedby="inputGroup-sizing-default"/>
          </div>

        </form>

        <ul className="list-group">

        {this.state.myitems.map((key, index) => 

          <div id="moveto" onClick={this.eraseclick}>
            <li className="list-group-item" key={index}> 

              <span className="todotext">{key}</span>

            </li>

          </div>
          )}

        </ul>
      </div>
    );
  }
}