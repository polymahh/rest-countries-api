const Countries = ({ countries }) => {
  return (
    <div className=" w-full px-8">
      <div className="bg-white rounded-lg shadow-lg w-full overflow-hidden pb-8">
        <div>
          <img src="hero-img.jpg" alt="" />
        </div>
        <div className="px-8">
          <h1 className="font-extrabold text-lg pb-2 pt-6">Germany</h1>
          <div>
            <span className="font-semibold ">Population: </span>
            <span className="text-sm">81.770.900</span>
          </div>
          <div>
            <span className="font-semibold">Region: </span>
            <span className="text-sm">Europe</span>
          </div>
          <div>
            <span className="font-semibold">Capital: </span>
            <span className="text-sm">Berlin</span>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Countries
