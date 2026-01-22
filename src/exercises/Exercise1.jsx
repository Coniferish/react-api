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
    // - render loading, error, loaded data 
    // -- list of items with a checkbox input
    // -- onClick PATCH request when toggling the checkbox as done/not done
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)
    const [todos, setTodos] = useState(null)

    useEffect(() => {
        const controller = new AbortController()

        fetch(BASE_URL+'?_limit=10', {signal: controller.signal})
        .then(response => {
            if (!response.ok) {                         
                throw new Error(`HTTP error: ${response.status}`)
            }
            return response.json()})
        .then(data => {
            setTodos(data)
            setIsLoading(false)
        })
        .catch(error => {
            if (error.name !== 'AbortError') {
                setError(error)
                setIsLoading(false)
            }
        })

        return () => controller.abort()
    }, []);

    function handleClick(item) {
        const prevTodos = todos.map(t => ({...t}))

        setTodos(prevTodos => prevTodos.map(t => {
                return t.id === item.id ? {...t, completed: !t.completed} : t
            })
        )

        fetch(BASE_URL+`/${item.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ completed: !item.completed })
        })
        .then( response => {
            if (!response.ok) {
                throw new Error(`HTTP error: ${response.status}`)
            }
            console.log(response.status)
        })
        .catch(error => {
            setTodos(prevTodos)
            setError(error)
        })
    }

    if (isLoading) return <>Loading...</>
    
    if (error) return <>Error: {error.message}</>

    return (
        <>
            <h1>Welcome to exercise 1</h1>
            <ul style={{listStyle:'none', padding:0, margin:0, textAlign:'left'}}>
                {todos.map(item => <li key={item.id}> <input type='checkbox' checked={item.completed} onChange={() => handleClick(item)}/>{item.title}</li>)}
            </ul>
        </>
    )
}
