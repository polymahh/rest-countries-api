import { Pagination } from './Pagination'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { HiSearch } from 'react-icons/hi'
import Countries from './Countries'
import SelectOptions from './SelectOptions'

const Main = () => {
  const [initialData, setInitialData] = useState(null)
  const [initialCountries, setInitialCountries] = useState(null)
  const [countries, setCountries] = useState(null)
  const [current, setCurrent] = useState(1)
  const [pages, setPages] = useState(0)
  const [region, setRegion] = useState(null)
  const [query, setQuery] = useState('')
  // const [filteredCountries, setfilteredCountries] = useState(null)

  // const filteredCountries =
  //   query === ''
  //     ? countries
  //     : countries?.filter((country) =>
  //         country.name.common
  //           .toLowerCase()
  //           .includes(query?.toLowerCase().replace(/\s+/g, ''))
  //       )

  useEffect(() => {
    const getCountries = async () => {
      const result = await axios.get('https://restcountries.com/v3.1/all')
      const data = await result.data
      setPages(Math.round(data.length / 25))
      setInitialData(data)
      setInitialCountries(data)
    }

    getCountries().catch(console.error)
  }, [])

  useEffect(() => {
    setInitialCountries(
      initialData?.filter((country) =>
        country.name.common.toLowerCase().includes(query?.toLowerCase())
      )
    )
    setCurrent(1)
  }, [query])

  useEffect(() => {
    if (!region) {
      setCountries(initialCountries)
    }
    if (initialData && region) {
      setInitialCountries(
        initialData.filter((country) => country.region === region)
      )
      console.log(initialCountries)
    }
  }, [region])

  useEffect(() => {
    if (initialCountries) {
      setPages(Math.ceil(initialCountries.length / 25))
      const items = current * 25
      setCountries(initialCountries.slice(items - 25, items))
    }
  }, [current, initialCountries])

  return (
    <div className=" grid maxw ">
      <div className="flex flex-col items-start p-6 gap-6 ">
        <div className="shadow-md rounded-lg w-full overflow-hidden flex items-center px-4 py-3 bg-white">
          <HiSearch className="text-stone-400 text-2xl" />
          <input
            type="text"
            placeholder="Search for a country..."
            className=" px-6 py-2 text-LM-Input w-full "
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          ></input>
        </div>
        <SelectOptions setRegion={setRegion} />
        <Countries query={query} countries={countries} />
        <Pagination pages={pages} setCurrent={setCurrent} current={current} />
      </div>
    </div>
  )
}
export default Main
