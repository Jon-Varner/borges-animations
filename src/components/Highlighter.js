import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Word } from './Word';
import { Highlight } from './Highlight';

export class Highlighter extends Component {
  state = {
    containerWidth: 0,
    highlights: []
  };

  componentDidMount() {
    this.placeHighlights();
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = e => {
    this.placeHighlights();
  };

  placeHighlights() {
    const container = document.querySelector('.container');
    const bounds = container.getBoundingClientRect();

    if (
      this.state.highlights.length === 0 ||
      bounds.width !== this.state.containerWidth
    ) {
      this.setState({ containerWidth: bounds.width });

      const wordEls = [...document.querySelectorAll('.word')];

      const wordBounds = wordEls.map(el => {
        const bounds = el.getBoundingClientRect();
        return {
          top: bounds.top,
          left: bounds.left,
          right: bounds.right,
          width: bounds.width
        };
      });

      const highlights = this.props.highlights.map((highlight, index) => {
        const words = this.props.string.split(' ');
        return (
          <Highlight
            key={'highlight' + index}
            color={highlight.color}
            z={1000 + highlight.priority * -1}
            top={wordBounds[highlight.offset].top - 33}
            left={wordBounds[highlight.offset].left - 30}
            width={
              wordBounds[highlight.offset].right -
              wordBounds[highlight.offset].left -
              6
            }
          >
            {words[highlight.offset]}
          </Highlight>
        );
      });

      this.setState({ highlights: highlights });
    }
  }

  moveHighlights() {
    const container = document.querySelector('.container');
    const bounds = container.getBoundingClientRect();

    if (bounds.width !== this.state.containerWidth) {
      this.setState({ containerWidth: bounds.width });

      const wordEls = [...document.querySelectorAll('.word')];
      const highlightEls = [...document.querySelectorAll('.highlight')];

      const wordBounds = wordEls.map(el => {
        const bounds = el.getBoundingClientRect();
        return {
          top: bounds.top,
          left: bounds.left,
          right: bounds.right,
          width: bounds.width
        };
      });

      highlightEls.forEach(highlight => {
        let rand = Math.floor(Math.random() * wordBounds.length - 1);
        highlight.innerHTML = wordEls[rand].textContent;
        highlight.style.top = wordBounds[rand].top;
        highlight.style.left = wordBounds[rand].left;
        highlight.style.width =
          wordBounds[rand].right - wordBounds[rand].left - 6;
        //change highlight top and left
      });
    }
  }

  render() {
    return (
      <p className="container">
        {this.props.string.split(' ').map((word, index) => (
          <Word key={'word' + index}>{word}</Word>
        ))}
        {this.state.highlights}
      </p>
    );
  }
}

Highlighter.propTypes = {
  string: PropTypes.string.isRequired,
  highlights: PropTypes.array.isRequired
};
