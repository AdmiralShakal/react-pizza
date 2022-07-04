import { useState } from 'react';

function Categories() {
  const categoriList = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
  const [activeCategori, setActiveCategory] = useState(0);

  return (
    <div className="categories">
      <ul>
        {categoriList.map((categorie, id) => {
          return (
            <li
              key={id}
              onClick={() => setActiveCategory(id)}
              className={activeCategori === id ? 'active' : ''}>
              {categorie}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Categories;
