/**  
 * GET endpoint: https://jsonplaceholder.typicode.com/todos?_limit=10
 * Todo item endpoint: https://jsonplaceholder.typicode.com/todos/:id
 * Expected body: { userId: number, id: number, title: string , completed: boolean}
 *
 *  Challenge 1: 
 *  Using HTTP requests to the API endpoint, get the first 10 todos and 
 *  render them as a list with checkboxes that when checked send a request
 *  indicating the todo item was completed.
 */
import { useState, useEffect } from "react"

const BASE_URL = "https://jsonplaceholder.typicode.com/todos"

export default function Exercise1() {
    /*
    1) declare state
    2) render different states (loading and error)
    3) render loaded state
        a) fetch the data on initial render (useEffect)
        b) set the todos state with the data
        c) render the list of todo items with checkboxes
    4) interaction
        a) handle onChange for clicking the checkbox
            i) PATCH request to make the change
                1) optimistic pattern
    */
   const [todos, setTodos] = useState(null)
   const [error, setError] = useState(null)
   const isLoading = todos === null && error === null

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal

        async function fetchTodos() {
            try {
                const response = await fetch(BASE_URL + "?_limit=10", { signal })
                if (!response.ok) {
                    throw new Error(`HTTP error: ${response.status}`)
                }
                const data = await response.json()
                setTodos(data)
                console.log(data)
            } catch (error) {
                if (error.name !== 'AbortError') {
                    setError(error)
                }
            }
        }
        fetchTodos()

        return () => controller.abort()
    }, []);

   const handleToggle = async (todoId) => {
        const todo = todos.find(t => t.id === todoId)

        setTodos(todos =>
            todos.map(t =>
                t.id === todo.id ? {...t, completed: !t.completed } : t
        ))
        try {
            const response = await fetch(BASE_URL + '/' + todo.id, {
                method:'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({completed: !todo.completed})
            })
            if (!response.ok) {
                throw new Error(`HTTP error: ${response.status}`)
            }
        } catch (error) {
            setTodos(todos =>
                todos.map(t =>
                    t.id === todo.id ? {...t, completed: !t.completed } : t
            ))
            setError(error)
        }
    }

   if (isLoading) {
    return "Loading..."
   }

   if (error) {
    return `Error: ${error}`
   }

    return (
        <>
        <h1>Welcome to exercise 1</h1>
        <ul style={{
            listStyle:'none',
            padding:0,
            textAlign:'left'
        }}>
            {todos.map(t => 
                <li key={t.id}>
                    <input type='checkbox' checked={t.completed} data-todo-id={t.id} onChange={() => handleToggle(t.id)}/>
                    {t.title}
                </li>
            )}
        </ul>
        </>
    )
}
