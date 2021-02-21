import styles from './index.module.scss';
import Anime from 'react-animejs-wrapper';

export const HomePage = () => {
  return (
    <div className={styles.container}>
      <Anime animeConfig={{}}>Test</Anime>
    </div>
  );
};
