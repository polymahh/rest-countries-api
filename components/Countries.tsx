import { Country } from './Country'
const Countries = ({ countries }) => {
  return (
    <div className=" w-full px-8">
      {countries &&
        countries.map((country) => (
          <Country key={country.name.common} country={country} />
        ))}
    </div>
  )
}
export default Countries
