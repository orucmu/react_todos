import React from 'react'

function List({todos}) {
    return (
        <div>
            <ul>
                {todos.map((todo, i) => (
                    <li key={i}>{todo}</li>
                ))}
            </ul>
        </div>
    )
}

export default List