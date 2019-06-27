import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const StyledHighlight = styled.span(props => ({
  display: 'inline-block',
  position: 'absolute',
  border: '1px solid white',
  borderRadius: '12px',
  marginLeft: '-6px',
  paddingLeft: '6px',
  height: '60px',
  lineHeight: 1.4,
  backgroundColor: props.color,
  zIndex: props.z,
  top: props.top + 'px',
  left: props.left + 'px',
  width: props.width + 6 + 'px',
  cursor: 'pointer',
  transition: 'width 1s, left 1s, top 1s'
}));

export const Highlight = memo(({ color, z, top, left, width, children }) => (
  <StyledHighlight color={color} z={z} top={top} left={left} width={width}>
    {children}
  </StyledHighlight>
));

Highlight.propTypes = {
  children: PropTypes.any
};
