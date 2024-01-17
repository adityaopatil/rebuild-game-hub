import useGames from "../hooks/useGames";

const GameGrid = () => {
  const { games, error } = useGames();
  return (
    <>
      {error && <p>{error}</p>}
      <ul>
        {games.map((g) => (
          <li key={g.id}>{g.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
