import { useEffect } from 'react'
import {
  Divider,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  ListItemIcon,
  Box,
  CircularProgress,
} from '@mui/material'
import { Link } from 'react-router-dom'
import { useTheme } from '@mui/styles'
import { useDispatch, useSelector } from 'react-redux'
import { useGetGenresQuery } from '../../services/TMDB'
import { selectGenreOrCategory } from '../../features/currentGenreOrCategory'

import genreIcons from '../../assets/genres'
import useStyles from './styles'

const Categories = [
  { label: 'Popular', value: 'popular' },
  { label: 'Top Rated', value: 'top_rated' },
  { label: 'Upcoming', value: 'upcoming' },
]

const redLogo =
  'https://fontmeme.com/permalink/230415/1117ddfeee5d74995e9ab6ca5b029df8.png'
const blueLogo =
  'https://fontmeme.com/permalink/230415/87040a23b9b330d61fbe95078ace7eff.png'

const Sidebar = ({ setMobileOpen }) => {
  const { genreIdOrCategoryName } = useSelector(
    (state) => state.currentGenreOrCategory
  )
  const theme = useTheme()
  const classes = useStyles()
  const { data, isFetching } = useGetGenresQuery()
  const dispatch = useDispatch()

  return (
    <>
      <Link to='/' className={classes.imageLink}>
        <img
          src={theme.palette.mode === 'light' ? blueLogo : redLogo}
          alt='Cineflix Logo'
          className={classes.image}
        />
      </Link>
      <Divider />
      <List>
        <ListSubheader>Categories</ListSubheader>
        {Categories.map(({ label, value }) => (
          <Link key={value} className={classes.links} to='/'>
            <ListItem onClick={() => dispatch(selectGenreOrCategory(value))}>
              <ListItemIcon>
                <img
                  src={genreIcons[label.toLowerCase()]}
                  alt='name'
                  className={classes.genreImage}
                  height={30}
                />
              </ListItemIcon>
              <ListItemText primary={label} />
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      <List>
        <ListSubheader>Genres</ListSubheader>
        {isFetching ? (
          <Box display='flex' justifyContent='center'>
            <CircularProgress />
          </Box>
        ) : (
          data.genres.map(({ name, id }) => (
            <Link key={name} className={classes.links} to='/'>
              <ListItem onClick={() => dispatch(selectGenreOrCategory(id))}>
                <ListItemIcon>
                  <img
                    src={genreIcons[name.toLowerCase()]}
                    alt='name'
                    className={classes.genreImage}
                    height={30}
                  />
                </ListItemIcon>
                <ListItemText primary={name} />
              </ListItem>
            </Link>
          ))
        )}
      </List>
    </>
  )
}

export default Sidebar
