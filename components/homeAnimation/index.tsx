import styles from './index.module.scss';
import Anime from 'react-animejs-wrapper';

export const HomeAnimation = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>React Anime.js Wrapper</div>
      <div className={styles.subtitle}>
        A library for using Anime.js in React.
      </div>
      <div className={styles.bigAnimation} />
    </div>
  );
};
