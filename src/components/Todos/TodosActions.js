import { RiDeleteBin2Line, RiRefreshLine } from 'react-icons/ri'
import Button from '../UI/Button'
import styles from './TodosActions.module.css'

function TodosActions({
  resetTodos,
  deleteCompletedTodos,
  completedTodosExist,
}) {
  return (
    <>
      <div className={styles.button}>
        <Button title="Reset Todos" onClick={resetTodos}>
          <RiRefreshLine />
        </Button>
      </div>
      <div className={styles.button}>
        <Button
          title="Reset Completed Todos"
          onClick={deleteCompletedTodos}
          disabled={!completedTodosExist}
        >
          <RiDeleteBin2Line className={styles.button} />
        </Button>
      </div>
    </>
  )
}

export default TodosActions
