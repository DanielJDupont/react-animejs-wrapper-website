import { ExampleAnimation } from './exampleAnimation';
import styles from './index.module.scss';

import Anime, { anime } from 'react-animejs-wrapper';
import SearchIcon from '@material-ui/icons/Search';

export const Examples = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.title}>Sample Components</div>
        <div className={styles.description}>
          Get to using Anime.js as quickly as possible in your React
          application.
        </div>
        <div className={styles.description}>
          For more comprehensive information on what can be passed into the
          config parameter please see the documentation for Anime.js.
        </div>
      </div>

      <ExampleAnimation
        title={'Sliding One Element'}
        anime={
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
          </Anime>
        }
        code={'test'}
      />

      <ExampleAnimation
        title={'Stagger Multiple Elements'}
        anime={
          <Anime
            style={{ position: 'absolute' }}
            config={{
              translateX: [0, 250],
              scale: [0, 2],
              loop: true,
              delay: anime.stagger(100, { start: 500 }),
            }}
          >
            <div style={{ margin: '10px' }}>Item A</div>
            <div style={{ margin: '10px' }}>Item B</div>
            <div style={{ margin: '10px' }}>Item C</div>
          </Anime>
        }
        code={'test'}
      />
    </div>
  );
};
