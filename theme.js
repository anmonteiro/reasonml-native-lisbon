import React from 'react';
import { future as theme } from 'mdx-deck/themes';
import ThemeProvider from 'mdx-deck/dist/Provider';

const Provider = ({ children, ...props }) => {
  return (
    <ThemeProvider {...props}>
      {children}

      {props.index > 0 && (
        <div
          style={{
            position: 'absolute',
            bottom: '1.5em',
            left: '1.5em',
            fontSize: '1.25em',
          }}
        >
          <a
            style={{ color: theme.colors.link }}
            href='https://twitter.com/_anmonteiro'
          >
            @_anmonteiro
          </a>
        </div>
      )}
    </ThemeProvider>
  );
};

export default {
  ...theme,
  Provider,
};
