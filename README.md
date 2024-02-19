## Redux

- Local State (NO REDUX)
  => Home.jsx -> Tweet Component -> Title, description
  => Auth.jsx -> Login.jsx -> name, password
- Cross Component
  => A B C D
- App-wide State
  => Theme Selector

App.jsx
Home.jsx
Profile.jsx Setting.jsx
User.jsx

--

## Redux Core Concepts

- Central State
- Reducer
- Actions

## Context API

GLOBAL_THEME = "";

App.jsx <- GLOBAL_THEME = "light"
B
C
D
E
F <- console.log(GLOBAL_THEME);
