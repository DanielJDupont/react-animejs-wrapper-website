import GetAppIcon from '@material-ui/icons/GetApp';

import styles from './index.module.scss';

export const Installation = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.title}>
          <GetAppIcon className={styles.icon} />
          Installation
        </div>

        <div className={styles.package}>
          <div className={styles.using}>Using npm</div>
          <div className={styles.code}>npm i react-anime-js</div>
        </div>

        <div className={styles.package}>
          <div className={styles.using}>Using yarn</div>
          <div className={styles.code}>yarn add react-anime-js</div>
        </div>
      </div>
    </div>
  );
};
