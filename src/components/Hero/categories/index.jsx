import React from 'react'

export default function Categories({title, description, icon}) {
  return (
    <div className='gap-3 md:gap-0 lg:gap-2 p-[23px] border-athens cursor-pointer hover:bg-lupa transition-[background-color] border  flex flex-col items-center justify-center h-[140px] md:h-[104px]  lg:h-36  bg-white rounded-xl'  style={{ width: 'calc(50% - 4px)' }}>
        <img className={`w-6 lg:w-8`} src={icon} />
        <div className='flex flex-col items-center justify-center text-clay'>
            <h3 className='text-base lg:text-xl font-[400]'>{title}</h3>
            <p className='hidden lg:block font-light text-base lg:text-sm text-cadet text-center'>{description}</p>
        </div>
    </div>
  )
}