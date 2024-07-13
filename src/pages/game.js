import React, { useState } from 'react';
import Timer from '../components/Timer';
import Puzzle from '../components/PuzzleGrid';
import DifficultySelector from '@/components/DifficultySelector';
import styles from '../styles/PuzzleGrid.module.css';
import PuzzleTypeSelector from '@/components/PuzzleTypeSelector';
import ScoreSubmission from '@/components/ScoreSubmission';
import Leaderboard from '@/components/Leaderboard';


const Game = () => {
    const [difficulty, setDifficulty] = useState('easy');
    const [type, setType] = useState('nonogram');
    const [time, setTime] = useState(120);
    const [timeUp, setTimeUp] = useState(false);
    const [solved, setSolved] = useState(false);
    const [puzzleId, setPuzzleId] = useState(null); // Assume each puzzle has a unique ID
    const [userId] = useState('user123'); // Example user ID
    const [score, setScore] = useState(null);

    const handleDifficultyChange = (event) => {
        setDifficulty(event.target.value);
        refetch();
    };

    const handleTimeUp = () => {
        if (!solved) {
            setTimeUp(true);
            alert('Time is up!');
        }
    };

    const handlePuzzleGenerated = (puzzleTime) => {
        setTime(puzzleTime);
    };

    const handlePuzzleSolved = () => {
        setSolved(true);
        console.log('Puzzle Solved!');
        const endTime = new Date();
        const startTime = endTime - time * 1000;
        const scoreValue = calculateScore(startTime, endTime); // Implement calculateScore based on your logic
        setScore(scoreValue);
    };

    const handleScoreSubmitted = () => {
        console.log('Score Submitted!');
    };

    const calculateScore = (startTime, endTime) => {
        // Example scoring logic based on time taken
        const timeTaken = (endTime - startTime) / 1000; // Time in seconds
        return Math.max(0, 1000 - timeTaken); // Example: score decreases with time taken
    };


    return (
        <div className={styles.container}>
            <h1>Puzzle Game</h1>
            <PuzzleTypeSelector selectedType={type} onSelect={setType} />
            <DifficultySelector difficulty={difficulty} onSelect={handleDifficultyChange} />
            <Timer initialTime={time} onTimeUp={handleTimeUp} solved={solved} />
            {!timeUp && <Puzzle type={type} difficulty={difficulty} onPuzzleGenerated={handlePuzzleGenerated} onSolve={handlePuzzleSolved} />}
            {solved && <p>Congratulations! You solved the puzzle!</p>}
            {timeUp && score !== null && (
                <ScoreSubmission
                    userId={userId}
                    puzzleId={puzzleId}
                    value={score}
                    onScoreSubmitted={handleScoreSubmitted}
                />
            )}
            <Leaderboard />

        </div>
    );
};

export default Game;
