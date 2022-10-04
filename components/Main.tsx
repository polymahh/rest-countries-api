const Main = () => {
  return (
    <main className="bg-LM-Background grid ">
      <div className="flex flex-col items-start px-4 py-6 ">
        <div className="shadow- rounded-lg w-full overflow-hidden">
          <input
            type="text"
            placeholder="Search for a country..."
            className=" px-6 py-2 text-LM-Input w-full "
          ></input>
        </div>

        <select name="region" id="region">
          <option value="africa">Africa</option>
          <option value="america">America</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="oceania">Oceania</option>
        </select>
      </div>
    </main>
  )
}
export default Main
