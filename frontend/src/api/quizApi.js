const BASE = 'http://localhost:5000/api/quiz'

export const fetchSections = () =>
  fetch(`${BASE}/sections`).then(r => {
    if (!r.ok) throw new Error('Could not load sections')
    return r.json()
  })

export const fetchQuestions = (sectionId) =>
  fetch(`${BASE}/sections/${sectionId}/questions`).then(r => {
    if (!r.ok) throw new Error('Could not load questions')
    return r.json()
  })

export const submitAnswers = (sectionId, answers) =>
  fetch(`${BASE}/submit`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ sectionId, answers }),
  }).then(r => {
    if (!r.ok) throw new Error('Could not submit answers')
    return r.json()
  })
