import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./cards.css";
import Filter from "./Filter";

const Cards = () => {
  // state for fetch data:
  let [error, setError] = useState("");
  let [IsLoad, setIsLoad] = useState(false);
  let [cards, setCards] = useState(undefined);
  // state search && filter:
  let [searchWord, setSearch] = useState("");
  let [filterItem, setFilter] = useState("");
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then(
        (data) => {
          setIsLoad(true);
          setCards(data);
        },
        (err) => {
          setIsLoad(true);
          setError(err.message);
        }
      );
  }, []);
  function searchFunction(cards) {
    // search item:
    if (cards === undefined || filterItem === undefined) {
      return [];
    } else if (searchWord) {
      return cards.filter((card) => {
        return card.name.common
          .toLowerCase()
          .includes(searchWord.toLowerCase());
      });
    }
    if (filterItem) {
      return cards.filter((card) => {
        return card.region.toLowerCase().includes(filterItem.toLowerCase());
      });
    } else {
      return cards;
    }
  }

  //  show data:
  if (error) {
    return (
      <>
        <section className="mx-auto py-6 px-3 lg:container">
          <h1>{error}</h1>
        </section>
      </>
    );
  } else if (!IsLoad) {
    return (
      <>
        <section className="mx-auto py-6 px-3 lg:container">
          <h1>Loading...</h1>
        </section>
      </>
    );
  } else {
    return (
      <section className="mx-auto py-6 px-3 lg:container">
        <Filter
          searchValue={searchWord}
          handlerSetSearch={(e) => setSearch(e.target.value)}
          handlerFilterItem={(e) => {
            setFilter(e.target.value);
          }}
          filterItem={filterItem}
        />
        <section className="cards grid justify-between align-middle items-center gap-20">
          {searchFunction(cards).map((card) => {
            return (
              <Link
                to={`/products/${card.area}`}
                className="cards__card shadow-md rounded"
                key={card.name.common}
              >
                <div className="cards__card__header h-40 w-full overflow-hidden">
                  <img
                    src={card.flags.svg}
                    alt={card.name.common}
                    className="cards__card__img m-0 h-full w-full overflow-hidden"
                  />
                </div>
                <div className="cards__card__body p-5">
                  <p className="cards__card__body__title mb-5">
                    <strong>{card.name.common}</strong>
                  </p>
                  <ul>
                    <li className="cards__card__body__details font-semibold">
                      Population:
                      <span className="mx-2 font-light">{card.population}</span>
                    </li>
                    <li className="cards__card__body__details font-semibold">
                      Region:
                      <span className="mx-2 font-light">{card.region}</span>
                    </li>
                    <li className="cards__card__body__details font-semibold">
                      Capital:
                      <span className="mx-2 font-light">{card.capital}</span>
                    </li>
                  </ul>
                </div>
              </Link>
            );
          })}
        </section>
      </section>
    );
  }
};

export default Cards;
