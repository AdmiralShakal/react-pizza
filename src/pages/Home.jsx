import React from 'react';
import { useState, useEffect } from 'react';
import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';

const Home = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  const [sortId, setSortId] = useState({
    name: 'популярности',
    sort: 'rating',
  });
  const [categoriId, setCategoryId] = useState(0);

  useEffect(() => {
    setIsloading(true);
    fetch(
      `https://62be93bf0bc9b125615a3b4a.mockapi.io/items?${
        categoriId > 0 ? `category=${categoriId}` : ''
      }&sortBy=${sortId.sort}`,
    )
      .then((resp) => resp.json())
      .then((data) => {
        setItems(data);
        setIsloading(false);
      });
  }, [categoriId, sortId]);

  return (
    <>
      <div className="content__top">
        <Categories index={categoriId} handleChangeCategory={(id) => setCategoryId(id)} />
        <Sort index={sortId} handleChangeSort={(id) => setSortId(id)} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map((_, i) => <Skeleton key={i} />)
          : items.map((item) => {
              return <PizzaBlock key={item.id} {...item} />;
            })}
      </div>
    </>
  );
};

export default Home;
