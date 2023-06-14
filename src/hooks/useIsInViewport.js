import { useEffect, useState, useMemo } from "react"

const useIsInViewport = ref => {
  const [isIntersecting, setIsIntersecting] = useState(false)

  const observer = useMemo()
  // const observer = useMemo(
  //   () =>
  //     new IntersectionObserver(([entry]) =>
  //       setIsIntersecting(entry.isIntersecting)
  //     ),
  //   []
  // )

  useEffect(() => {
    observer.current = new IntersectionObserver(([entry]) =>
      setIsIntersecting(entry.isIntersecting)
    )
  }, []) // do this only once, on mount

  useEffect(() => {
    observer.observe(ref.current)

    return () => {
      observer.disconnect()
    }
  }, [ref, observer])

  return isIntersecting
}

export default useIsInViewport
