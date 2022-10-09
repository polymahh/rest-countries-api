import axios from 'axios'
import { useEffect, useState } from 'react'
import { HiSearch } from 'react-icons/hi'
import Countries from './Countries'
import SelectOptions from './SelectOptions'

const Main = () => {
  const [countries, setCountries] = useState(null)
  const [err, setErr] = useState(null)

  useEffect(() => {
    getCountries()
  }, [])

  const getCountries = async () => {
    try {
      const data = await axios.get('https://restcountries.com/v3.1/all')
      setCountries(data)
      console.log(data)
    } catch (err) {
      console.log('err')
      setErr(err)
    }
  }
  return (
    <div className=" grid maxw ">
      <div className="flex flex-col items-start p-6 gap-6 ">
        <div className="shadow-md rounded-lg w-full overflow-hidden flex items-center px-4 py-3 bg-white">
          <HiSearch className="text-stone-400 text-2xl" />
          <input
            type="text"
            placeholder="Search for a country..."
            className=" px-6 py-2 text-LM-Input w-full "
          ></input>
        </div>
        <SelectOptions />
        <Countries countries={countries} />
      </div>
    </div>
  )
}
export default Main
