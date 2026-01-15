import { exercises } from '../exercises'
import { useParams, Link } from 'react-router'

export default function ExerciseWrapper(){
    const { exerciseId } = useParams()
    const exercise = exercises.find(ex => ex.id === exerciseId)

    if (!exercise) {
        return (
        <>
            <header>
                <Link to="/">Home</Link>
            </header>
            <div>
                <h1>Exercise not found</h1>
                <p>The exercise "{exerciseId}" doesn't exist.</p>
                <Link to="/">Back to home</Link>
            </div>
        </>
        )
    }

    const ExerciseComponent = exercise.component

    return (
        <>
            <header>
                <Link to="/">Home</Link>
            </header>
            <div style={{ padding: '2rem', placeItems: 'center'}}>
                <ExerciseComponent />
            </div>
        </>
    )
}