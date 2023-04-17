# Cineflex - Devzons

## Install Dependencies

```-bash
npm install @mui/material @emotion/react @emotion/styled @mui/icons-material axios @reduxjs/toolkit react-redux react-router-dom
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

### git push error

```-bash
error: failed to push some refs to 'https://git....'
```

- solution

```-bash
git pull --rebase origin [branch]
```
