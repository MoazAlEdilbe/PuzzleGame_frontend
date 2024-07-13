import { useState, useEffect } from 'react';
import styles from '../styles/PuzzleGrid.module.css';

export default function Puzzle({ data, onSolve }) {
  const [grid, setGrid] = useState(null);
  const [selectedElement, setSelectedElement] = useState('');
  const elements = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').slice(0, grid?.length);

  const handleCellClick = (rowIndex, colIndex) => {
    if (selectedElement) {
      const newGrid = grid?.map((row, rIdx) =>
        row.map((cell, cIdx) =>
          rIdx === rowIndex && cIdx === colIndex ? selectedElement : cell
        )
      );
      setGrid(newGrid);
    }
  };

  const handleElementSelect = (element) => {
    setSelectedElement(element);
  };

  const checkErrors = () => {
    const errors = [];
    for (let row = 0; row < grid?.length; row++) {
      for (let col = 0; col < grid[row].length; col++) {
        const cellValue = grid[row][col];
        if (cellValue) {
          if (grid[row].filter(value => value === cellValue).length > 1) {
            errors.push({ row, col });
          }
          if (grid?.map(row => row[col]).filter(value => value === cellValue).length > 1) {
            errors.push({ row, col });
          }
        }
      }
    }
    return errors;
  };

  const isSolved = () => {
    const errors = checkErrors();
    return errors.length === 0 && grid?.every(row => row.every(cell => cell));
  };

  useEffect(() => {
    console.log(data);
    const rows = data.split('\n').map(row => row.split(''));
    setGrid(rows);
  }, [data]);


  useEffect(() => {
    if (isSolved()) {
      onSolve();
    }
  }, [grid]);

  const errors = checkErrors();

  return (
    <div>
      <div className={styles.elements}>
        {elements.map((element, index) => (
          <button
            key={index}
            className={`${styles.element} ${element === selectedElement ? styles.selected : ''}`}
            onClick={() => handleElementSelect(element)}
          >
            {element}
          </button>
        ))}
      </div>
      <div className={styles.grid}>
        {grid?.map((row, rowIndex) => (
          <div key={rowIndex} className={styles.row}>
            {row.map((cell, cellIndex) => {
              const isError = errors.some(error => error.row === rowIndex && error.col === cellIndex);
              return (
                <div
                  key={cellIndex}
                  className={`${styles.cell} ${isError ? styles.error : ''}`}
                  onClick={() => handleCellClick(rowIndex, cellIndex)}
                >
                  {cell}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
