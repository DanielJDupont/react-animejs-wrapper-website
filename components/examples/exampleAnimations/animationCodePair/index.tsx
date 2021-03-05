import styles from './index.module.scss';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import dark from '../../codeStyling';

export const AnimationCodePair: React.FC<{
  title: string;
  code: string;
}> = ({ title, code, children }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.columnContainer}>
        <div className={styles.title}>{title}</div>
        <div className={styles.rowContainer}>
          <div className={styles.animation}>{children}</div>
          <SyntaxHighlighter
            className={styles.code}
            language="jsx"
            style={dark}
          >
            {code}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  );
};
