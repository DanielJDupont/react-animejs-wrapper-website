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
              translateX: [0, 150],
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
            // style={{ position: 'absolute' }}
            config={{
              translateX: [0, 150],
              scale: [0, 1.5],
              loop: true,
              delay: anime.stagger(100, { start: 200 }),
            }}
          >
            <div style={{ margin: '15px' }}>Mars</div>
            <div style={{ margin: '15px' }}>Jupiter</div>
            <div style={{ margin: '15px' }}>Satdurn</div>
            <div style={{ margin: '15px' }}>Satdurn4</div>
            <div style={{ margin: '15px' }}>Satdurn</div>
            <div style={{ margin: '15px' }}>Satdurn</div>
          </Anime>
        }
        code={'test'}
      />
    </div>
  );
};
