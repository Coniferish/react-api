import { exercises } from '../exercises'
import { useParams } from 'react-router'

export default function ExerciseWrapper(){
    const { exerciseId } = useParams()
    const exercise = exercises.find(ex => ex.id === exerciseId)
    const ExerciseComponent = exercise.component

    return <ExerciseComponent />
}