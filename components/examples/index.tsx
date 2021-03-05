import Anime, { anime } from 'react-animejs-wrapper';

import { ExampleAnimation } from './exampleAnimation';

import SearchIcon from '@material-ui/icons/Search';

import styles from './index.module.scss';

const slidingOneElementExampleCode = `<Anime
  style={{
    backgroundColor: 'lightgrey',
    width: '125px',
    padding: '5px',
    borderRadius: '5px',
  }}
  config={{
    translateY: [0, 25],
    scale: [0.8, 1],
    loop: true,
    duration: 1500,
    easing: 'spring(1, 100, 12, 0)',
  }}
>
  <div>Search</div>
</Anime>
`;

const staggerMultipleElementsExampleCode = `<Anime
  style={{
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'lightgrey',
    alignItems: 'left',
    width: '160px',
  }}
  config={{
    translateX: [-35, 0],
    scale: [0, 1],
    loop: true,
    delay: anime.stagger(100, { start: 200 }),
    easing: 'spring(1, 80, 13, 0)',
  }}
>
  <div
    style={{
      backgroundColor: '#f1f1f1',
      width: '150px',
      margin: '5px',
      padding: '5px',
    }}
  >
    Transit
  </div>
  <div
    style={{
      backgroundColor: '#f1f1f1',
      width: '150px',
      margin: '5px',
      padding: '5px',
    }}
  >
    Food
  </div>
  <div
    style={{
      backgroundColor: '#f1f1f1',
      width: '150px',
      margin: '5px',
      padding: '5px',
    }}
  >
    Events
  </div>
</Anime>
`;

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
        code={slidingOneElementExampleCode}
        title={'Sliding One Element'}
      >
        <Anime
          style={{
            backgroundColor: 'lightgrey',
            width: '125px',
            padding: '5px',
            borderRadius: '5px',
          }}
          config={{
            translateY: [0, 25],
            scale: [0.8, 1],
            loop: true,
            duration: 1500,
            easing: 'spring(1, 100, 12, 0)',
          }}
        >
          <div>Search</div>
        </Anime>
      </ExampleAnimation>

      <ExampleAnimation
        code={staggerMultipleElementsExampleCode}
        title={'Stagger Multiple Elements'}
      >
        <Anime
          style={{
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: 'lightgrey',
            alignItems: 'left',
            width: '160px',
          }}
          config={{
            translateX: [-35, 0],
            scale: [0, 1],
            loop: true,
            delay: anime.stagger(100, { start: 200 }),
            easing: 'spring(1, 80, 13, 0)',
          }}
        >
          <div
            style={{
              backgroundColor: '#f1f1f1',
              width: '150px',
              margin: '5px',
              padding: '5px',
            }}
          >
            Transit
          </div>
          <div
            style={{
              backgroundColor: '#f1f1f1',
              width: '150px',
              margin: '5px',
              padding: '5px',
            }}
          >
            Food
          </div>
          <div
            style={{
              backgroundColor: '#f1f1f1',
              width: '150px',
              margin: '5px',
              padding: '5px',
            }}
          >
            Events
          </div>
        </Anime>
      </ExampleAnimation>
    </div>
  );
};
