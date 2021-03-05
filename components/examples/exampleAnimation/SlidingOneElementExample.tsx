import Anime, { anime } from 'react-animejs-wrapper';

import { ExampleAnimation } from './index';

const slidingOneElementExampleCode = `<Anime
style={{
  backgroundColor: 'lightgrey',
  width: '125px',
  padding: '5px',
  borderRadius: '5px',
}}
config={{
  translateY: [0, 25],
  scale: [0.8, 1],
  loop: true,
  duration: 1500,
  easing: 'spring(1, 100, 12, 0)',
}}
>
<div>Search</div>
</Anime>
`;

export const SlidingOneElementExample = () => {
  return (
    <ExampleAnimation
      code={slidingOneElementExampleCode}
      title={'Sliding One Element'}
    >
      <Anime
        style={{
          backgroundColor: 'lightgrey',
          width: '125px',
          padding: '5px',
          borderRadius: '5px',
        }}
        config={{
          translateY: [0, 25],
          scale: [0.8, 1],
          loop: true,
          duration: 1500,
          easing: 'spring(1, 100, 12, 0)',
        }}
      >
        <div>Search</div>
      </Anime>
    </ExampleAnimation>
  );
};
