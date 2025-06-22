import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.tsx'
import { ThemeProvider } from './context/ThemeContextProvider.tsx'
import { DefaultAppContextProvider } from './context/DefaultAppContextProvider.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      gcTime: 600000, // default 5 minutes
    },
  },
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <ThemeProvider>
        <DefaultAppContextProvider>
          <QueryClientProvider client={queryClient}>
            {/* <CssBaseline />
            <ReactQueryDevtools /> */}

            <App />
          </QueryClientProvider>
        </DefaultAppContextProvider>
    </ThemeProvider>
  </StrictMode>,
)
