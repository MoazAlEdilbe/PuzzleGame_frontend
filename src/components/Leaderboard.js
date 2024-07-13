import { getLeaderboard } from '@/utils/services/scores';
import { useState, useEffect } from 'react';

const Leaderboard = () => {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    fetchLeaderboard();
  }, []);

  const fetchLeaderboard = async () => {
    try {
      const data = await getLeaderboard();
      setScores(data);
    } catch (error) {
      console.error('Error fetching leaderboard:', error);
    }
  };

  return (
    <div>
      <h2>Leaderboard</h2>
      <ul>
        {scores.map((score, index) => (
          <li key={index}>
            {score.user.username}: {score.value} points ({score.puzzle.type}, {score.puzzle.difficulty})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;
