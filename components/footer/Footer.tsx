import styles from './Footer.module.scss';

export const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.leftColumnContainer}>
          <div>react-animejs-wrapper</div>
          <div className={styles.leftRowContainer}>
            <div>ISC License</div>
            <div>-</div>
            <div>2021</div>
            <div>-</div>
            <div>© Daniel Dupont</div>
          </div>
        </div>
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
