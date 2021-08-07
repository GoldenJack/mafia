import React, { useState } from 'react';
import {
  useTransition,
  useSpring,
  useChain,
  config,
  animated,
  useSpringRef,
} from '@react-spring/web'
import { defaultDeck as data } from '../../../../data';
import './style.scss';
import Card from '@material-ui/core/Card';

console.log(data);

export const StartScreen = () => {
  const [open, set] = useState(false);

  const springApi = useSpringRef();
  const { size, ...rest } = useSpring({
    ref: springApi,
    config: config.stiff,
    from: { size: '20%', background: 'hotpink' },
    to: {
      size: open ? '100%' : '20%',
      background: open ? 'white' : 'hotpink',
    },
  })

  const transApi = useSpringRef()
  const transition = useTransition(open ? data.cards : [], {
    ref: transApi,
    trail: 400 / data.length,
    from: { opacity: 0, scale: 0 },
    enter: { opacity: 1, scale: 1 },
    leave: { opacity: 0, scale: 0 },
  })

  // This will orchestrate the two animations above, comment the last arg and it creates a sequence
  useChain(open ? [springApi, transApi] : [transApi, springApi], [
    0,
    open ? 0.1 : 0.6,
  ])

  const AnimatedView = animated(Card);

  return (
    <div className='wrapper'>
      <animated.div
        style={{ ...rest, width: size, height: size }}
        className='container'
        onClick={() => set(open => !open)}>
        <h1>{data.title}</h1>
        {transition((style, item) => (
          <AnimatedView
            className={'item'}
            style={{ ...style }}
          >
              {item.heroName}
          </AnimatedView>
        ))}
      </animated.div>
    </div>
  )
};
