# PuzzleGame Frontend

This project is a web-based puzzle game frontend built with Next.js. Users can solve puzzles, submit their scores, and view the leaderboard.

## Features

- **Dynamic Puzzle Generation**: Generate puzzles based on type and difficulty.
- **Countdown Timer**: Challenge users with a timer.
- **Score Submission**: Submit and view scores.
- **Leaderboard**: Display top scores.

## Project Structure

```
components/
  DifficultySelector.js
  Leaderboard.js
  PuzzleGrid.js
  PuzzleTypeSelector.js
  ScoreSubmission.js
  Timer.js
pages/
  _app.js
  game.js
  index.js
styles/
  globals.css
  PuzzleGrid.module.css
utils/
  endpoints
    endpoints.js
  services/
    puzzles.js
    scores.js
README.md
package.json
```

## Setup and Installation

1. **Clone the Repository**:

   ```sh
   git clone https://github.com/MoazAlEdilbe/PuzzleGame_frontend.git
   cd PuzzleGame_frontend
   ```

2. **Install Dependencies**:

   ```sh
   npm install
   ```

3. **Configure Environment Variables**:

   Create a `.env.local` file:

   ```env
   NEXT_PUBLIC_API_BASE_URL=http://localhost:8080
   ```

4. **Run the Application**:

   ```sh
   npm run dev
   ```

## Components Overview

### `PuzzleTypeSelector.js`

- Select the puzzle type.

### `DifficultySelector.js`

- Select the puzzle difficulty.

### `Timer.js`

- Countdown timer.

### `Puzzle.js`

- Display and interact with the puzzle grid.

### `ScoreSubmission.js`

- Submit scores.

### `Leaderboard.js`

- Fetch and display the leaderboard.

## API Endpoints

### Puzzles

- **Generate Puzzle**: `GET /puzzles/generate?type=<type>&difficulty=<difficulty>`

### Scores

- **Get Leaderboard**: `GET /score/leaderboard`
- **Add Score**: `POST /score`
- **Get Scores by User**: `GET /score/user/:userId`
.
.
.
.

---

This README provides an overview of the project, setup instructions, a summary of the components, and the API endpoints used.