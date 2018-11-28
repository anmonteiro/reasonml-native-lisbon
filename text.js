import React from 'react';

export const Ul = ({ children, css }) => (
  <ul style={{ fontSize: '1.5em', textAlign: 'left', ...css }}>{children}</ul>
);

export const Ol = ({ children, css }) => (
  <ol style={{ fontSize: '1.5em', textAlign: 'left', ...css }}>{children}</ol>
);

export const Code = ({ children }) => (
  <code style={{ fontFamily: 'Menlo,monospace', color: '#0af' }}>
    {children}
  </code>
);

export const Text = ({ children, ...props }) => (
  <div style={{ fontSize: '32px', fontWeight: 'bold', ...props }}>
    {children}
  </div>
);

export const Heading = ({ tag, css, children }) => {
  let fontSize;
  switch (tag) {
    case 'h2':
      fontSize = '2em';
      break;
    case 'h3':
      fontSize = '1.5em';
      break;
    case 'h4':
      fontSize = '1em';
      break;
    case 'h5':
      fontSize = '0.83em';
      break;
    case 'h6':
      fontSize = '0.67em';
      break;
    case 'h1':
    default:
      '3em';
  }
  let style = {
    lineHeight: '1.25',
    fontSize,
    marginBottom: '16px',
    marginTop: '16px',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    fontWeight: 600,
    ...css,
  };
  const Tag = tag || 'h1';
  return <Tag style={style}>{children}</Tag>;
};
