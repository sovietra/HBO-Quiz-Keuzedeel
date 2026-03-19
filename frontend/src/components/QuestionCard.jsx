const LABELS = ['A', 'B', 'C', 'D']

export default function QuestionCard({ question, selectedIndex, answered, onAnswer, onNext, isLast }) {
  const correct = question.correctIndex

  function getState(i) {
    if (!answered) return 'idle'
    if (i === correct) return 'correct'
    if (i === selectedIndex) return 'wrong'
    return 'idle'
  }

  return (
    <div
      className="question-card"
      style={{
        backgroundImage: `linear-gradient(rgba(15,15,15,0.74), rgba(15,15,15,0.9)), url(/images/${question.imagePath})`
      }}
    >
      <h2 className="question-text">{question.text}</h2>

      <div className="answers-grid">
        {question.answers.map((answer, i) => {
          const state = getState(i)
          return (
            <button
              key={i}
              className={`answer-btn${state !== 'idle' ? ' ' + state : ''}`}
              disabled={answered}
              onClick={() => onAnswer(i)}
            >
              <span className="answer-label">{LABELS[i]}</span>
              {answer}
            </button>
          )
        })}
      </div>

      {answered && (
        <div className={`feedback ${selectedIndex === correct ? 'feedback-correct' : 'feedback-wrong'}`}>
          {selectedIndex === correct
            ? '✓ Correct!'
            : `✗ Fout! Het juiste antwoord is: ${LABELS[correct]}: ${question.answers[correct]}`}
        </div>
      )}

      {answered && (
        <button className="btn-next" onClick={onNext}>
          {isLast ? 'Bekijk resultaat →' : 'Volgende vraag →'}
        </button>
      )}
    </div>
  )
}
