import Anime, { anime } from 'react-animejs-wrapper';

import styles from './index.module.scss';

export const HomeAnimation = () => {
  const rainbowColorGenerator = (i: any) => {
    console.log(i);
    const colorMap = {
      0: '#000000',
      1: '#a52a2a',
      2: '#f00302',
      3: '#f5a503',
      4: '#fdff03',
      5: '#2b7f01',
      6: '#206400',
      7: '#2400ff',
      8: '#ee82ee',
      9: '#7f0080',
    };

    const index = i % Object.keys(colorMap).length;

    return colorMap[index];
  };

  // There is some approach to generate an immutably and functionally with an array using [...] new Array(10) .keys() but I don't remember how to do it.
  const array = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

  const final = array.map((value, key) => {
    return (
      <div
        className={styles.element}
        style={{ backgroundColor: rainbowColorGenerator(key) }}
      />
    );
  });

  return (
    <div className={styles.container}>
      <div className={styles.title}>React Anime.js Wrapper</div>
      <div className={styles.subtitle}>
        A library for using Anime.js in React.
      </div>

      <Anime
        className={styles.bigAnimation}
        config={{
          keyframes: [
            {
              scale: 1,
              borderRadius: '5px',
              duration: 200,
            },
            {
              translateY: 25,
              translateX: 0,
              scale: 0.5,
              borderRadius: '50px',
            },
            {
              translateY: 0,
              scale: 1,
              borderRadius: '5px',
            },
            {
              scaleX: 0.5,
              borderRadius: '50px',
            },
            {
              scaleX: 0.8,
              scaleY: 0.5,
              borderRadius: '5px',
              duration: 500,
            },
          ],
          duration: 4000,

          delay: anime.stagger(100, { start: 50 }),
          endDelay: 0,
          loop: true,
          direction: 'alternate',
        }}
      >
        {final}
      </Anime>
    </div>
  );
};
