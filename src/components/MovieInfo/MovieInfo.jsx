import {
  Modal,
  Typography,
  Button,
  ButtonGroup,
  Grid,
  Box,
  CircularProgress,
  useMediaQuery,
  Rating,
} from '@mui/material'
import {
  Movie as MovieIcon,
  Theaters,
  Language,
  PlusOne,
  Favorite,
  FavoriteBorderOutlined,
  Remove,
  Arrow,
} from '@mui/icons-material'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'

import { selectGenreOrCategory } from '../../features/currentGenreOrCategory'
import { useGetMovieQuery } from '../../services/TMDB'
import useStyles from './styles'
import genreIcons from '../../assets/genres'

const MovieInfo = () => {
  const { id } = useParams()
  const { data, isFeching, error } = useGetMovieQuery(id)
  const classes = useStyles()
  const dispatch = useDispatch()

  if (isFeching) {
    return (
      <Box display='flex' justifyContent='center' alignItems='center'>
        <CircularProgress size='8rem' />
      </Box>
    )
  }
  if (error) {
    return (
      <Box display='flex' justifyContent='center' alignItems='center'>
        <Link to='/'>Something had gone wrong - Go back</Link>
      </Box>
    )
  }

  console.log(data)

  return (
    <Grid container className={classes.containerSpaceAround}>
      <Grid item sm={12} lg={4} align='center'>
        <img
          src={`https://image.tmdb.org/t/p/w500/${data?.poster_path}`}
          className={classes.poster}
          alt={data?.title}
        />
      </Grid>
      <Grid item container direction='column' lg={7}>
        <Typography variant='h3' align='center' gutterBottom>
          {data?.title} ({data?.release_date.split('-')[0]})
        </Typography>
        <Typography variant='h5' align='center' gutterBottom>
          {data?.tagline}
        </Typography>
        <Grid item className={classes.containerSpaceAround}>
          <Box display='flex' align='center'>
            <Rating readOnly value={data?.vote_average / 2} />
            <Typography
              gutterBottom
              variant='subtitle1'
              style={{ marginLeft: '10px' }}
            >
              {data?.vote_average} / 10
            </Typography>
          </Box>
          <Typography gutterBottom variant='h6' align='center'>
            {data?.runtime}min
            {/* {data?.spoken_languages.length > 0
              ? `/ ${data?.spoken_languages[2].name}`
              : ''} */}
          </Typography>
        </Grid>
        <Grid item className={classes.genresContainer}>
          {data?.genres?.map((genre) => (
            <Link
              className={classes.links}
              key={genre.name}
              to='/'
              onClick={() => dispatch(selectGenreOrCategory(genre.id))}
            >
              <img
                src={genreIcons[genre.name.toLowerCase()]}
                className={classes.genreImage}
                height={30}
              />
              <Typography color='textPrimary' variant='subtitle1'>
                {genre?.name}
              </Typography>
            </Link>
          ))}
        </Grid>
      </Grid>
    </Grid>
  )
}

export default MovieInfo
