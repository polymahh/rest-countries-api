import ThemeToggle from './ThemeToggle'

export const Header = () => {
  return (
    <div className="flex justify-between px-4 py-6 maxw dark:bg-DM-Elements dark:text-white">
      <h1 className="font-extrabold">Where in the world?</h1>
      <ThemeToggle />
    </div>
  )
}
