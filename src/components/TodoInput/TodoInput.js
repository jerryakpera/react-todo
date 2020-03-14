import React, { Component } from 'react'
import PropTypes from "prop-types"
import "./TodoInput.css"

export class TodoInput extends Component {
  state = {
    title: ""
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault()
    this.props.newTask(this.state.title)
    this.setState({
      title: ""
    })
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input 
          className="todoInput" 
          name="title" 
          type="text" 
          value={this.state.title}
          onChange={this.onChange} 
          placeholder="new task"
        />
      </form>
    )
  }
}

TodoInput.propTypes = {
  newTask: PropTypes.func.isRequired
}

export default TodoInput
