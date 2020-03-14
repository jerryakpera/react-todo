import React from "react"
import { BrowserRouter, Route } from "react-router-dom"
import axios from "axios"

import Header from "./components/Layouts/Header/Header"
import Todos from "./components/Todos/Todos"
import TodoInput from "./components/TodoInput/TodoInput"
import About from "./components/Views/About/About"

import "./App.css"

class App extends React.Component {
  state = {
    todos: []
  }

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/todos?_limit=10")
    .then(res => {
      this.setState({
        todos: res.data
      })
    })
  }

  // Toggle todo
  toggleComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
    })
  }

  // Remove todo item
  removeTask = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(res => {
      this.setState({
        todos: this.state.todos.filter(todo => todo.id !== id)
      })
    })
  }

  // Add new item
  addTask = (title) => {
    axios.post("https://jsonplaceholder.typicode.com/todos", {title, completed: false})
    .then(res => {
      this.setState({
        todos: [ 
          ...this.state.todos,
          res.data
        ]
      })
    })
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/" render = { props => (
              <React.Fragment>
                <TodoInput 
                  newTask={this.addTask} 
                />
                <Todos 
                  todos={this.state.todos} 
                  toggleComplete={this.toggleComplete} 
                  removeTask={this.removeTask} 
                />
              </React.Fragment>
            )} />
            <Route path="/about" component={About} />
          </div>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
