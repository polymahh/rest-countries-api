import { HiSearch } from 'react-icons/hi'
import SelectOptions from './SelectOptions'

const Main = () => {
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
        {/* <div className="p-4 bg-white rounded-md shadow-md">
          <select name="region" id="region" className="pr-16  ">
            <option value="africa">Africa</option>
            <option value="america">America</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="oceania">Oceania</option>
          </select>
        </div> */}
      </div>
    </div>
  )
}
export default Main
