// src/components/Leaderboard.js
import React from 'react';

const Leaderboard = ({ scores }) => {
  return (
    <div>
      <h2>Leaderboard</h2>
      <ul>
        {scores.map((score, index) => (
          <li key={index}>{score.name}: {score.time}s</li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;
