import { exercises } from "../exercises"
import { Link } from "react-router"

export default function Home(){
    return (
        <>
            <h1>Welcome!</h1>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0  }}>
                {exercises.map(exercise =>
                    <li key={exercise.id}>
                        <Link to={`/exercises/${exercise.id}`}>{exercise.title}</Link>
                    </li>
                )}
            </ul>
        </>
    )
}
