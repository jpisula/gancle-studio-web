import classNames from 'classnames';
import Link from 'next/link';
import React from 'react';
import Logo from '../../../../public/GS_LOGO.svg';
import styles from './RightNav.module.scss';

type Props = {
  open: boolean;
};

function RightNav(props: Props) {
  return (
    <ul
      className={classNames(styles.ul, props.open ? styles.open : styles.close)}
    >
      {/* <S.LogoUl src={Logo} alt={'Gustavo Scarpim'} /> */}

      <Link
        href='/menu1'
        style={{
          fontWeight: 'bold',
          color: '#0DADEA'
        }}
      >
        <li>Menu 1</li>
      </Link>
      <Link
        href='/menu2'
        style={{
          fontWeight: 'bold',
          color: '#0DADEA'
        }}
      >
        <li>Menu 2</li>
      </Link>
      <Link
        href='/menu3'
        style={{
          fontWeight: 'bold',
          color: '#0DADEA'
        }}
      >
        <li>Menu 3</li>
      </Link>
      <Link
        href='/menu4'
        style={{
          fontWeight: 'bold',
          color: '#0DADEA'
        }}
      >
        <li>Menu 4</li>
      </Link>
    </ul>
  );
}

export default RightNav;
