import React from "react";

export default function PopularVacancies({ title, price }) {
  return (
    <div className="cursor-pointer w-[7.5rem] md:w-44 xlg:w-48">
      <div className="popular-vacansy_image-wrapper relative mb-3 overflow-hidden rounded-xl w-full h-[151px]h-56">
        <span className="absolute w-full h-full image-wrapper_overlay top-0 right-0 bg-slate-900 opacity-[0] transition-opacity duration-500"></span>
        <img
          className="w-full h-full object-cover"
          src="https://upload.naimi.kz/image/gR3ndgpPwOaMohMThgmGqF9Cs9stdaHVH4vfTD0n94ktih9aei4ZXKW8MN7iDH2K2loBTmUhkUh8bftITqMqq7JIuuS4ah4LOp9noRRSuqDLhvBOZbtKNgTtIYdna0tJf1Fon3zT44te4L5mIndEPWvFIlp?h=228&w=179&m=c"
          width={120}
          height={151}
          alt={title}
        />
      </div>
      <h3 className="text-sm md:text-base lg:text-lg leading-tight mb-1 text-clay font-semibold">
        {title}
      </h3>
      <span className="text-cadet text-sm lg:text-base text-[1.1rem] md:font-normal">
        {price ? price : ""}
      </span>
    </div>
  );
}
