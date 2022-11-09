import {useState} from 'react'

function Input() {
    const [todo, setTodo] =useState('');
    
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
        }
      }

    return (
        <div>
            <input name="todo" value={todo} onKeyDown={handleKeyDown} onChange={(event) => setTodo(event.target.value)}  />
        </div>
    )
}

export default Input