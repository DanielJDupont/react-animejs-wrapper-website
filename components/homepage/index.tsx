import styles from './index.module.scss';
import Anime from 'react-animejs-wrapper';

export const HomePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.bigAnimation}>Big Animation</div>
      <div className={styles.subtitle}>
        A library for using Anime.js in React.
      </div>
    </div>
  );
};

// <Anime
// animeConfig={{
//   translateX: 25,
//   loop: true,
// }}
// >
// Test
// </Anime>
