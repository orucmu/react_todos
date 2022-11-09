import { useState, useEffect } from 'react'

function Input({ todos, addTodo }) {
    const [input, setInput] = useState('');

    useEffect(() => {
        setInput('')
    }, [todos])

    const onChangeInput = (e) => {
        setInput([e.target.name] = e.target.value)
    }
    const handleKeyDown = (event) => {
        if (input === '') {
            return false;
        }
        if (event.key === 'Enter') {
            addTodo([...todos, input])
        }
    }

    return (
        <div>
            <input placeholder='What needs to be done?' name="input" value={input} onChange={onChangeInput} onKeyDown={handleKeyDown} />
        </div>
    )
}

export default Input