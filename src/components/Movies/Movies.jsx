import { useState, useEffect } from 'react'
import { Box, CircularProgress, useMediaQuery, Typography } from '@mui/material'
import { useSelector } from 'react-redux'
import { useGetMoviesQuery } from '../../services/TMDB'
import { selectGenreOrCategory } from '../../features/currentGenreOrCategory'
import { MovieList } from '..'

const Movies = () => {
  const [page, setPage] = useState(1)
  const { genreIdOrCategoryName, searchQuery } = useSelector(
    (state) => state.currentGenreOrCategory
  )
  const { data, error, isFetching } = useGetMoviesQuery({
    genreIdOrCategoryName,
    page,
    searchQuery,
  })

  if (isFetching) {
    return (
      <Box display='flex' justifyContent='center'>
        <CircularProgress size='4rem' />
      </Box>
    )
  }

  if (!data.results.length) {
    return (
      <Box display='flex' alignItems='center' mt='20px'>
        <Typography variant='h4'>
          No movies that match that name.
          <br />
          Please search fro something else.
        </Typography>
      </Box>
    )
  }

  if (error) return 'An error has occurred.'

  return (
    <div>
      <MovieList movies={data} />
    </div>
  )
}

export default Movies
