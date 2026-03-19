import { useEffect, useRef } from 'react'

const TRAIL_LENGTH = 20

export default function MouseTrail() {
  const refs = useRef([])

  useEffect(() => {
    const coords = { x: 0, y: 0 }
    const circles = refs.current

    circles.forEach(c => { if (c) { c.x = 0; c.y = 0 } })

    const onMove = (e) => { coords.x = e.clientX; coords.y = e.clientY }
    window.addEventListener('mousemove', onMove)

    let rafId
    function animate() {
      let x = coords.x
      let y = coords.y
      circles.forEach((circle, i) => {
        if (!circle) return
        circle.style.left = x - 12 + 'px'
        circle.style.top  = y - 12 + 'px'
        circle.style.scale = String((circles.length - i) / circles.length)
        circle.x = x
        circle.y = y
        const next = circles[i + 1] || circles[0]
        if (next) {
          x += (next.x - x) * 0.3
          y += (next.y - y) * 0.3
        }
      })
      rafId = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <>
      {Array.from({ length: TRAIL_LENGTH }, (_, i) => (
        <div key={i} className="circle" ref={el => refs.current[i] = el} />
      ))}
    </>
  )
}
