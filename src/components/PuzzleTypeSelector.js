const PuzzleTypeSelector = ({ selectedType, onSelect }) => {
    return (
      <div>
        <label htmlFor="puzzle-type">Choose Puzzle Type:</label>
        <select
          id="puzzle-type"
          value={selectedType}
          onChange={(e) => onSelect(e.target.value)}
        >
          <option value="sudoku">Sudoku</option>
          <option value="nonogram">Nonogram</option>
        </select>
      </div>
    );
  };
  
  export default PuzzleTypeSelector;
  