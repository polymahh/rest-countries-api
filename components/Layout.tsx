import { Header } from './Header'
import { CountryProvider } from '../Context/CountryContext'

const Layout = ({ children }) => {
  return (
    <CountryProvider>
      <div>
        <header className="shadow-md bg-white">
          <Header />
        </header>
        <main>{children}</main>
      </div>
    </CountryProvider>
  )
}
export default Layout
