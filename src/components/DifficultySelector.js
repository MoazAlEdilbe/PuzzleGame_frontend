const DifficultySelector = ({ difficulty, onSelect }) => {
    return (
        <div>
            <label>
                Difficulty:
                <select value={difficulty} onChange={onSelect}>
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                </select>
            </label>
        </div>
    );
};

export default DifficultySelector;
