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
import { useState } from "react"

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


    return (
        <h1>Welcome to exercise 1</h1>
    )
}
