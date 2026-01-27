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

import { useState, useEffect } from 'react'

const BASE_URL = "https://jsonplaceholder.typicode.com/todos"

export default function Exercise1() {
    // define the state I'll need
    // - loading, errors, todo items
    // useEffect to fetch the data
    // - GET request
    // - Only trigger on initial render
    // HTML
    // - render loaded data 
    // -- list of items with a checkbox input
    // -- onClick PATCH request when toggling the checkbox as done/not done
    const [error, setError] = useState(null)
    const [todos, setTodos] = useState(null)
    const isLoading = todos === null && error === null

    useEffect(() => {
        let ignore = false;

        (async () => {
            try {
                const response = await fetch(BASE_URL+'?_limit=10')
                if (!response.ok) {
                    throw new Error(`HTTP error: ${response.status}`)
                }
                const data = await response.json()
                console.log(data)
                if (!ignore) setTodos(data)
            } catch (err) {
                if (!ignore) setError(err)
            }
        })();

        return () => {ignore = true} // cleanup function
    }, []);

    async function handleToggle(item) {

    }

    if (isLoading) {
        return <>Loading...</>
    }

    if (error) {
        return <>Error: {error.message}</>
    }

    return (
        <>
            <h1>Welcome to exercise 1</h1>
            <ul style={{listStyle:'none', padding:0, margin:0, textAlign:'left'}}>
                {todos.map(item => <li key={item.id}> <input type='checkbox' onChange={handleToggle(item)} checked={item.completed}/>{item.title}</li>)}
            </ul>
        </>
    )
}
