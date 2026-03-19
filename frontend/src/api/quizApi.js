import { sections, getQuestions, calcResult } from '../data/quizData.js'

const API = import.meta.env.VITE_API_URL

async function tryApi(path, options) {
  if (!API) return null
  try {
    const res = await fetch(`${API}/api/quiz${path}`, { ...options, signal: AbortSignal.timeout(3000) })
    if (!res.ok) return null
    return await res.json()
  } catch {
    return null
  }
}

export async function fetchSections() {
  return (await tryApi('/sections')) ?? sections
}

export async function fetchQuestions(sectionId) {
  return (await tryApi(`/sections/${sectionId}/questions`)) ?? getQuestions(sectionId)
}

export async function submitAnswers(sectionId, answers) {
  const fromApi = await tryApi('/submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ sectionId, answers }),
  })
  return fromApi ?? calcResult(sectionId, answers)
}
