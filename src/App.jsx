import './App.css'
import { Routes, Route } from 'react-router'
import Home from './components/Home'
import ExerciseWrapper from './components/ExerciseWrapper'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="exercises">
        <Route path=":exerciseId" element={<ExerciseWrapper />} />
      </Route>
    </Routes>
  )
}

export default App
