// src/pages/game.js
import React, { useState } from 'react';
import Timer from '../components/Timer';
import { useQuery } from 'react-query';
import { generatePuzzle } from '@/utils/services/puzzle';
import Puzzle from '../components/PuzzleGrid';


const Game = () => {
    const [difficulty, setDifficulty] = useState('easy');
    const [solved, setSolved] = useState(false);

    const { data: puzzle, isLoading, refetch } = useQuery(['puzzle', difficulty], () => generatePuzzle(difficulty), {
        onSuccess: () => {
            setSolved(false);
        }
    });

    const handleSolve = () => {
        setSolved(true);
        // Handle puzzle solved logic, e.g., save the score to the backend
    };

    const handleDifficultyChange = (event) => {
        setDifficulty(event.target.value);
        refetch();
    };

    const handleTimeUp = () => {
        if (!solved) {
            alert('Time is up!');
        }
    };

    if (isLoading || !puzzle) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Puzzle Game</h1>
            <div>
                <label>
                    Difficulty:
                    <select value={difficulty} onChange={handleDifficultyChange}>
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                    </select>
                </label>
            </div>
            <div>
                {solved ? (
                    <p>Congratulations! You solved the puzzle!</p>
                ) : (
                    <>
                        <Timer initialTime={puzzle.time} onTimeUp={handleTimeUp} key={difficulty} />
                        <Puzzle data={puzzle.data} onSolve={handleSolve} />
                    </>
                )}
            </div>
        </div>
    );
};

export default Game;
