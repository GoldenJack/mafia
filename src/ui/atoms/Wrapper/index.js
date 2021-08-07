import React from 'react';
import * as T from 'prop-types';

const propTypes = {
  children: T.element.isRequired,
  className: T.string
};

export const Wrapper = props => {
  const { children, className } = props;
  return (
    <div className={className}>
      { children }
    </div>
  )
};

Wrapper.propTypes = propTypes;
