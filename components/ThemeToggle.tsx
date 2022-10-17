import { useState } from 'react'
import { HiOutlineMoon } from 'react-icons/hi'
import { HiSun } from 'react-icons/hi'
import { useEffect } from 'react'

const ThemeToggle = () => {
  const [theme, setTheme] = useState(
    typeof localStorage === 'undefined' ? 'light' : localStorage.theme
  )
  const colorTheme = theme === 'dark' ? 'light' : 'dark'

  useEffect(() => {
    setTheme(localStorage.theme)
    console.log(localStorage.theme)
  }, [])

  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove(colorTheme)
    root.classList.add(theme)
    localStorage.setItem('theme', theme)
  }, [theme, colorTheme])

  return (
    <div
      onClick={() => setTheme(colorTheme)}
      className="flex items-center gap-1"
    >
      {colorTheme === 'dark' ? (
        <HiOutlineMoon className="h-4 w-4" />
      ) : (
        <HiSun className="h-4 w-4" />
      )}
      <span className="font-semibold">Dark Mode</span>
    </div>
  )
}
export default ThemeToggle
