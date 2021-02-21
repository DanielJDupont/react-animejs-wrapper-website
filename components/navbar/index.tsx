import styles from './index.module.scss';

export const Navbar = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.title}>react-animejs-wrapper</div>
        <div className={styles.button}>View on npm</div>
      </div>
    </div>
  );
};
