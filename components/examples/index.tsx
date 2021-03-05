import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

import { ExampleAnimations } from './exampleAnimations';
import dark from './codeStyling';

import styles from './index.module.scss';

const importExample = `import Anime, { anime } from 'react-animejs-wrapper';`;

export const Examples = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.title}>Sample Components</div>
        <div className={styles.importDescription}>
          You'll want this at the top of your file:
        </div>

        <SyntaxHighlighter className={styles.code} language="jsx" style={dark}>
          {importExample}
        </SyntaxHighlighter>

        <div className={styles.description}>
          For more information on what can be passed into the config parameter
          for Anime components please see the{' '}
          <a
            className={styles.AnimeDocumentationLink}
            href="https://animejs.com/documentation/"
            target="_blank"
          >
            documentation for Anime.js
          </a>
          .
        </div>
      </div>

      <ExampleAnimations />
    </div>
  );
};
