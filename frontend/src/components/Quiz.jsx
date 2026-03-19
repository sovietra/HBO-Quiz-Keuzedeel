import { useState } from 'react'
import QuestionCard from './QuestionCard'

export default function Quiz({ questions, onComplete }) {
  const [index, setIndex] = useState(0)
  const [collectedAnswers, setCollectedAnswers] = useState([])
  const [selectedIndex, setSelectedIndex] = useState(null)
  const [answered, setAnswered] = useState(false)

  const question = questions[index]
  const isLast = index === questions.length - 1

  function handleAnswer(i) {
    if (answered) return
    setSelectedIndex(i)
    setAnswered(true)
    setCollectedAnswers(prev => [...prev, i])
  }

  function handleNext() {
    if (isLast) {
      onComplete([...collectedAnswers])
    } else {
      setIndex(i => i + 1)
      setSelectedIndex(null)
      setAnswered(false)
    }
  }

  if (!question) return null

  const progress = (index / questions.length) * 100

  return (
    <>
      <div className="quiz-header">
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${progress}%` }} />
        </div>
        <div className="quiz-meta">
          <span className="question-counter">Vraag {index + 1} / {questions.length}</span>
          <span className="section-pill">{question.sectionLabel}</span>
        </div>
      </div>

      <QuestionCard
        key={question.id}
        question={question}
        selectedIndex={selectedIndex}
        answered={answered}
        onAnswer={handleAnswer}
        onNext={handleNext}
        isLast={isLast}
      />
    </>
  )
}
