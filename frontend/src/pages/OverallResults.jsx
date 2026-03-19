import { useNavigate } from 'react-router-dom'

const SECTIONS = [
  { id: '1', fallbackTitle: 'Software Engineering' },
  { id: '2', fallbackTitle: 'Beveiliging' },
  { id: '3', fallbackTitle: 'C#' },
]

function getRing(percentage) {
  const radius = 54
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (percentage / 100) * circumference
  return { circumference, offset }
}

function getColor(percentage) {
  if (percentage >= 75) return '#2ed573'
  if (percentage >= 50) return '#eca34f'
  return '#ff4757'
}

function getMessage(percentage) {
  if (percentage >= 75) return 'Uitstekend! Je beheerst de stof goed.'
  if (percentage >= 50) return 'Goed gedaan! Nog een beetje oefenen en je bent er.'
  return 'Blijf oefenen — je komt er wel!'
}

export default function OverallResults() {
  const navigate = useNavigate()
  const scores = JSON.parse(localStorage.getItem('hbo-quiz-scores') || '{}')

  const sections = SECTIONS.map(s => ({
    id: s.id,
    title: scores[s.id]?.title?.split(': ')[1] ?? s.fallbackTitle,
    score: scores[s.id]?.score ?? 0,
    total: scores[s.id]?.total ?? 6,
    percentage: scores[s.id]?.percentage ?? 0,
    done: !!scores[s.id],
  }))

  const totalScore = sections.reduce((a, s) => a + s.score, 0)
  const totalMax   = sections.reduce((a, s) => a + s.total, 0)
  const totalPct   = Math.round((totalScore / totalMax) * 100)
  const { circumference, offset } = getRing(totalPct)
  const ringColor = getColor(totalPct)

  function handleRestart() {
    localStorage.removeItem('hbo-quiz-scores')
    navigate('/sectie/1')
  }

  return (
    <div className="page">
      <img src="/images/background.png" className="page-bg" alt="" />
      <img src="/images/foreground.png" className="page-fg" alt="" />
      <div className="page-vignette" />

      <div className="quiz-panel overall-panel">
        <div className="quiz-container">
          <div className="overall-results">

            <p className="hero-eyebrow" style={{ marginBottom: '0.5rem' }}>Quiz voltooid</p>
            <h2 className="overall-title">Eindresultaat</h2>

            {/* Big score ring */}
            <div className="overall-ring-wrap">
              <svg viewBox="0 0 128 128" className="overall-ring">
                <circle cx="64" cy="64" r="54" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="8" />
                <circle
                  cx="64" cy="64" r="54"
                  fill="none"
                  stroke={ringColor}
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeDasharray={circumference}
                  strokeDashoffset={offset}
                  transform="rotate(-90 64 64)"
                  style={{ transition: 'stroke-dashoffset 1s cubic-bezier(0.4,0,0.2,1)', filter: `drop-shadow(0 0 8px ${ringColor}88)` }}
                />
              </svg>
              <div className="overall-ring-text">
                <span className="overall-ring-score">{totalScore}/{totalMax}</span>
                <span className="overall-ring-pct">{totalPct}%</span>
              </div>
            </div>

            <p className="overall-message">{getMessage(totalPct)}</p>

            {/* Per-section breakdown */}
            <div className="section-cards">
              {sections.map(s => (
                <div key={s.id} className={`section-card ${!s.done ? 'section-card--incomplete' : ''}`}>
                  <div className="section-card-header">
                    <span className="section-card-num">Sectie {s.id}</span>
                    {s.done
                      ? <span className="section-card-badge" style={{ background: `${getColor(s.percentage)}22`, color: getColor(s.percentage), borderColor: `${getColor(s.percentage)}44` }}>{s.percentage}%</span>
                      : <span className="section-card-badge incomplete">Niet gemaakt</span>
                    }
                  </div>
                  <p className="section-card-title">{s.title}</p>
                  <div className="section-card-bar">
                    <div
                      className="section-card-fill"
                      style={{ width: `${s.percentage}%`, background: getColor(s.percentage) }}
                    />
                  </div>
                  <p className="section-card-score">{s.score} / {s.total} vragen goed</p>
                </div>
              ))}
            </div>

            <div className="results-actions" style={{ marginTop: '2.5rem' }}>
              <button className="btn-restart" onClick={handleRestart}>
                Opnieuw beginnen
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
