import classNames from 'classnames';
import Logo from 'public/GS_LOGO.svg';
import styles from './Header.module.scss';
import Burger from './sub-components/Burger/Burger';

export interface INav {
  open: boolean;
  href?: string;
}

const Header = () => {
  return (
    <>
      <nav className={styles.nav}>
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
