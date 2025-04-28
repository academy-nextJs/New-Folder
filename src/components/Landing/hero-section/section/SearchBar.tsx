import React from "react";

const SearchBar = () => {
  return (
    <div className="absolute bottom-12 left-0 right-0 mx-auto w-full max-w-5xl">
      <div className="flex justify-between items-center w-full bg-black/30 backdrop-blur-sm rounded-lg p-4">
        <div className="flex items-center gap-2">
          <button className="bg-primary text-secondary px-6 py-2 rounded-full text-sm font-bold">
            جستجو کن
          </button>
        </div>

        <div className="flex-1 flex justify-around">
          <div className="flex items-center gap-2 text-foreground">
            <select className="bg-transparent border-none text-foreground text-sm">
              <option>استان تهران، شهر...</option>
            </select>
          </div>

          <div className="flex items-center gap-2 text-foreground">
            <select className="bg-transparent border-none text-foreground text-sm">
              <option>نوع معامله...</option>
            </select>
          </div>

          <div className="flex items-center gap-2 text-foreground">
            <select className="bg-transparent border-none text-foreground text-sm">
              <option>نوع ملک...</option>
            </select>
          </div>

          <div className="flex items-center gap-2 text-foreground">
            <select className="bg-transparent border-none text-foreground text-sm">
              <option>انتخاب منطقه/محله...</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
