import React from 'react';

export default ({ children, ...props }) => (
  <div
    style={{
      backgroundColor: 'tomato',
      position: 'absolute',
      height: '200px',
      width: '200px',
      bottom: 0,
      left: 0,
      ...props,
    }}
  >
    {children}
  </div>
);
