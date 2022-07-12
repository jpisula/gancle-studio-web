import classNames from 'classnames';
import React, { useState } from 'react';
import RightNav from '../RightNav/RightNav';
import styles from './Burger.module.scss';

const Burger = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className={classNames(styles.burger, open ? styles.open : styles.close)}
        onClick={() => setOpen(!open)}
      >
        <div />
        <div />
        <div />
      </div>
      <RightNav open={open} />
    </>
  );
};
export default Burger;
