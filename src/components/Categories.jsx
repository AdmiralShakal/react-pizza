function Categories({ index, handleChangeCategory }) {
  const categoriList = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

  return (
    <div className="categories">
      <ul>
        {categoriList.map((categorie, id) => {
          return (
            <li
              key={id}
              onClick={() => handleChangeCategory(id)}
              className={index === id ? 'active' : ''}>
              {categorie}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Categories;
