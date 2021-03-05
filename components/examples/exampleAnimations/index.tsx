import styles from './index.module.scss';
import { SlidingOneElementExample } from './SlidingOneElementExample';
import { StaggerMultipleElementsExample } from './StaggerMultipleElementsExample';

export const ExampleAnimations: React.FC = () => {
  return (
    <div className={styles.container}>
      <SlidingOneElementExample />
      <StaggerMultipleElementsExample />
    </div>
  );
};
