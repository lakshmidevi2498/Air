import React, { useEffect, useRef, lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import store from './redux/store';
import { Grid } from '@mui/material';
import './App.css';

import CircularProgress from '@mui/material/CircularProgress';

const FlashPage = lazy(() => import('./pages/Flashpage'));
const InnerProductsPage = lazy(() => import('./pages/InnerProductspage'));
const SignupPage = lazy(() => import('./pages/Signuppage'));
const SearchPage = lazy(() => import('./pages/Searchpage'));
const ProductsPage = lazy(() => import('./pages/Productspage'));
const AllImagesPage = lazy(() => import('./pages/AllImagespage'));
const ProfilePage = lazy(() => import('./pages/Profilepage'));

const ScrollToTop = () => {
  const pathname = useLocation();
  const prevPathname = useRef();

  useEffect(() => {
    if (prevPathname.current !== pathname) {
      window.scrollTo(0, 0);
      prevPathname.current = pathname;
    }
  }, [pathname]);

  return null;
};

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ScrollToTop />
        <ToastContainer />
        <Suspense fallback={
          <Grid container justifyContent="center" alignItems="center" style={{ minHeight: '100vh',color:"green" }}>
          <CircularProgress />
        </Grid>
        }>
          <Routes>
            <Route path='/' exact element={<FlashPage />} />
            <Route path='/products' element={<ProductsPage />} />
            <Route path='/innerproducts' element={<InnerProductsPage />} />
            <Route path='/allimages' element={<AllImagesPage />} />
            <Route path='/signup' element={<SignupPage />} />
            <Route path='/search' element={<SearchPage />} />
            <Route path='/profile' element={<ProfilePage />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

