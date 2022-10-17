import { Pagination } from './Pagination'
import axios from 'axios'
import { useEffect, useState, useContext } from 'react'
import { HiSearch } from 'react-icons/hi'
import Countries from './Countries'
import SelectOptions from './SelectOptions'
import { countryContext } from '../Context/CountryContext'

const Main = () => {
  const [initialCountries, setInitialCountries] = useState(null)
  const [countries, setCountries] = useState(null)
  const [current, setCurrent] = useState(1)
  const [pages, setPages] = useState(0)
  const [region, setRegion] = useState(null)
  const [query, setQuery] = useState('')

  const { initialData, setInitialData } = useContext(countryContext)

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
      <div className="flex flex-col items-start p-6 gap-6 dark:bg-DM-Background min-h-[90vh] ">
        <div className="flex gap-6 flex-col w-full md:flex-row my-6">
          <div className="shadow-md rounded-lg w-full overflow-hidden flex items-center px-4 py-2 bg-white dark:bg-DM-Elements">
            <HiSearch className="text-stone-400 text-2xl dark:text-white" />
            <input
              type="text"
              placeholder="Search for a country..."
              className=" px-6 py-2 text-LM-Input dark:bg-DM-Elements w-full "
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            ></input>
          </div>
          <SelectOptions setRegion={setRegion} />
        </div>
        <Countries query={query} countries={countries} />
        <Pagination pages={pages} setCurrent={setCurrent} current={current} />
      </div>
    </div>
  )
}
export default Main
