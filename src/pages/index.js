import React from 'react';
import Link from 'next/link';

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Puzzle Game</h1>
      <Link href="/game">Start Game</Link>
    </div>
  );
};

export default Home;
