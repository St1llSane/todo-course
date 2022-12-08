import { RiTodoFill } from "react-icons/ri";
import styles from './ToDoItem.module.css'

function ToDoItem({ todo, index, deleteTodo }) {
  return (
    <li className={styles.todoItem} onDoubleClick={() => deleteTodo(index)}>
			<RiTodoFill className={styles.TodoIcon} />
      <p className={styles.todoItemContent}>{todo}</p>
    </li>
  )
}

export default ToDoItem
