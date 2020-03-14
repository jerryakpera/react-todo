import React from "react"
import TodoItem from "../TodoItem/TodoItem"
import PropTypes from "prop-types"

class Todos extends React.Component {
  render() {
    return this.props.todos.map(todo => (
      <TodoItem todo={todo} key={todo.id} toggleComplete={this.props.toggleComplete} removeTask={this.props.removeTask} />
    ))
  }
}

Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  toggleComplete: PropTypes.func.isRequired,
  removeTask: PropTypes.func.isRequired
}

export default Todos