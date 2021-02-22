import { ExampleAnimation } from './exampleAnimation';
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

      <ExampleAnimation />
    </div>
  );
};
