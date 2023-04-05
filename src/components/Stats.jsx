import React from "react";

const Stats = () => {
  return (
<section className="font-poppins flex flex-col sm:flex-row md:justify-between lg:px-10 lg:text-3xl md:gap-6 gap-4 pt-6">
  <div className="stats-style">
    <h1 className="text-white lg:text-6xl xl:text-7xl">30+</h1>
    <p className="text-secondary text-[12px] lg:text-lg xl:text-xl">Active Users</p>
    <div className="hidden sm:block sm:border-r-2 sm:border-footerline h-3 lg:h-6 sm:ml-4"></div>
  </div>

  <div className="stats-style">
    <h1 className="text-white lg:text-6xl xl:text-7xl sm:gap-2">20gb+</h1>
    <p className="text-secondary text-[12px] lg:text-lg xl:text-xl">Storage Saved</p>
    <div className="hidden sm:block sm:border-r-2 sm:border-footerline h-3 lg:h-6 sm:ml-4"></div>
  </div>

  <div className="stats-style">
    <h1 className="text-white lg:text-6xl xl:text-7xl">99.96%</h1>
    <p className="text-secondary text-[12px] lg:text-lg xl:text-xl">Availability</p>
    <div className="hidden sm:block sm:border-r-2 sm:border-footerline h-3 lg:h-6 sm:ml-4"></div>
  </div>

  <div className="stats-style">
    <h1 className="text-white lg:text-6xl xl:text-7xl sm:gap-2">0</h1>
    <p className="text-secondary text-[12px] lg:text-lg xl:text-xl">Files Lost</p>
  </div>
</section>

  );
};

export default Stats;
