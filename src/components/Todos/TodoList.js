import styles from './TodoList.module.css'
import ToDoItem from './ToDoItem'

function TodoList({ todos, deleteTodo, toggleTodo }) {
  return (
    <ul className={styles.todoList}>
      {!todos.length && <h2>No ToDo's</h2>}
      {todos.map((todo) => (
        <ToDoItem
          todo={todo}
          key={todo.id}
          deleteTodo={deleteTodo}
					toggleTodo={toggleTodo}
        />
      ))}
    </ul>
  )
}

export default TodoList
