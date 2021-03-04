import styles from './index.module.scss';
import Anime, { anime } from 'react-animejs-wrapper';

export const HomeAnimation = () => {
  const rainbowColorGenerator = (i: number) => {
    const colorMap = {
      0: 'black',
      1: 'brown',
      2: 'red',
      3: 'orange',
      4: 'yellow',
      5: 'green',
      6: 'darkgreen',
      7: 'blue',
      8: 'violet',
      9: 'purple',
    };

    return colorMap[i];
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
              width: '100px',
              borderRadius: '50px',
            },
            {
              translateX: anime.stagger('50px'),
              rotate: '1turn',
            },
          ],
          loop: true,
          duration: 6000,
          direction: 'alternate',
          delay: anime.stagger(100),
        }}
      >
        {final}
      </Anime>
    </div>
  );
};
