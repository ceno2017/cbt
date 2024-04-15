function NextQuestion({ dispatch, index, numQuestions }) {
  // if (answer === null) return null;

  if (index < numQuestions - 1)
    return (
      <>
        <button
          className="btn btn-ui"
          onClick={() => dispatch({ type: "nextQuestion" })}
        >
          Next
        </button>
        {index > 0 && (
          <button
            className="btn btn-ux"
            onClick={() => dispatch({ type: "previousQuestion" })}
          >
            Previous
          </button>
        )}
      </>
    );

  if (index === numQuestions - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "finish" })}
      >
        Finished
      </button>
    );
}

export default NextQuestion;
