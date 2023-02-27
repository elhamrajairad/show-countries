import React from "react";

const Filter = ({
  searchValue,
  handlerSetSearch,
  handlerFilterItem,
  filterItem,
}) => {
  return (
    <div>
      <section className="flex flex-row justify-between align-middle items-center my-8">
        <div className="bg-transparent shadow-md p-4">
          <i className="ri-search-2-line"></i>
          <input
            type="search"
            placeholder="Search for country..."
            className="bg-transparent outline-none border-0 mx-2"
            value={searchValue}
            onChange={(e) => handlerSetSearch(e)}
          />
        </div>

        <select
          onChange={(e) => handlerFilterItem(e)}
          value={filterItem}
          className="outline-none shadow-md bg-transparent"
        >
          <option className="border-none" disabled>
            Filter by region
          </option>
          <option className="border-none bg-transparent" value="Asia" select>
            Asia
          </option>
          <option className="border-none" value="Africa">
            Africa
          </option>
          <option className="border-none" value="Americas">
            Americas
          </option>
          <option className="border-none" value="Oceania">
            Oceania
          </option>
        </select>
      </section>
    </div>
  );
};

export default Filter;
