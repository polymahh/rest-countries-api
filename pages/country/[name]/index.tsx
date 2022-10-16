import Image from 'next/image'
import Link from 'next/link'
import { HiArrowNarrowLeft } from 'react-icons/hi'
import { useContext } from 'react'
import { countryContext } from '../../../Context/CountryContext'

const Country = () => {
  const {
    currentCountry: country,
    setCurrentCountry,
    initialData,
  } = useContext(countryContext)
  return (
    <div className=" p-8 grid gap-16 md:grid-cols-[minmax(1fr,300px)] ">
      <div className="md:col-span-2">
        <button className=" bg-white py-1 px-6 mb-4 shadow-[0_1px_5px_2px_rgba(0,0,0,0.3)] ">
          <Link href="/">
            <span>
              <HiArrowNarrowLeft className="inline-block mr-2" />
              Back
            </span>
          </Link>
        </button>
      </div>

      <div className="cursor-pointer">
        <Image
          src={country.flags.png}
          alt={country.name.common}
          width={320}
          height={230}
        />
      </div>
      <div className="grid md:grid-cols-2">
        <div className="">
          <h1 className="font-extrabold text-2xl pb-2 ">
            {country.name.common}
          </h1>
          <div>
            <span className="font-semibold ">Native Name: </span>
            <span className="text-sm">
              {
                country.name.nativeName[Object.keys(country.name.nativeName)[0]]
                  .common
              }
            </span>
          </div>
          <div>
            <span className="font-semibold ">Population: </span>
            <span className="text-sm">{country.population}</span>
          </div>
          <div>
            <span className="font-semibold">Region: </span>
            <span className="text-sm">{country.region}</span>
          </div>

          <div>
            <span className="font-semibold">Sub Region: </span>
            <span className="text-sm">{country.subregion}</span>
          </div>
          <div>
            <span className="font-semibold">Capital: </span>
            <span className="text-sm">{country.capital}</span>
          </div>
        </div>
        <div className="my-12">
          <div>
            <span className="font-semibold">Top Level Domain: </span>
            <span className="text-sm">{country.tld}</span>
          </div>
          <div>
            <span className="font-semibold">Currencies: </span>
            <span className="text-sm">
              {country.currencies[Object.keys(country.currencies)[0]].name}
            </span>
          </div>
          <div>
            <span className="font-semibold">Languages: </span>
            <span className="text-sm">
              {Object.values(country.languages).toString()}
            </span>
          </div>
        </div>
        <div className="md:col-span-2 mt-6">
          <span className=" font-extrabold md:font-semibold md:text-base text-lg py-4 pr-4">
            Border Countries:
          </span>
          <div className="md:inline-flex flex flex-wrap gap-2">
            {country.borders?.map((item, idx) => {
              const result = initialData.find(
                (country) => country.cca3 === item
              )

              return (
                <button
                  key={idx}
                  className="shadow-[0_1px_5px_2px_rgba(0,0,0,0.1)] bg-white  px-8"
                  onClick={() => setCurrentCountry(result)}
                >
                  <Link
                    href="/country/[name]"
                    as={`/country/${result.name.common.toLowerCase()}`}
                  >
                    {result.name.common}
                  </Link>
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Country
