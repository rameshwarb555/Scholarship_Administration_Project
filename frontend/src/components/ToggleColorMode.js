import React, { useState, useMemo, createContext } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';


export const ColorModeContext = createContext({ toggleColorMode: () => {}, theme: {} });

function ToggleColorMode({ children }) {
  const [mode, setMode] = useState('light');
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    []
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  const themeWithOverrides = useMemo(
    () =>
      createTheme(theme, {
        components: {
          MuiIconButton: {
            styleOverrides: {
              root: {
                color: theme.palette.mode === 'dark' ? '#fff' : '#000',
              },
            },
          },
        },
      }),
    [theme]
  );

  return (
    <ColorModeContext.Provider value={{ toggleColorMode: colorMode.toggleColorMode, theme }}>
      <ThemeProvider theme={themeWithOverrides}>
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default ToggleColorMode;
