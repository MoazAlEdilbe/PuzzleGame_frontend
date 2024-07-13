import { addScore } from '@/utils/services/scores';
import { useState } from 'react';

const ScoreSubmission = ({ userId, puzzleId, value, onScoreSubmitted }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = async () => {
    try {
      await addScore({ user: userId, puzzle: puzzleId, value });
      setMessage('Score submitted successfully!');
      onScoreSubmitted();
    } catch (error) {
      setMessage('Failed to submit score');
      console.error(error);
    }
  };

  return (
    <div>
      <button onClick={handleSubmit}>Submit Score</button>
      <p>{message}</p>
    </div>
  );
};

export default ScoreSubmission;
