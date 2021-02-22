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
              config={{
                scale: [0, 1.5],
                translateX: [0, 200],
                loop: true,
                easing: 'spring(1, 80, 10, 0)',
              }}
            >
              <SearchIcon />
            </Anime>
          </div>
          <div className={styles.code}>Code</div>
        </div>
      </div>
    </div>
  );
};
