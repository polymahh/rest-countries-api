import { useState } from 'react'
import arrowLight from '../public/icon-arrow-dark.svg'
import Image from 'next/image'

const SelectOptions = () => {
  const [clicked, setClicked] = useState(false)
  const [country, setCountry] = useState('Filter by Region')

  return (
    <div className="relative w-52 ">
      <button
        onClick={() => setClicked(!clicked)}
        // onBlur={() => setClicked(false)}
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
        <div className="flex flex-col gap-3 py-4 px-8 bg-white rounded-md font-semibold absolute top-16 shadow-md w-full ">
          <button
            className="cursor-pointer text-left hover:bg-LM-Background"
            onClick={() => setCountry('Africa')}
          >
            Africa
          </button>
          <button
            className="cursor-pointer text-left hover:bg-LM-Background"
            onClick={() => setCountry('America')}
          >
            America
          </button>
          <button
            className="cursor-pointer text-left hover:bg-LM-Background"
            onClick={() => setCountry('Asia')}
          >
            Asia
          </button>
          <button
            className="cursor-pointer text-left hover:bg-LM-Background"
            onClick={() => setCountry('Europe')}
          >
            Europe
          </button>
          <button
            className="cursor-pointer text-left hover:bg-LM-Background"
            onClick={() => setCountry('Oceania')}
          >
            Oceania
          </button>
        </div>
      )}
    </div>
  )
}
export default SelectOptions
