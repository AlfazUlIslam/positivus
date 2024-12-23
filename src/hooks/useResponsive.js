import { useState, useLayoutEffect } from "react"

const useResponsive = () => {
  const [ windowWidth, setwindowWidth ] = useState(0)

  const handleResize = () => {
    setwindowWidth(window.innerWidth)
  }

  useLayoutEffect(() => {
    handleResize()

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return windowWidth
}

export default useResponsive