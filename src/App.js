import React from 'react';
import { Highlighter } from './components/Highlighter';

const App = () => {
  const string =
    'The universe (which others call the Library) is composed of an indefinite, perhaps an infinite, number of hexagonal galleries, with enormous ventilation shafts in the middle, encircled by very low railings. From any hexagon the upper or lower stories are visible, interminably.';
  const highlights = [
    {
      offset: 1,
      color: '#d9f593',
      priority: 0
    },
    {
      offset: 6,
      color: '#e8e8e8',
      priority: 1
    },
    {
      offset: 11,
      color: '#b5e0f5',
      priority: 2
    },
    {
      offset: 14,
      color: '#d9f593',
      priority: 0
    },
    {
      offset: 18,
      color: '#eecca0',
      priority: 3
    },
    {
      offset: 25,
      color: '#e8e8e8',
      priority: 1
    },
    {
      offset: 32,
      color: '#b5e0f5',
      priority: 2
    },
    {
      offset: 38,
      color: '#eecca0',
      priority: 3
    },
    {
      offset: 41,
      color: '#e8e8e8',
      priority: 1
    }
  ];

  return <Highlighter string={string} highlights={highlights} />;
};

export default App;
