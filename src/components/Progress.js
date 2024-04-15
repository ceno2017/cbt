function Progress({
  index,
  numQuestions,
  wonPoints,
  totalPoints,
  answer,
  answersArray,
}) {
  return (
    <header className="progress">
      <progress max={numQuestions} value={index + Number(answer !== null)} />
      <p>
        Index: {index} ... Question <strong>{index + 1}</strong>/ {numQuestions}
        <br></br>
        Attempted Question: {answersArray?.length > 0 ? answersArray.length : 0}
      </p>
      <p>
        {wonPoints} out of {totalPoints}
      </p>
    </header>
  );
}

export default Progress;
