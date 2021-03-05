import Anime, { anime } from 'react-animejs-wrapper';

import { ExampleAnimation } from './index';

const staggerMultipleElementsExampleCode = `<Anime
style={{
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: 'lightgrey',
  alignItems: 'left',
  width: '160px',
}}
config={{
  translateX: [-35, 0],
  scale: [0, 1],
  loop: true,
  delay: anime.stagger(100, { start: 200 }),
  easing: 'spring(1, 80, 13, 0)',
}}
>
<div
  style={{
    backgroundColor: '#f1f1f1',
    width: '150px',
    margin: '5px',
    padding: '5px',
  }}
>
  Transit
</div>
<div
  style={{
    backgroundColor: '#f1f1f1',
    width: '150px',
    margin: '5px',
    padding: '5px',
  }}
>
  Food
</div>
<div
  style={{
    backgroundColor: '#f1f1f1',
    width: '150px',
    margin: '5px',
    padding: '5px',
  }}
>
  Events
</div>
</Anime>
`;

export const StaggerMultipleElementsExample = () => {
  return (
    <ExampleAnimation
      code={staggerMultipleElementsExampleCode}
      title={'Stagger Multiple Elements'}
    >
      <Anime
        style={{
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: 'lightgrey',
          alignItems: 'left',
          width: '160px',
        }}
        config={{
          translateX: [-35, 0],
          scale: [0, 1],
          loop: true,
          delay: anime.stagger(100, { start: 200 }),
          easing: 'spring(1, 80, 13, 0)',
        }}
      >
        <div
          style={{
            backgroundColor: '#f1f1f1',
            width: '150px',
            margin: '5px',
            padding: '5px',
          }}
        >
          Transit
        </div>
        <div
          style={{
            backgroundColor: '#f1f1f1',
            width: '150px',
            margin: '5px',
            padding: '5px',
          }}
        >
          Food
        </div>
        <div
          style={{
            backgroundColor: '#f1f1f1',
            width: '150px',
            margin: '5px',
            padding: '5px',
          }}
        >
          Events
        </div>
      </Anime>
    </ExampleAnimation>
  );
};
