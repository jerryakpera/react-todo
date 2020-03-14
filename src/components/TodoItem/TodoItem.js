import React, { Component } from 'react'
import PropTypes from "prop-types"

export class TodoItem extends Component {
  getStyle = () => {
    return {
      background: "#F4F4F4",
      padding: "10px",
      borderBottom: "1px dotted #CCC",
      fontSize: "0.8em",
      textDecoration: this.props.todo.completed ? "line-through" : "none"
    }
  }

  render() {
    const { title, id } = this.props.todo
    return (
      <div style={this.getStyle()}>
        <p>
          <input type="checkbox" onChange={this.props.toggleComplete.bind(this, id)} /> { " " }
          { title }
          <button style={btnStyle} onClick={this.props.removeTask.bind(this, id)} >x</button>
        </p>
      </div>
    )
  }
}

const btnStyle = {
  background: "#000",
  color: "white",
  border: "none",
  padding: "6px 9px",
  borderRadius: "50%",
  cursor: "pointer",
  float: "right"
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  toggleComplete: PropTypes.func.isRequired,
  removeTask: PropTypes.func.isRequired
}

export default TodoItem
