import { useState } from 'react'
import Button from '../UI/Button'
import styles from './TodoForm.module.css'

function TodoForm({ addTodo }) {
  const [text, setText] = useState('')

  const onSubmitHandler = (e) => {
    e.preventDefault()
    addTodo(text)
    setText('')
  }

  return (
    <form className={styles.todoForm} onSubmit={onSubmitHandler} action="#">
      <input
        className={styles.todoInput}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter new ToDo"
      />
      <Button className={styles.todoButton} title="Submit">
        Create
      </Button>
    </form>
  )
}

export default TodoForm
