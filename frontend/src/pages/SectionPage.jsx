import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Quiz from '../components/Quiz'
import ResultsScreen from '../components/ResultsScreen'
import { fetchSections, fetchQuestions, submitAnswers } from '../api/quizApi'

export default function SectionPage() {
  const { id } = useParams()
  const navigate = useNavigate()

  const [section, setSection]     = useState(null)
  const [questions, setQuestions] = useState([])
  const [phase, setPhase]         = useState('loading')
  const [results, setResults]     = useState(null)
  const [error, setError]         = useState(null)

  useEffect(() => {
    setPhase('loading')
    setResults(null)
    setError(null)

    const sectionId = parseInt(id, 10)
    Promise.all([fetchSections(), fetchQuestions(sectionId)])
      .then(([sections, qs]) => {
        const sec = sections.find(s => s.id === sectionId)
        if (!sec) throw new Error('Sectie niet gevonden')
        setSection(sec)
        setQuestions(qs)
        setPhase('hero')
      })
      .catch(err => {
        setError(err.message)
        setPhase('error')
      })
  }, [id])

  function handleBegin() {
    setPhase('quiz')
  }

  async function handleQuizComplete(answers) {
    try {
      const data = await submitAnswers(parseInt(id, 10), answers)
      // Save this section's score to localStorage
      const saved = JSON.parse(localStorage.getItem('hbo-quiz-scores') || '{}')
      saved[id] = { score: data.score, total: data.total, percentage: data.percentage, title: section?.title }
      localStorage.setItem('hbo-quiz-scores', JSON.stringify(saved))
      setResults(data)
      setPhase('results')
    } catch (err) {
      setError(err.message)
    }
  }

  function handleRestart() {
    setResults(null)
    setPhase('quiz')
  }

  function handleNext() {
    if (section?.nextSectionId) {
      navigate(`/sectie/${section.nextSectionId}`)
    } else {
      navigate('/eindresultaat')
    }
  }

  if (phase === 'loading') {
    return (
      <div className="loading-screen">
        <div className="loader" />
        <p>Vragen laden...</p>
      </div>
    )
  }

  if (phase === 'error') {
    return (
      <div className="error-screen">
        <h2>Verbindingsfout</h2>
        <p>Kan de backend niet bereiken. Zorg dat de C# server draait op poort 5000.</p>
        <code>{error}</code>
      </div>
    )
  }

  return (
    <div className="page">
      {/* Always-visible background */}
      <img src={`/images/${section?.heroBackground}`} className="page-bg" alt="" />
      <img src="/images/foreground.png" className="page-fg" alt="" />
      <div className="page-vignette" />

      {/* Hero overlay */}
      <div className={`hero-content${phase !== 'hero' ? ' hero-content--exit' : ''}`}>
        <span className="hero-eyebrow">Sectie {id} van 3</span>
        <h1 className="hero-title">HBO QUIZ</h1>
        <p className="hero-subtitle">{section?.title?.split(': ')[1]}</p>
        <p className="hero-meta">{questions.length} vragen</p>
        <button className="btn-begin" onClick={handleBegin}>Begin ↓</button>
      </div>

      {/* Quiz / Results panel */}
      <div className={`quiz-panel${phase === 'hero' ? ' quiz-panel--hidden' : ''}`}>
        <div className="quiz-container">
          {phase === 'quiz' && (
            <Quiz questions={questions} onComplete={handleQuizComplete} />
          )}
          {phase === 'results' && results && (
            <ResultsScreen
              results={results}
              section={section}
              onRestart={handleRestart}
              onNext={handleNext}
            />
          )}
        </div>
      </div>
    </div>
  )
}
