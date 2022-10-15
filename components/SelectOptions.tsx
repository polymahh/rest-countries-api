import { useState } from 'react'
import arrowLight from '../public/icon-arrow-dark.svg'
import Image from 'next/image'

const SelectOptions = ({ setRegion }) => {
  const [clicked, setClicked] = useState(false)
  const [country, setCountry] = useState('Filter by Region')

  const regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']

  return (
    <div className="relative w-52 ">
      <button
        onClick={() => setClicked(!clicked)}
        className="w-full px-6 py-4 bg-white rounded-md shadow-md flex justify-between items-center "
      >
        <span className=" font-semibold">{country}</span>
        <Image
          src={arrowLight}
          alt="lst"
          className={
            clicked ? 'rotate-180 transition-all' : 'rotate-0 transition-all'
          }
        />
      </button>
      {clicked && (
        <div className="flex flex-col gap-2 py-4 px-8 bg-white rounded-md font-semibold absolute top-16 shadow-md w-full ">
          {regions.map((region) => (
            <button
              key={region}
              className="cursor-pointer text-left hover:bg-LM-Background"
              onClick={() => {
                setRegion(region)
                setCountry(region)
                setClicked(false)
              }}
              onBlur={() => setClicked(!clicked)}
            >
              {region}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
export default SelectOptions
