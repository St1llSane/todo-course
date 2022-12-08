import { useState } from 'react'
import styles from './Todo.module.css'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

function Todo() {
  const [todos, setTodos] = useState([])

  const addTodosHandler = (text) => {
    setTodos([...todos, text])
  }

  const deleteTodoHandler = (index) => {
    setTodos(todos.filter((_, i) => i !== index))
  }

  return (
    <div className={styles.todo}>
      <TodoForm addTodo={addTodosHandler} />
      <TodoList todos={todos} deleteTodo={deleteTodoHandler} />
    </div>
  )
}

export default Todo
