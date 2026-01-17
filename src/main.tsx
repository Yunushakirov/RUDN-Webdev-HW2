import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ThemeProvider, createTheme } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"
import MainApp from "./MainApp"

const qc = new QueryClient()

const tatarTheme = createTheme({
  palette: {
    primary: {
      main: "#00B956",
      light: "#4ACF7A",
      dark: "#008A3F",
      contrastText: "#FFFFFF"
    },
    secondary: {
      main: "#E4002B",
      light: "#FF4A5C",
      dark: "#B0001F",
      contrastText: "#FFFFFF"
    },
    background: {
      default: "#F8F9FA",
      paper: "#FFFFFF"
    },
    text: {
      primary: "#1A1A1A",
      secondary: "#4A5568"
    }
  },
  typography: {
    fontFamily: '"Roboto", "Arial", sans-serif',
    h4: {
      fontWeight: 600
    },
    h5: {
      fontWeight: 600
    }
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: "linear-gradient(135deg, #00B956 0%, #E4002B 100%)"
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: "0 2px 8px rgba(0,185,86,0.15)"
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: "none",
          fontWeight: 500
        },
        contained: {
          boxShadow: "0 2px 6px rgba(0,185,86,0.3)"
        }
      }
    }
  }
})

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={tatarTheme}>
      <CssBaseline />
      <QueryClientProvider client={qc}>
        <BrowserRouter>
          <MainApp />
        </BrowserRouter>
      </QueryClientProvider>
    </ThemeProvider>
  </React.StrictMode>
)
