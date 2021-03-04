import Anime from 'react-animejs-wrapper';
import SearchIcon from '@material-ui/icons/Search';

import styles from './index.module.scss';

export const ExampleAnimation: React.FC<{
  title: string;
  code: string;
}> = ({ title, code, children }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.columnContainer}>
        <div className={styles.title}>{title}</div>
        <div className={styles.rowContainer}>
          <div className={styles.animation}>{children}</div>
          <div className={styles.code}>{code}</div>
        </div>
      </div>
    </div>
  );
};
