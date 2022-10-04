import ThemeToggle from './ThemeToggle'

export const Header = () => {
  return (
    <header className="flex justify-between px-4 py-6 shadow-lg">
      <h1 className="font-extrabold">Where in the world?</h1>
      <ThemeToggle />
    </header>
  )
}
