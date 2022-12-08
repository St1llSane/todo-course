import styles from './TodoList.module.css'
import ToDoItem from './ToDoItem'

function TodoList({ todos, deleteTodo }) {
  return (
    <ul className={styles.todoList}>
      {!todos.length && <h2>No ToDo's</h2>}
      {todos.map((todo, index) => (
        <ToDoItem
          todo={todo}
          key={index}
          index={index}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  )
}

export default TodoList
