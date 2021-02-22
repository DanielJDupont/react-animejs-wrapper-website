import styles from './index.module.scss';

export const ExampleAnimation = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.animation}>Animation</div>
        <div className={styles.code}>Code</div>
      </div>
    </div>
  );
};
