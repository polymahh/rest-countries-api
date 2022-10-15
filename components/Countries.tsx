import { Country } from './Country'
const Countries = ({ query, countries }) => {
  return (
    <div className=" w-full px-8 grid justify-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {countries?.length === 0 && query !== '' ? (
        <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
          Nothing found.
        </div>
      ) : (
        countries?.map((country) => (
          <Country key={country.name.common} country={country} />
        ))
      )}
    </div>
  )
}
export default Countries
