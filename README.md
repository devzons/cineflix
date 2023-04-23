# Cineflex - Devzons

## Install Dependencies

```-bash
npm install @mui/material @emotion/react @emotion/styled @mui/icons-material axios @reduxjs/toolkit react-redux react-router-dom @alan-ai/alan-sdk-web
npm install --legacy-peer-deps @mui/styles
```

## Fix issues

### Switch to Routes in react-router-dom

### eslint issue

`ESLINT_NO_DEV_ERRORS=true` in .env
`//eslint-disable-next-line`

### fontmeme.com

- Logo Font: BEBASNEUE
- Font size: 65
- color:
  - Red: #DB202C
  - Blue: #1976d2
- Direct image link

```javascript
const redLogo =
  'https://fontmeme.com/permalink/230415/1117ddfeee5d74995e9ab6ca5b029df8.png'

const blueLogo =
  'https://fontmeme.com/permalink/230415/87040a23b9b330d61fbe95078ace7eff.png'
```

- HTML to embed image on websites/blogs

```html
<a href="https://fontmeme.com/netflix-font/"
  ><img
    src="https://fontmeme.com/permalink/230415/bec117dd14fc8442a2bd8b22bb0b9436.png"
    alt="netflix-font"
    border="0"
/></a>

<a href="https://fontmeme.com/netflix-font/"
  ><img
    src="https://fontmeme.com/permalink/230415/87040a23b9b330d61fbe95078ace7eff.png"
    alt="netflix-font"
    border="0"
/></a>
```

- BB code to embed image in forum posts

```code
[url=https://fontmeme.com/netflix-font/][img]https://fontmeme.com/permalink/230415/f956974c3844ecd5ff42cc85f1e677d9.png[/img][/url]

[url=https://fontmeme.com/netflix-font/][img]https://fontmeme.com/permalink/230415/87040a23b9b330d61fbe95078ace7eff.png[/img][/url]
```

### TMDB API documentation

`https://developers.themoviedb.org/3/getting-started/introduction`

- actor - `/person/{person_id}`

### git push error

```-bash
error: failed to push some refs to 'https://git....'
```

- solution

```-bash
git pull --rebase origin [branch]
```

### react-router-dom v6

`useHistory()` is replaced by `useNavigate()`

## Alan.app

- TMDB Genres

```
const genres = [
  { "id": 28, "name": "Action" },
  { "id": 12, "name": "Adventure" },
  { "id": 16, "name": "Animation" },
  { "id": 35, "name": "Comedy" },
  { "id": 80, "name": "Crime" },
  { "id": 99, "name": "Documentary" },
  { "id": 18, "name": "Drama" },
  { "id": 10751, "name": "Family" },
  { "id": 14, "name": "Fantasy" },
  { "id": 36, "name": "History" },
  { "id": 27, "name": "Horror" },
  { "id": 10402, "name": "Music" },
  { "id": 9648, "name": "Mystery" },
  { "id": 10749, "name": "Romance" },
  { "id": 878, "name": "Science Fiction" },
  { "id": 10770, "name": "TV Movie" },
  { "id": 53, "name": "Thriller" },
  { "id": 10752, "name": "War" },
  { "id": 37, "name": "Western" },
]
```

## Deploy

- create .env.production file
  `DISABLE_ESLINT_PLUGIN=true`

### Live site

[https://cineflex.dimshift.com](https://cineflex.dimshift.com/)
