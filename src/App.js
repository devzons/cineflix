// import { useRef } from 'react'
import { CssBaseline } from '@mui/material'
import { Routes, Route } from 'react-router-dom'

import { Movies, MovieInfo, Actors, Navbar, Profile } from './components'
import useStyles from './styles'
// import useAlan from './components/Alan'

const App = () => {
  const classes = useStyles()
  // const alanBtnContainer = useRef()
  // useAlan()

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Navbar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Routes>
          <Route exact path='/' element={<Movies />} />
          <Route exact path='/approved' element={<Movies />} />
          <Route exact path='/actors/:id' element={<Actors />} />
          <Route exact path='/movie/:id' element={<MovieInfo />} />
          <Route exact path='/profile/:id' element={<Profile />} />
        </Routes>
      </main>
      {/* <div ref={alanBtnContainer} /> */}
    </div>
  )
}

export default App
