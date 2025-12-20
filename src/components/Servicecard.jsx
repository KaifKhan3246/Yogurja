import React from 'react'

const Servicecard = ({title,des}) => {
  return (
    <div className="w-full md:w-1/6">
  <div className="h-full rounded-xl shadow-[inset_0_12px_40px_rgba(86,150,129,0.9)] shadow-[#569681] transition-all duration-300">

    <div className="flex flex-col h-full rounded-xl object-cover">
      <img
        className="h-1/2 m-2 object-cover hover:scale-101 rounded-lg transition-transform duration-300"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEc0FLAGIsnOpZofg6a-d5FqLfjhsAc3tMXg&s"
        alt={title}
      />
      <div className="flex flex-col items-center text-center p-4">
        <h1 className="mt-4 font-serif font-semibold text-lg text-zinc-900">
          {title}
        </h1>

        <p className="mt-3 text-sm text-zinc-600">
          {des}
        </p>
        <a
          href="https://en.wikipedia.org/wiki/Ayurveda"
          target="_blank"
          className="mt-4 mb-3 bg-orange-500 text-white px-5 py-2 rounded-full
          shadow-md hover:bg-orange-600 active:scale-95 transition-all duration-300"
        >
          Learn More
        </a>
      </div>

    </div>
  </div>
</div>

  )
}

export default Servicecard
