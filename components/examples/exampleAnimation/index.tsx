import Anime from 'react-animejs-wrapper';
import SearchIcon from '@material-ui/icons/Search';

import styles from './index.module.scss';

export const ExampleAnimation = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.columnContainer}>
        <div className={styles.title}>Sliding One Element</div>
        <div className={styles.rowContainer}>
          <div className={styles.animation}>
            <Anime
              style={{ position: 'absolute' }}
              config={{
                translateX: [0, 250],
                scale: [0, 2],
                loop: true,
                duration: 2000,
              }}
            >
              <SearchIcon />
              <SearchIcon />
              <SearchIcon />
              <SearchIcon />
              <SearchIcon />
              <SearchIcon />
              <SearchIcon />
              <SearchIcon />
              <SearchIcon />
            </Anime>
          </div>
          <div className={styles.code}>Code</div>
        </div>
      </div>
    </div>
  );
};
