import { useState } from 'react'
import { CircularProgress, Typography, Button, Grid, Box } from '@mui/material'
import { useNavigate, useParams } from 'react-router-dom'
import { ArrowBack } from '@mui/icons-material'

import {
  useGetActorQuery,
  useGetMoviesByActorIdQuery,
} from '../../services/TMDB'
import useStyles from './styles'
import { MovieList, Pagination } from '..'

const Actors = () => {
  const [page, setPage] = useState(1)
  const classes = useStyles()
  const navigate = useNavigate()
  const { id } = useParams()
  const { data, error, isFetching } = useGetActorQuery(id)
  const { data: movies } = useGetMoviesByActorIdQuery({ id, page })

  if (isFetching) {
    return (
      <Box display='flex' alignItems='center' justifyContent='center'>
        <CircularProgress size='8rem' />
      </Box>
    )
  }

  if (error) {
    return (
      <Box display='flex' alignItems='center' justifyContent='center'>
        <Button
          startIcon={<ArrowBack />}
          onClick={() => navigate(-1)}
          color='primary'
        >
          Go back
        </Button>
      </Box>
    )
  }

  return (
    <>
      <Grid container spacing={3}>
        <Grid item lg={5} xl={4}>
          <img
            src={`https://image.tmdb.org/t/p/w780/${data?.profile_path}`}
            alt={data?.name}
            className={classes.image}
          />
        </Grid>
        <Grid item container direction='column' lg={7} xl={8}>
          <Typography variant='h2' gutterBottom>
            {data?.name}
          </Typography>
          <Typography variant='h5' gutterBottom>
            Born: {new Date(data?.birthday).toDateString()}
          </Typography>
          <Typography variant='body1' align='justify' paragraph>
            {data?.biography || 'Sorry, no biography yet.'}
          </Typography>
          <Box
            className={classes.btns}
            marginTop='2rem'
            display='flex'
            justifyContent='space-around'
          >
            <Button
              variant='contained'
              color='primary'
              target='_blank'
              href={`https://www.imdb.com/name/${data?.imdb_id}`}
            >
              Imdb
            </Button>
            <Button
              startIcon={<ArrowBack />}
              onClick={() => navigate(-1)}
              color='primary'
            >
              Back
            </Button>
          </Box>
        </Grid>
      </Grid>
      <Box margin='2rem 0'>
        <Typography variant='h2' gutterBottom align='center'>
          Movies
        </Typography>
        {movies && <MovieList movies={movies} numberOfMovies={12} />}
        <Pagination
          currentPage={page}
          setPage={setPage}
          totalPages={movies?.total_pages}
        />
      </Box>
    </>
  )
}

export default Actors
