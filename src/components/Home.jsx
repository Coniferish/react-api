import { exercises } from "../exercises"

export default function Home(){
    return (
        <>
            <h1>Welcome!</h1>
            {exercises.map(
                exercise => <h3 key={exercise.id}>{exercise.title}</h3>
            )}
        </>
    )
}
