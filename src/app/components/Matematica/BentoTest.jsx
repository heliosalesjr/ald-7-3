import React from 'react'

function BentoTest() {
  return (
    <div className='max-w-7xl mx-auto'>
        <div className="grid auto-rows-[192px] grid-cols-3 gap-2">
            {[...Array(7)].map((_, i) => (
                <div
                key={i}
                className={`row-span-1 rounded-xl border-2 border-slate-400/10 bg-neutral-100 p-4 dark:bg-neutral-900 ${
                    i === 3 || i === 6 ? "col-span-2" : ""
                }`}
                ></div>
            ))}
        </div>

    </div>
  )
}

export default BentoTest