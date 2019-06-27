import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const StyledWord = styled.span({
  display: 'inline-block',
  position: 'relative',
  paddingLeft: '.4em',
  paddingRight: '0',
  zIndex: -1
});

export const Word = memo(props => (
  <StyledWord className="word">{props.children}</StyledWord>
));

Word.propTypes = {
  children: PropTypes.any
};
