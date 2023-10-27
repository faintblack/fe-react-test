// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import React from "react";
import { useMemo } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";

import { toggleColorMode } from './features/themeSlice'
import { ThemeProvider, createTheme } from '@mui/material/styles'
// import BreadCrumbsComp from './components/breadcrumbs'
// import Typography from '@mui/material/Typography'
import { IconButton, Box } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Home from './pages/Home';

function App() {
  const colorMode = useSelector(state => state.theme.colorMode)

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: colorMode,
        },
      }),
    [colorMode],
  );
  
  const dispatch = useDispatch()

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            display: 'flex',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            bgcolor: 'background.default',
            color: 'text.primary',
            // borderRadius: 1,
            // p: 3,
          }}
        >
          <div style={{
            width: '100%',
            height: '100%',
            margin: '0px auto',
            padding: '0 2rem',
            textAlign: 'center',
          }}>
            <Box>
              <IconButton sx={{ ml: 1 }} onClick={() => dispatch(toggleColorMode())} color="inherit">
                {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
              </IconButton>
            </Box>

            {/* ROUTES */}
            <Routes>
              <Route path="/tes" element={<Home/>} />
              <Route path="/" element={<Home/>} />
            </Routes>

          </div>
        </Box>
      </ThemeProvider>
    </Router>
  )
}

export default App