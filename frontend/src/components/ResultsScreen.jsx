export default function ResultsScreen({ results, section, onRestart, onNext }) {
  const { score, total, percentage, message } = results

  return (
    <div className="results">
      <h2>{section?.title} Voltooid!</h2>

      <div className="score-circle">{score}/{total}</div>
      <p className="score-percentage">{percentage}%</p>
      <p className="score-message">{message}</p>

      <div className="results-actions">
        <button className="btn-restart" onClick={onRestart}>
          Opnieuw spelen
        </button>
        <button className="btn-next-section" onClick={onNext}>
          {section?.nextSectionId ? 'Volgende sectie →' : 'Bekijk eindresultaat →'}
        </button>
      </div>
    </div>
  )
}
