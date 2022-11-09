import {useState} from 'react'
import Input from './Input';
import List from './List'

function Todo() {
  const [todos, setTodos] = useState([]);
  return (
    <div>
      <Input addTodo={setTodos} todos={todos} />
      <List todos={todos}/>
    </div>
  )
}

export default Todo;