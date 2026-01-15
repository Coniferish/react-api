// I do not like this set up of manually maintaining a list of exercises, but it's the simple solution.
// -- Don't forget to keep this updated and matching the exercises in this folder --

import Exercise1 from "./Exercise1"
import Exercise2 from "./Exercise2"

export const exercises = [
    // { id: folder-name, ... , component: ExportedComponent }
    { id: 'Exercise1', title: 'Basic Fetch', component: Exercise1 },
    { id: 'Exericse2', title: 'Basic Fetch2', component: Exercise2 },
]
