import Image from 'next/image'
import React from 'react'
export function Country({ country }) {
  return (
    <div className="bg-white rounded-lg shadow-lg max-w-[320px] overflow-hidden pb-8 mb-10">
      <div>
        <Image
          src={country.flags.png}
          alt={country.flag}
          width={320}
          height={230}
        />
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
