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

    return (
        <h1>Welcome to exercise 1</h1>
    )
}
