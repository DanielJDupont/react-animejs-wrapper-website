import Anime from 'react-animejs-wrapper';
import SearchIcon from '@material-ui/icons/Search';

import styles from './index.module.scss';

export const ExampleAnimation: React.FC<{
  title: string;
  anime: React.ReactElement;
  code: string;
}> = ({ title, anime, code }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.columnContainer}>
        <div className={styles.title}>{title}</div>
        <div className={styles.rowContainer}>
          <div className={styles.animation}>{anime}</div>
          <div className={styles.code}>{code}</div>
        </div>
      </div>
    </div>
  );
};
