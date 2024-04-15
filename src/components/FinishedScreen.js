function FinishedScreen({ wonPoints, totalPoints, highScore, dispatch }) {
  const percentage = (wonPoints / totalPoints) * 100;

  let emoji;
  if (percentage === 100) emoji = "🥇";
  if (percentage >= 80 && percentage < 100) emoji = "🥇";
  if (percentage >= 50 && percentage < 80) emoji = "😇";
  if (percentage >= 0 && percentage < 50) emoji = "😟";
  if (percentage === 0) emoji = "😁";

  return (
    <>
      <p className="result">
        <span>{emoji}</span>You scored <strong>{wonPoints}</strong> out of{" "}
        {totalPoints}, which is {Math.ceil(percentage)}%
      </p>
      <p className="highscore">High Score: {highScore}</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart Quiz
      </button>
    </>
  );
}

export default FinishedScreen;
