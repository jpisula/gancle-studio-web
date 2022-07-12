import Header from 'components/header/Header';
import type { NextPage } from 'next';
import styles from './index.module.scss';

const Home: NextPage = () => {
  return (
    <>
      <Header />
      Hello world
    </>
  );
};

export default Home;
