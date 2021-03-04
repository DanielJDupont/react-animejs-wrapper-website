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
      <ExampleAnimation title={'Sliding One Element'} code={'test'}>
        <Anime
          style={{
            backgroundColor: 'lightgrey',
            width: '80px',
          }}
          config={{
            translateY: [0, 20],
            scale: [0.8, 1],
            loop: true,
            duration: 1500,
          }}
        >
          <div>Find</div>
        </Anime>
      </ExampleAnimation>

      <ExampleAnimation title={'Stagger Multiple Elements'} code={'test'}>
        <Anime
          style={{
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: 'lightgrey',
            alignItems: 'left',
            width: '80px',
          }}
          config={{
            translateX: [-35, 0],
            scale: [0, 1],
            loop: true,
            delay: anime.stagger(100, { start: 200 }),
          }}
        >
          <div
            style={{ backgroundColor: 'grey', width: '50px', margin: '5px' }}
          >
            Transit
          </div>
          <div
            style={{ backgroundColor: 'grey', width: '50px', margin: '5px' }}
          >
            Food
          </div>
          <div
            style={{ backgroundColor: 'grey', width: '50px', margin: '5px' }}
          >
            Events
          </div>
        </Anime>
      </ExampleAnimation>
    </div>
  );
};
