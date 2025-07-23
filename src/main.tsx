import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.tsx'
import { ThemeProvider } from './context/ThemeProvider.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import './i18n/i18n.ts';

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
        <QueryClientProvider client={queryClient}>
          {/* <CssBaseline />
          <ReactQueryDevtools /> */}
          <App />
        </QueryClientProvider>
    </ThemeProvider>
  </StrictMode>,
)
