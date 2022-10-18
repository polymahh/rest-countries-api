import { Header } from './Header'
import { CountryProvider } from '../Context/CountryContext'

const Layout = ({ children }) => {
  return (
    <CountryProvider>
      <div>
        <header className="shadow-md bg-white">
          <Header />
        </header>
        <main className="h-[93vh] dark:bg-DM-Background">{children}</main>
      </div>
    </CountryProvider>
  )
}
export default Layout
