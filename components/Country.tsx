import React from 'react'
export function Country({ country }) {
  return (
    <div className="bg-white rounded-lg shadow-lg w-full overflow-hidden pb-8 mb-10">
      <div>
        <img src="hero-img.jpg" alt={country.flag} />
      </div>
      <div className="px-8">
        <h1 className="font-extrabold text-lg pb-2 pt-6">
          {country.name.common}
        </h1>
        <div>
          <span className="font-semibold ">Population: </span>
          <span className="text-sm">{country.population}</span>
        </div>
        <div>
          <span className="font-semibold">Region: </span>
          <span className="text-sm">{country.region}</span>
        </div>
        <div>
          <span className="font-semibold">Capital: </span>
          <span className="text-sm">{country.capital}</span>
        </div>
      </div>
    </div>
  )
}
