import { RiDeleteBin2Line, RiTodoFill } from 'react-icons/ri'
import { FaCheck } from 'react-icons/fa'
import styles from './ToDoItem.module.css'

function ToDoItem({ todo, deleteTodo, toggleTodo }) {
  return (
    <li
      className={`${styles.todoItem} ${
        todo.isCompleted ? styles.completedTodo : ''
      }`}
    >
      <div className={styles.todoItemLeft}>
        <RiTodoFill className={styles.todoIcon} />
        <p className={styles.todoItemContent}>{todo.text}</p>
      </div>
      <div className={styles.todoItemRight}>
        <RiDeleteBin2Line
          className={styles.deleteIcon}
          onClick={() => deleteTodo(todo.id)}
        />
        <FaCheck
          className={styles.checkIcon}
          onClick={() => toggleTodo(todo.id)}
        />
      </div>
    </li>
  )
}

export default ToDoItem
