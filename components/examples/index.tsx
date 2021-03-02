import Anime, { anime } from 'react-animejs-wrapper';

import { ExampleAnimation } from './exampleAnimation';

import SearchIcon from '@material-ui/icons/Search';

import styles from './index.module.scss';

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
              scale: [0, 1.3],
              loop: true,
              duration: 1500,
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
            style={{
              position: 'absolute',
              height: '0px',
              backgroundColor: 'red',
            }}
            config={{
              translateX: [0, 150],
              scale: [0, 1.5],
              loop: true,
              delay: anime.stagger(100, { start: 200 }),
            }}
          >
            <div style={{ margin: '15px' }}>Transit</div>
            <div style={{ margin: '15px' }}>Food</div>
            <div style={{ margin: '15px' }}>Events</div>
          </Anime>
        }
        code={'test'}
      />
    </div>
  );
};
