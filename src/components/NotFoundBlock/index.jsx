import React from 'react';

import styles from './NotFoundBlock.modules.scss';

const NotFoundBlock = () => {
  return (
    <div className={styles.root}>
      <span>:((</span>
      <br />
      <h1>Ничего не найдено</h1>
      <p className={styles.description}>Увы что-то пошло не так, и данной страницы нет</p>
    </div>
  );
};
export default NotFoundBlock;
