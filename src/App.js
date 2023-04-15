import { CssBaseline } from '@mui/material'
import { Routes, Route } from 'react-router-dom'
import { Movies, MovieInfo, Actors, Navbar, Profile } from './components/index'

function App() {
  return (
    <div>
      <CssBaseline />
      <Navbar />
      <main>
        <Routes>
          <Route exact path='/' element={<Movies />} />
          <Route exact path='/approved' element={<Movies />} />
          <Route exact path='/movie/:id' element={<MovieInfo />} />
          <Route exact path='/actors/:id' element={<Actors />} />
          <Route exact path='/profile/:id' element={<Profile />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
