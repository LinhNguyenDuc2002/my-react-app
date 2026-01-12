import './App.css'
import { Suspense, useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import { routes } from './routes/routes';
import { useDispatch } from 'react-redux';
import { fetchUserInfo } from './redux/actions/userSlice';
import type { AppDispatch } from './redux/store';

function App() {
  const dispatch: AppDispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchUserInfo());
  }, [dispatch]);

  return (
    <Suspense fallback={<div className="container">Loading...</div>}>
        <RouterProvider router={routes} />
    </Suspense>
  )
}

export default App;
