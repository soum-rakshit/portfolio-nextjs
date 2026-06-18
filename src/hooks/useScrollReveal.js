import { useEffect } from 'react'

export function useScrollReveal() {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-8% 0px -8% 0px', // Offset slightly to trigger transitions cleanly
      threshold: 0.1,
    }

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed')
        } else {
          entry.target.classList.remove('revealed')
        }
      })
    }

    const observer = new IntersectionObserver(handleIntersect, observerOptions)
    
    // Select all reveal targets
    const targets = document.querySelectorAll('.reveal-on-scroll')
    targets.forEach((target) => observer.observe(target))

    return () => {
      targets.forEach((target) => observer.unobserve(target))
    }
  }, [])
}
