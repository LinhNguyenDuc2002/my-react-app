import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.tsx'
import { ThemeProvider } from './context/ThemeProvider.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import './i18n/i18n.ts';
import { Provider } from 'react-redux'
import store from './redux/store.ts'

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
        <Provider store={store}>
          <QueryClientProvider client={queryClient}>
            {/* <CssBaseline />
            <ReactQueryDevtools /> */}
            <App />
          </QueryClientProvider>
        </Provider>
    </ThemeProvider>
  </StrictMode>,
)
