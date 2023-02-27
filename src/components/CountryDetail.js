import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
const CountryDetail = () => {
  let navigation = useNavigate();
  let [cards, setCards] = useState();
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);
  let curretnURL = window.location.pathname;
  let productArea = Number(curretnURL.slice(10));
  let product = cards && cards.findIndex((card) => card.area == productArea);
  let borders =
    cards &&
    cards[product].borders &&
    cards[product].borders.map((item) => item);
  let langArr = [];
  let languages = cards && cards[product].languages;
  if (languages) {
    for (const [key, value] of Object.entries(languages)) {
      langArr.push(value);
    }
  } else {
    return [];
  }
  console.log(langArr);
  let arrBorders = [];
  cards &&
    cards.map((item) => {
      if (borders) {
        for (let border of borders) {
          if (item.cca3 == border) {
            arrBorders.push(item);
          }
        }
      } else {
        return [];
      }
    });
  return (
    <>
      <section className="mx-auto py-6 px-3 lg:container">
        <button
          className="shadow-md py-3 px-9 flex flex-row justify-around align-baseline gap-3 rounded-md"
          onClick={() => navigation(-1)}
        >
          <i className="ri-arrow-left-line"></i>
          <span>Back</span>
        </button>
        <section className="products__details my-12 flex flex-row  justify-between align-middle gap-8">
          <section className="products__details__flag w-[50%]">
            <img src={cards && cards[product].flags.svg} />
          </section>
          <section className="products__details__infoes flex flex-row flex-wrap justify-between align-middle gap-8 w-[50%]">
            <div className="products__details__infoes__info">
              <h1>{cards && cards[product].name.common}</h1>
              <p>
                Native Name:
                <span>{cards && cards[product].name.official}</span>
              </p>
              <p>
                Population:<span>{cards && cards[product].population}</span>
              </p>
              <p>
                Region:<span>{cards && cards[product].region}</span>
              </p>
              <p>
                Sub Region:<span>{cards && cards[product].subregion}</span>
              </p>
              <p>
                Capital:<span>{cards && cards[product].capital}</span>
              </p>
            </div>
            <div className="products__details__info__info">
              <p>
                Top Level Domai:<span>{cards && cards[product].tld}</span>
              </p>
              <p>
                Currencies:
                <span>{cards && cards[product].currencies.name}</span>
              </p>
              <p>
                Languege:<span>{languages && langArr && langArr[0]}</span>
              </p>
            </div>
          </section>
        </section>
        <div className="products__details__info__border text-right">
          <p>
            Border Countries:
            {borders &&
              arrBorders.map((item, index) => {
                return (
                  <Link
                    key={index}
                    className="py-2 px-6 shadow-md rounded-md mx-1"
                    to={`/products/${item.area}`}
                  >
                    {item.name.common}
                  </Link>
                );
              })}
          </p>
        </div>
      </section>
    </>
  );
};

export default CountryDetail;
