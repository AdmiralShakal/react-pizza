import React from 'react';
import { useState, useEffect } from 'react';
import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';

const Home = ({ searchValues }) => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  const [sortObj, setSortObj] = useState({
    name: 'популярности',
    sort: 'rating',
  });
  const [categoriId, setCategoryId] = useState(0);
  const category = categoriId > 0 ? `category=${categoriId}` : '';
  const search = searchValues > 0 ? `&search=${searchValues}` : '';

  useEffect(() => {
    setIsloading(true);
    fetch(
      `https://62be93bf0bc9b125615a3b4a.mockapi.io/items?${category}${search}&sortBy=${sortObj.sort}`,
    )
      .then((resp) => resp.json())
      .then((data) => {
        setItems(data);
        setIsloading(false);
      });
  }, [categoriId, sortObj, searchValues]);

  const pizzas = items.map((item) => <PizzaBlock key={item.id} {...item} />);

  const skeletons = [...new Array(6)].map((_, i) => <Skeleton key={i} />);

  return (
    <>
      <div className="content__top">
        <Categories index={categoriId} handleChangeCategory={(id) => setCategoryId(id)} />
        <Sort itemObj={sortObj} handleChangeSort={(id) => setSortObj(id)} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">{isLoading ? skeletons : pizzas}</div>
    </>
  );
};

export default Home;
