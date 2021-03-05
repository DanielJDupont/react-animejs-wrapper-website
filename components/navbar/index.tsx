import styles from './index.module.scss';

export const Navbar = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.title}>react-animejs-wrapper</div>
        <a
          href="https://www.npmjs.com/package/react-animejs-wrapper"
          target="_blank"
          className={styles.button}
        >
          View on npm
        </a>
      </div>
    </div>
  );
};
