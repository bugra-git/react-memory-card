# Pokémon Memory Card

A memory card game built with React and Vite as part of The Odin Project's React curriculum.

The objective is simple: click each Pokémon only once. Every successful click increases your score and shuffles the cards. Click a Pokémon you've already selected and the game resets.

## Live Demo

[Live Demo](https://react-memory-card-inky.vercel.app/)

## Screenshot

Add a screenshot or GIF here once deployed.

## Features

- Fetches Generation I Pokémon data from the PokéAPI
- Dynamically generates a deck of Pokémon cards
- Randomizes card positions after every successful click
- Tracks current score and high score
- Win condition after selecting all unique cards
- Pokémon type badges with type-specific styling
- Custom Pokémon-themed typography
- Loading animation while data is being fetched

## Built With

- React
- Vite
- JavaScript (ES6+)
- CSS3
- PokéAPI

## What I Learned

This project helped me practice:

- React functional components
- State management with `useState`
- Side effects and data fetching with `useEffect`
- Working with asynchronous JavaScript
- Passing data through props
- Rendering lists in React
- Event handling
- Component-based application design

## Project Structure

```text
src/
├── components/
│   ├── App.jsx
│   ├── Game.jsx
│   └── Card.jsx
├── styles/
│   ├── index.css
│   ├── App.css
│   ├── Game.css
│   └── Card.css
└── main.jsx
```

## Installation

Clone the repository:

```bash
git clone https://github.com/bugra-git/react-memory-card.git
```

Navigate to the project directory:

```bash
cd react-memory-card
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

## Future Improvements

This project is considered feature-complete for the current stage of The Odin Project curriculum, but there are several improvements planned for future revisions:

- Improve responsiveness for tablets and mobile devices
- Replace browser `alert()` messages with accessible dialog/modal components
- Add animations for card shuffling and game events
- Improve loading and error handling UI
- Add difficulty settings with different deck sizes
- Add sound effects and optional background music
- Store high scores using local storage
- Improve accessibility and keyboard navigation
- Add game statistics such as win rate and best streak

## Acknowledgements

- [The Odin Project](https://www.theodinproject.com/)
- [PokéAPI](https://pokeapi.co/)
- Nintendo, Game Freak, and The Pokémon Company for Pokémon assets and character designs

## License

This project is licensed under the MIT License. See the LICENSE file for details.