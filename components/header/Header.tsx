import classNames from 'classnames';
import Logo from 'public/GS_LOGO.svg';
import { useEffect, useState } from 'react';
import styles from './Header.module.scss';
import Burger from './sub-components/Burger/Burger';

export interface INav {
  open: boolean;
  href?: string;
}

const Header = () => {
  const [navbarScrollStyles, setNavbarScrollStyles] = useState(false);

  const changeNavbarStyles = () => {
    if (window.scrollY >= 80) {
      setNavbarScrollStyles(true);
    } else {
      setNavbarScrollStyles(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNavbarStyles);
  }, []);

  return (
    <>
      <nav
        className={classNames(
          styles.nav,
          navbarScrollStyles && styles.navbarScrolled
        )}
      >
        <div className={classNames('container', styles.navHeight)}>
          <div className={styles.navContent}>
            <div className={styles.logo}>
              <img src={Logo.src} />
            </div>
            <Burger />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
