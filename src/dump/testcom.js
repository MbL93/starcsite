import React, { useEffect, useRef, useState, useMemo } from "react"

export default function Appfel() {
  const ref1 = useRef(null)
  const ref2 = useRef(null)

  const isInViewport1 = useIsInViewport(ref1)
  console.log("isInViewport1: ", isInViewport1)

  const isInViewport2 = useIsInViewport(ref2)
  console.log("isInViewport2: ", isInViewport2)

  return (
    <div>
      <div ref={ref1}>Top div {isInViewport1 && "| in viewport ✅"}</div>

      <div style={{ height: "37rem" }} />
      <div
        style={{
          visibility: !isInViewport1 ? "visible" : "hidden",
        }}
      >
        bla
      </div>
      <div style={{ height: "37rem" }} />

      <div ref={ref2}>Bottom div {isInViewport2 && "| in viewport ✅"}</div>
    </div>
  )
}

function useIsInViewport(ref) {
  const [isIntersecting, setIsIntersecting] = useState(false)

  const observer = useMemo(
    () =>
      new IntersectionObserver(([entry]) =>
        setIsIntersecting(entry.isIntersecting)
      ),
    []
  )

  useEffect(() => {
    observer.observe(ref.current)

    return () => {
      observer.disconnect()
    }
  }, [ref, observer])

  return isIntersecting
}
