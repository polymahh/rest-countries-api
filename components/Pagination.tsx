import React from 'react'
export function Pagination({ pages, setCurrent, current }) {
  return (
    <div className="m-auto flex flex-wrap justify-around">
      {Array.from(Array(pages).keys()).map((page) => {
        return (
          <button
            onClick={() => setCurrent(page + 1)}
            key={page}
            className={`m-1 w-12 h-12 border rounded-full hover:bg-red-300 hover:text-white  ${
              current == page + 1 ? 'bg-LM-Input text-white' : ''
            }`}
          >
            {page + 1}
          </button>
        )
      })}
    </div>
  )
}
